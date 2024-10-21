const fs = require('fs');
const path = require('path');
const config = require('./tree-config.json');

const treeSymbols = {
    branch: '├── ',
    lastBranch: '└── ',
    verticalLine: '│   ',
    space: '    ',
    folder: '📂',
    file: '📄'
};

function isBinaryFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return config.fileTypes.binary.includes(ext);
}

function readFileContent(filePath) {
    if (isBinaryFile(filePath)) {
        const ext = path.extname(filePath).substring(1).toUpperCase();
        return `[Binary ${ext} file]`;
    }
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        return '[Unable to read file content]';
    }
}

function findDependencies(searchPath, targetFile) {
    const dependencies = new Set();
    if (!fs.existsSync(searchPath)) return Array.from(dependencies);

    function searchInFile(filePath, targetFile) {
        if (isBinaryFile(filePath)) return;
        
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const fileBaseName = path.basename(targetFile);
            const fileNameWithoutExt = path.basename(targetFile, path.extname(targetFile));
            
            // Package.json specific patterns
            if (fileBaseName === 'package.json') {
                const packageJsonPatterns = [
                    `"dependencies":\\s*{[^}]*"${fileNameWithoutExt}"`,
                    `"devDependencies":\\s*{[^}]*"${fileNameWithoutExt}"`,
                    `"peerDependencies":\\s*{[^}]*"${fileNameWithoutExt}"`,
                    `"scripts":\\s*{[^}]*"${fileNameWithoutExt}"`
                ];
                if (packageJsonPatterns.some(pattern => new RegExp(pattern).test(content))) {
                    dependencies.add(filePath);
                    return;
                }
            }

            // General import patterns
            const patterns = [
                `import.*from.*['"].*${fileNameWithoutExt}['"]`,
                `require\\(['"].*${fileNameWithoutExt}['"]\\)`,
                `import\\(['"].*${fileNameWithoutExt}['"]\\)`,
                `@import.*['"].*${fileNameWithoutExt}['"]`,
                `url\\(['"].*${fileNameWithoutExt}['"]\\)`,
                `src=["'].*${fileNameWithoutExt}["']`,
                `href=["'].*${fileNameWithoutExt}["']`,
                `from\\s+["'].*${fileNameWithoutExt}["']`
            ];

            if (patterns.some(pattern => new RegExp(pattern).test(content))) {
                dependencies.add(filePath);
            }
        } catch (error) {
            // Skip unreadable files
        }
    }

    function searchDirectory(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            if (config.excludeFolders.some(excluded => filePath.includes(excluded))) return;
            if (config.excludeFiles.some(excluded => file.includes(excluded))) return;

            const stat = fs.lstatSync(filePath);
            if (stat.isDirectory()) {
                searchDirectory(filePath);
            } else {
                searchInFile(filePath, targetFile);
            }
        });
    }

    searchDirectory(searchPath);
    return Array.from(dependencies);
}

function generateTree(dir, depth = 0, prefix = '', output = []) {
    if (config.excludeFolders.some(excludedFolder => dir.includes(excludedFolder))) return output;

    const files = fs.readdirSync(dir);
    files.forEach((file, index) => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);
        const isLast = index === files.length - 1;
        const newPrefix = prefix + (isLast ? treeSymbols.space : treeSymbols.verticalLine);

        if (config.excludeFiles.some(excludedFile => {
            const pattern = excludedFile.replace('*', '.*');
            return new RegExp(pattern).test(file);
        })) return;

        const symbol = stat.isDirectory() ? treeSymbols.folder : treeSymbols.file;
        const treeBranch = isLast ? treeSymbols.lastBranch : treeSymbols.branch;
        output.push(`${prefix}${treeBranch}${symbol} ${file}`);

        if (stat.isDirectory()) {
            generateTree(filePath, depth + 1, newPrefix, output);
        }
    });

    return output;
}

