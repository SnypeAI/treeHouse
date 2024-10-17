const fs = require('fs');
const path = require('path');

// Load configuration
const config = require('./tree-config.json');

// Symbols for tree structure
const treeSymbols = {
    branch: '├── ',
    lastBranch: '└── ',
    verticalLine: '│   ',
    space: '    ',
    folder: '📂',
    file: '📄'
};

// Helper function to print directory tree
function printDirectoryTree(dir, depth = 0, prefix = '') {
    if (config.excludeFolders.some(excludedFolder => dir.includes(excludedFolder))) {
        return;
    }

    const files = fs.readdirSync(dir);
    const totalFiles = files.length;

    files.forEach((file, index) => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);

        const isLast = index === totalFiles - 1;
        const newPrefix = prefix + (isLast ? treeSymbols.space : treeSymbols.verticalLine);

        // Exclude specific files
        if (config.excludeFiles.some(excludedFile => file.includes(excludedFile))) {
            return;
        }

        // Choose symbols for folder or file
        const symbol = stat.isDirectory() ? treeSymbols.folder : treeSymbols.file;
        const treeBranch = isLast ? treeSymbols.lastBranch : treeSymbols.branch;

        // Print file or directory name with indentation
        console.log(prefix + treeBranch + `${symbol} ${file}`);

        // Recursively print subdirectories
        if (stat.isDirectory()) {
            printDirectoryTree(filePath, depth + 1, newPrefix);
        }
    });
}

// Start from the current directory or a specified one
const startDir = process.argv[2] || '.';
console.log(`🌳 TreeHouse Directory Structure for: ${path.resolve(startDir)}`);
printDirectoryTree(startDir);