function analyzePackageJson(filePath, baseDir) {
    try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const dependencyTypes = ['dependencies', 'devDependencies', 'peerDependencies'];
        const usedBy = new Set();

        dependencyTypes.forEach(type => {
            if (content[type]) {
                Object.keys(content[type]).forEach(dep => {
                    // Search for files using this dependency
                    searchForDependencyUsage(baseDir, dep, usedBy);
                });
            }
        });

        return Array.from(usedBy);
    } catch (error) {
        return [];
    }
}

function searchForDependencyUsage(dir, dependency, usedBy) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (config.excludeFolders.some(excluded => filePath.includes(excluded))) return;
        if (config.excludeFiles.some(excluded => file.includes(excluded))) return;

        const stat = fs.lstatSync(filePath);
        
        if (stat.isDirectory()) {
            searchForDependencyUsage(filePath, dependency, usedBy);
        } else if (!isBinaryFile(filePath)) {
            try {
                const content = fs.readFileSync(filePath, 'utf8');
                const patterns = [
                    `import.*from.*['"]${dependency}['"]`,
                    `require\\(['"]${dependency}['"]\\)`,
                    `from\\s+["']${dependency}["']`
                ];

                if (patterns.some(pattern => new RegExp(pattern).test(content))) {
                    usedBy.add(filePath);
                }
            } catch (error) {
                // Skip unreadable files
            }
        }
    });
}

function generateFileContents(dir, baseDir, output = []) {
    if (config.excludeFolders.some(excludedFolder => dir.includes(excludedFolder))) return output;

    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);

        if (config.excludeFiles.some(excludedFile => {
            const pattern = excludedFile.replace('*', '.*');
            return new RegExp(pattern).test(file);
        })) return;

        if (stat.isDirectory()) {
            generateFileContents(filePath, baseDir, output);
        } else {
            const isPackageJson = path.basename(filePath) === 'package.json';
            let dependencies;
            
            if (isPackageJson) {
                dependencies = analyzePackageJson(filePath, baseDir);
            } else {
                dependencies = findDependencies(baseDir, filePath);
            }
            
            output.push(`\n## File: ${filePath}`);
            
            if (dependencies.length > 0) {
                output.push('\n### Dependencies');
                if (isPackageJson) {
                    output.push('Files that use dependencies defined in this package.json:');
                } else {
                    output.push('Files that import or require this file:');
                }
                dependencies.forEach(dep => {
                    output.push(`- ${dep}`);
                });
            }
            
            output.push('\n### Content');
            if (isBinaryFile(filePath)) {
                const ext = path.extname(filePath).substring(1).toUpperCase();
                output.push(`[Binary ${ext} file]`);
            } else {
                const extension = path.extname(filePath).slice(1);
                output.push('```' + extension);
                output.push(readFileContent(filePath));
                output.push('```');
            }
            output.push('');
        }
    });

    return output;
}

function parseArgs() {
    const args = process.argv.slice(2);
    return {
        directory: args[0] || '.',
        showTree: args.includes('-tree'),
        showContents: args.includes('-contents'),
        terminal: args.includes('-terminal'),
        output: args[args.indexOf('-output') + 1] || null
    };
}

function main() {
    const options = parseArgs();
    const output = [];
    const resolvedPath = path.resolve(options.directory);

    output.push(`# Directory Structure: ${resolvedPath}\n`);

    if (options.showTree) {
        output.push('## Directory Tree\n');
        output.push(...generateTree(resolvedPath), '\n');
    }

    if (options.showContents) {
        output.push('## File Contents\n');
        output.push(...generateFileContents(resolvedPath, resolvedPath));
    }

    const finalOutput = output.join('\n');

    if (options.terminal) {
        console.log(finalOutput);
    }

    if (options.output) {
        fs.writeFileSync(options.output, finalOutput);
        console.log(`Output saved to: ${options.output}`);
    }
}

main();