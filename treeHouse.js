#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import Table from 'cli-table3';

// Load configuration
const defaultConfig = {
    excludeFolders: [
        "node_modules",
        ".git",
        "build",
        "dist",
        ".next",
        "out",
        "public",
        "coverage",
        "logs"
    ],
    excludeFiles: [
        ".DS_Store",
        "Thumbs.db",
        "*.log",
        "package-lock.json"
    ],
    fileTypes: {
        binary: [
            ".ico", ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp", ".svg", ".psd",
            ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
            ".zip", ".tar", ".gz", ".7z", ".rar", ".iso",
            ".ttf", ".otf", ".woff", ".woff2", ".eot",
            ".mp3", ".wav", ".ogg", ".m4a", ".flac", ".aac",
            ".mp4", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".webm",
            ".db", ".sqlite", ".mdb",
            ".exe", ".dll", ".so", ".dylib",
            ".bin", ".dat"
        ],
        code: [
            ".js", ".ts", ".jsx", ".tsx", 
            ".css", ".scss", ".sass", ".less", 
            ".html", ".htm", 
            ".json", ".yml", ".yaml",
            ".xml", ".svg",
            ".php", ".py", ".rb", ".java", ".cs", ".go",
            ".sql", ".graphql"
        ],
        text: [
            ".md", ".txt", ".rtf",
            ".env", ".env.local", ".env.development", ".env.production",
            ".config", ".conf", ".ini",
            ".csv", ".tsv",
            ".gitignore", ".npmignore",
            ".lock", ".toml"
        ]
    },
    frameworks: {
        cra: {
            excludeFolders: ["build", "coverage"],
            excludeFiles: [".DS_Store", "Thumbs.db"]
        },
        nextjs: {
            excludeFolders: [".next", "out"],
            excludeFiles: [".DS_Store", "Thumbs.db"]
        },
        gatsby: {
            excludeFolders: [".cache", "public"],
            excludeFiles: [".DS_Store", "Thumbs.db"]
        },
        reactNative: {
            excludeFolders: ["android", "ios", "node_modules"],
            excludeFiles: [".DS_Store", "Thumbs.db"]
        }
    }
};

// Load user config if available
let config = defaultConfig;
const configPath = path.join(process.cwd(), 'tree-config.json');
if (fs.existsSync(configPath)) {
    try {
        const userConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        config = { ...defaultConfig, ...userConfig };
        // Merge framework-specific exclusions if any
        if (userConfig.frameworks) {
            Object.keys(userConfig.frameworks).forEach(framework => {
                if (config.frameworks[framework]) {
                    config.frameworks[framework] = {
                        ...config.frameworks[framework],
                        ...userConfig.frameworks[framework]
                    };
                }
            });
        }
    } catch (error) {
        console.error(chalk.red('Error parsing tree-config.json. Using default configuration.'));
    }
}

// Define tree symbols without colors
const treeSymbols = {
    branch: '├── ',
    lastBranch: '└── ',
    verticalLine: '│   ',
    space: '    ',
    folder: '📂',
    file: '📄'
};

// Global variables to store endpoints and options
let globalEndpointsMap = new Map();
let globalOptions = {};
let pathAliases = {};

// Utility Functions

/**
 * Logs messages with different levels and styles.
 * @param {string} level - Log level: INFO, DEBUG, WARN, ERROR.
 * @param {string} message - The message to log.
 */
function log(level, message) {
    const timestamp = new Date().toISOString();
    switch(level) {
        case 'INFO':
            console.log(`${chalk.cyan('[INFO]')} [${timestamp}] ${message}`);
            break;
        case 'DEBUG':
            console.log(`${chalk.magenta('[DEBUG]')} [${timestamp}] ${message}`);
            break;
        case 'WARN':
            console.log(`${chalk.yellow('[WARN]')} [${timestamp}] ${message}`);
            break;
        case 'ERROR':
            console.log(`${chalk.red('[ERROR]')} [${timestamp}] ${message}`);
            break;
        default:
            console.log(`[${level}] ${message}`);
    }
}

/**
 * Animates the startup of the script.
 */
function animateStartup() {
    const animation = chalkAnimation.karaoke('🎬 Initializing Directory Traversal Script...');
    setTimeout(() => {
        animation.stop(); // Stop the animation after a short duration
    }, 2000);
}

/**
 * Determines if a file is binary based on its extension.
 * @param {string} ext - File extension.
 * @returns {boolean}
 */
function isBinary(ext) {
    return config.fileTypes.binary.includes(ext.toLowerCase());
}

/**
 * Reads the content of a file.
 * @param {string} filePath - Absolute path to the file.
 * @returns {string}
 */
function readFileContent(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (isBinary(ext)) {
        const upperExt = ext.substring(1).toUpperCase();
        return `[Binary ${upperExt} file]`;
    }
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        log('WARN', `Unable to read file content: ${filePath}`);
        return '[Unable to read file content]';
    }
}

/**
 * Detects HTTP methods used in API endpoint files.
 * @param {string} content - File content.
 * @param {string} filePath - Absolute path to the file.
 * @returns {Set<string>}
 */
function detectHTTPMethods(content, filePath) {
    const methods = new Set();
    const patterns = {
        GET: [
            'export async function GET',
            'export function GET',
            '\\.get\\(',
            'method: [\'"]GET[\'"]',
            'method: `GET`'
        ],
        POST: [
            'export async function POST',
            'export function POST',
            '\\.post\\(',
            'method: [\'"]POST[\'"]',
            'method: `POST`'
        ],
        PUT: [
            'export async function PUT',
            'export function PUT',
            '\\.put\\(',
            'method: [\'"]PUT[\'"]',
            'method: `PUT`'
        ],
        DELETE: [
            'export async function DELETE',
            'export function DELETE',
            '\\.delete\\(',
            'method: [\'"]DELETE[\'"]',
            'method: `DELETE`'
        ],
        PATCH: [
            'export async function PATCH',
            'export function PATCH',
            '\\.patch\\(',
            'method: [\'"]PATCH[\'"]',
            'method: `PATCH`'
        ]
    };

    Object.entries(patterns).forEach(([method, methodPatterns]) => {
        methodPatterns.forEach(pattern => {
            if (new RegExp(pattern).test(content)) {
                methods.add(method);
            }
        });
    });

    // Additionally, check for Supabase connections (e.g., imports from '@supabase/supabase-js')
    const supabasePattern = /import\s+.*['"]@supabase\/supabase-js['"]/;
    if (supabasePattern.test(content)) {
        methods.add('SUPABASE');
        log('DEBUG', `Supabase connection detected in: [File] ${path.basename(filePath)}`);
    }

    return methods;
}

/**
 * Parses command-line arguments.
 * @returns {Object}
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        directory: '.',
        showTree: false,
        showContents: false,
        terminal: false,
        output: null,
        component: null
    };

    for (let i = 0; i < args.length; i++) {
        switch(args[i]) {
            case '-tree':
                options.showTree = true;
                break;
            case '-contents':
                options.showContents = true;
                break;
            case '-terminal':
                options.terminal = true;
                break;
            case '-output':
                if (i + 1 < args.length) {
                    options.output = args[i + 1];
                    i++;
                } else {
                    log('ERROR', 'Missing filename after -output');
                }
                break;
            case '-component':
                if (i + 1 < args.length) {
                    options.component = path.resolve(args[i + 1]);
                    i++;
                } else {
                    log('ERROR', 'Missing file path after -component');
                }
                break;
            case '-help':
                printHelp();
                process.exit(0);
            default:
                if (!options.directory || options.directory === '.') {
                    options.directory = path.resolve(args[i]);
                }
        }
    }

    return options;
}

/**
 * Prints help information.
 */
function printHelp() {
    console.log(`
${chalk.bold('📂 Directory Traversal Script 📂')}

${chalk.bold('Usage:')}
  node treeHouse.js [directory] [options]

${chalk.bold('Options:')}
  -tree           Generate and include the directory tree in the output.
  -contents       Generate and include file contents with API relationships and dependencies.
  -terminal       Output the final result to the terminal.
  -output <file>  Save the final result to the specified file.
  -component <file> Analyze a specific component and display its dependencies and endpoints.
  -help           Display this help message.

${chalk.bold('Example:')}
  node treeHouse.js /path/to/project -tree -contents -terminal -output output.md
  node treeHouse.js -contents -output project.md -component ./src/app/checkout/page.tsx
`);
}

/**
 * Maps an API endpoint path to its corresponding file.
 * @param {string} endpointPath - The API endpoint path (e.g., /api/user).
 * @returns {string|null} - The file path corresponding to the endpoint or null if not found.
 */
function mapEndpointToFile(endpointPath) {
    // Normalize endpoint path to ensure consistency
    let normalizedEndpoint = endpointPath.replace(/\\/g, '/'); // For Windows paths
    normalizedEndpoint = normalizedEndpoint.replace(/\/+$/, ''); // Remove trailing slashes

    // Iterate through the endpoints map to find a matching endpoint
    for (const [filePath, endpointInfo] of globalEndpointsMap.entries()) {
        let relativePath = path.relative(path.resolve(globalOptions.directory), filePath).replace(/\\/g, '/');
        let expectedEndpoint = `/${relativePath.replace(/\.jsx?$/, '').replace(/\.tsx?$/, '').replace(/\.d\.ts$/, '').replace(/route$/, '')}`;

        // Adjust for 'pages/api' or 'app/api' structures
        expectedEndpoint = expectedEndpoint.replace(/\/pages\/api\//, '/api/')
                                         .replace(/\/app\/api\//, '/api/');

        expectedEndpoint = expectedEndpoint.replace(/\/+$/, ''); // Remove trailing slashes

        if (normalizedEndpoint === expectedEndpoint) {
            return filePath;
        }
    }

    // If not found, return null
    return null;
}

/**
 * Finds API endpoints within the base directory.
 * @param {string} baseDir - The base directory to search.
 * @returns {Map<string, Object>}
 */
function findAPIEndpoints(baseDir) {
    const endpoints = new Map();

    // Define API directory patterns
    const apiPatterns = [
        '**/api/*.ts',
        '**/api/*.js',
        '**/api/*.tsx',
        '**/api/*.jsx',
        '**/api/**/*.ts',
        '**/api/**/*.js',
        '**/api/**/*.tsx',
        '**/api/**/*.jsx',
        '**/api/**/route.ts',
        '**/api/**/route.js'
    ];

    // Define exclusion patterns
    const excludePatterns = config.excludeFolders.map(folder => `**/${folder}/**`)
        .concat(config.excludeFiles.map(file => {
            if (file.startsWith('*')) {
                return `**/${file}`;
            }
            return `**/${file}`;
        }));

    log('DEBUG', `Finding API endpoints with patterns: ${apiPatterns.join(', ')}`);
    log('DEBUG', `Excluding patterns: ${excludePatterns.join(', ')}`);

    // Fetch all API endpoint files
    const entries = fg.sync(apiPatterns, {
        cwd: baseDir,
        absolute: true,
        dot: true,
        ignore: excludePatterns
    });

    log('DEBUG', `Found ${entries.length} API endpoint file(s).`);

    entries.forEach(filePath => {
        const content = readFileContent(filePath);
        const methods = detectHTTPMethods(content, filePath);

        if (methods.size > 0) {
            endpoints.set(filePath, {
                methods,
                content,
                usedBy: new Set()
            });
            log('DEBUG', `Endpoint found: ${filePath} with methods: ${Array.from(methods).join(', ')}`);
        } else {
            log('DEBUG', `File ${filePath} does not contain any recognized HTTP methods.`);
        }
    });

    log('INFO', `Found ${endpoints.size} API endpoint(s).`);

    return endpoints;
}

/**
 * Finds endpoints used by a specific file.
 * @param {string} filePath - The file to analyze.
 * @param {string} baseDir - The base directory.
 * @returns {Set<string>}
 */
function findEndpointUsage(filePath, baseDir) {
    if (isBinary(path.extname(filePath))) return new Set();

    const content = readFileContent(filePath);
    const usedEndpoints = new Set();

    const patterns = [
        // fetch patterns
        /fetch\(['"`](\/api\/[^'"`]+)['"`]/g,
        /fetch\(`\/api\/([^'"`]+)`\)/g,
        // axios patterns
        /axios\.[a-z]+\(['"`](\/api\/[^'"`]+)['"`]/g,
        /axios\(['"`](\/api\/[^'"`]+)['"`]/g,
        // $fetch (Nuxt) patterns
        /\$fetch\(['"`](\/api\/[^'"`]+)['"`]/g,
        // General HTTP method patterns
        /(get|post|put|delete|patch)\(['"`](\/api\/[^'"`]+)['"`]/gi,
        // Template literal patterns
        /`\/api\/([^`]+)`/g,
        // Direct path references
        /['"]\/api\/([^'"`]+)['"`]/g,
        // Supabase patterns (e.g., supabase.from('table').select('*'))
        /supabase\.\w+\(['"`]([^'"`]+)['"`]\)/g
    ];

    patterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            let endpoint = match[1] || match[2];
            // Clean up the endpoint string
            endpoint = endpoint.replace(/[`'"]/g, '').replace(/\${.*?}/g, '*');
            endpoint = endpoint.replace(/\/+$/, ''); // Remove trailing slashes
            if (endpoint.startsWith('/api/') || endpoint.startsWith('db/')) {
                usedEndpoints.add(endpoint);
                log('DEBUG', `File ${filePath} uses endpoint: ${endpoint}`);
            }
        }
    });

    return usedEndpoints;
}

/**
 * Finds components using a specific API endpoint.
 * @param {string} baseDir - The base directory.
 * @param {string} endpointPath - The API endpoint file path.
 * @returns {Set<string>}
 */
function findComponentsUsingEndpoint(baseDir, endpointPath) {
    const users = new Set();
    const endpointName = path.basename(path.dirname(endpointPath));

    // Define search patterns for relevant files
    const searchPatterns = [
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx'
    ];

    // Define exclusion patterns
    const excludePatterns = config.excludeFolders.map(folder => `**/${folder}/**`)
        .concat(config.excludeFiles.map(file => {
            if (file.startsWith('*')) {
                return `**/${file}`;
            }
            return `**/${file}`;
        }));

    // Fetch all relevant files excluding excluded folders/files
    const entries = fg.sync(searchPatterns, {
        cwd: baseDir,
        absolute: true,
        dot: true,
        ignore: excludePatterns
    });

    entries.forEach(filePath => {
        const content = readFileContent(filePath);
        if (content.includes(`/api/${endpointName}`) || /supabase\./.test(content)) {
            users.add(filePath);
            log('DEBUG', `File ${filePath} imports this endpoint: ${endpointPath}`);
        }
    });

    return users;
}

/**
 * Generates the directory tree using fast-glob without color codes.
 * @param {string} baseDir - The base directory.
 * @returns {Array<string>}
 */
function generateTree(baseDir) {
    const output = [];
    const entries = fg.sync(['**/*'], {
        cwd: baseDir,
        absolute: true,
        dot: true,
        onlyFiles: false,
        ignore: config.excludeFolders.map(folder => `**/${folder}/**`)
            .concat(config.excludeFiles.map(file => {
                if (file.startsWith('*')) {
                    return `**/${file}`;
                }
                return `**/${file}`;
            }))
    });

    log('DEBUG', `Generating directory tree...`);
    log('DEBUG', `Total entries found for tree: ${entries.length}`);

    // Create a map of directory to its children
    const dirMap = {};
    entries.forEach(entry => {
        const dir = path.dirname(entry);
        if (!dirMap[dir]) dirMap[dir] = [];
        dirMap[dir].push(entry);
    });

    // Track visited directories to prevent infinite loops
    const visitedDirs = new Set();

    /**
     * Recursively builds the tree.
     * @param {string} currentDir - Current directory path.
     * @param {string} prefix - Prefix for tree formatting.
     * @param {boolean} isLast - Is the current directory the last in its parent.
     */
    function buildTree(currentDir, prefix = '', isLast = true) {
        if (visitedDirs.has(currentDir)) {
            log('WARN', `Already visited directory: ${currentDir}. Skipping to prevent duplication.`);
            return;
        }
        visitedDirs.add(currentDir);

        const basename = path.basename(currentDir);
        const isRoot = path.resolve(currentDir) === path.resolve(baseDir);
        const symbol = isRoot ? '🌳 Project Structure\n' : (isLast ? treeSymbols.lastBranch : treeSymbols.branch) + treeSymbols.folder + ' ' + basename;
        if (symbol) {
            output.push(`${prefix}${symbol}`);
        }

        const children = dirMap[currentDir] ? dirMap[currentDir].sort() : [];
        const total = children.length;

        children.forEach((child, index) => {
            const isChildLast = index === total - 1;
            const childPrefix = isRoot ? '' : (isLast ? prefix + treeSymbols.space : prefix + treeSymbols.verticalLine);

            if (fs.lstatSync(child).isDirectory()) {
                buildTree(child, childPrefix, isChildLast);
            } else {
                const childName = path.basename(child);
                const fileSymbol = treeSymbols.file + ' ' + childName;
                const connector = isChildLast ? treeSymbols.lastBranch : treeSymbols.branch;
                output.push(`${childPrefix}${connector}${fileSymbol}`);
            }
        });
    }

    buildTree(baseDir);

    return output;
}

/**
 * Parses import and require statements in a file to find dependencies.
 * @param {string} filePath - Absolute path to the file.
 * @returns {Set<string>} - Set of absolute paths to dependencies.
 */
function findFileDependencies(filePath) {
    const dependencies = new Set();
    const content = readFileContent(filePath);
    const dir = path.dirname(filePath);

    // Regex patterns to match import and require statements
    const importRegex = /import\s+(?:[\w*\s{},]*)\s+from\s+['"](.+?)['"]/g;
    const requireRegex = /require\(['"](.+?)['"]\)/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
        let depPath = match[1];
        if (depPath.startsWith('.')) {
            const resolvedPath = resolveDependencyPath(depPath, dir);
            if (resolvedPath) dependencies.add(resolvedPath);
            else log('WARN', `Unable to resolve import path '${depPath}' in file ${filePath}`);
        }
    }

    while ((match = requireRegex.exec(content)) !== null) {
        let depPath = match[1];
        if (depPath.startsWith('.')) {
            const resolvedPath = resolveDependencyPath(depPath, dir);
            if (resolvedPath) dependencies.add(resolvedPath);
            else log('WARN', `Unable to resolve require path '${depPath}' in file ${filePath}`);
        }
    }

    return dependencies;
}

/**
 * Resolves a dependency path to an absolute file path.
 * @param {string} depPath - The dependency path from import/require.
 * @param {string} currentDir - The directory of the importing file.
 * @returns {string|null} - Absolute path to the dependency file or null if not found.
 */
function resolveDependencyPath(depPath, currentDir) {
    // Handle path aliases
    Object.keys(pathAliases).forEach(alias => {
        if (depPath.startsWith(alias)) {
            const aliasPath = pathAliases[alias][0].replace(/\*$/, '');
            depPath = depPath.replace(alias, aliasPath);
        }
    });

    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'];

    // Attempt to resolve the exact file
    for (const ext of extensions) {
        const fullPath = path.resolve(currentDir, depPath + ext);
        if (fs.existsSync(fullPath)) {
            return fullPath;
        }
    }

    // Attempt to resolve as directory with index file
    const indexFiles = ['index.js', 'index.jsx', 'index.ts', 'index.tsx', 'index.d.ts'];
    const dirPath = path.resolve(currentDir, depPath);
    if (fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
        for (const indexFile of indexFiles) {
            const fullPath = path.join(dirPath, indexFile);
            if (fs.existsSync(fullPath)) {
                return fullPath;
            }
        }
    }

    return null; // Dependency not found
}

/**
 * Builds a dependency graph mapping each file to the files it imports.
 * @param {Array<string>} files - Array of absolute file paths.
 * @returns {Map<string, Set<string>>} - Map of file to its dependencies.
 */
function buildDependencyGraph(files) {
    const dependencyGraph = new Map();

    log('DEBUG', `Building dependency graph...`);

    files.forEach(file => {
        const dependencies = findFileDependencies(file);
        dependencyGraph.set(file, dependencies);
    });

    log('DEBUG', `Dependency graph built.`);
    return dependencyGraph;
}

/**
 * Inverts the dependency graph to map each file to the files that import it.
 * @param {Map<string, Set<string>>} dependencyGraph - Original dependency graph.
 * @returns {Map<string, Set<string>>} - Inverted dependency graph.
 */
function invertDependencyGraph(dependencyGraph) {
    const invertedGraph = new Map();

    log('DEBUG', `Inverting dependency graph...`);

    dependencyGraph.forEach((deps, file) => {
        deps.forEach(dep => {
            if (!invertedGraph.has(dep)) {
                invertedGraph.set(dep, new Set());
            }
            invertedGraph.get(dep).add(file);
        });
    });

    log('DEBUG', `Inverted dependency graph created.`);
    return invertedGraph;
}

/**
 * Detects circular dependencies in the dependency graph.
 * @param {Map<string, Set<string>>} dependencyGraph - Original dependency graph.
 * @returns {Array<Array<string>>} - Array of cycles detected.
 */
function detectCircularDependencies(dependencyGraph) {
    const visited = new Set();
    const cycles = [];

    function visit(node, ancestors) {
        if (ancestors.has(node)) {
            const cycle = [...ancestors, node];
            cycles.push(cycle);
            return;
        }

        if (visited.has(node)) return;

        visited.add(node);
        ancestors.add(node);

        const neighbors = dependencyGraph.get(node) || new Set();
        neighbors.forEach(neighbor => {
            visit(neighbor, ancestors);
        });

        ancestors.delete(node);
    }

    dependencyGraph.forEach((_, node) => {
        visit(node, new Set());
    });

    return cycles;
}

/**
 * Generates file contents with API relationships and dependencies.
 * @param {string} baseDir - The base directory.
 * @param {Map<string, Object>} endpoints - Map of API endpoints.
 * @param {string|null} componentPath - Specific component file path to analyze.
 * @returns {Array<string>}
 */
function generateFileContents(baseDir, endpoints, componentPath = null) {
    const output = [];

    // Define search patterns for relevant files
    const searchPatterns = [
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
        '**/*.css',
        '**/*.scss',
        '**/*.sass',
        '**/*.less',
        '**/*.html',
        '**/*.htm',
        '**/*.json',
        '**/*.yml',
        '**/*.yaml',
        '**/*.xml',
        '**/*.php',
        '**/*.py',
        '**/*.rb',
        '**/*.java',
        '**/*.cs',
        '**/*.go',
        '**/*.sql',
        '**/*.graphql',
        '**/*.md',
        '**/*.txt',
        '**/*.rtf',
        '**/*.env',
        '**/*.config',
        '**/*.conf',
        '**/*.ini',
        '**/*.csv',
        '**/*.tsv',
        '**/*.gitignore',
        '**/*.npmignore',
        '**/*.lock',
        '**/*.toml'
    ];

    // Define exclusion patterns
    const excludePatterns = config.excludeFolders.map(folder => `**/${folder}/**`)
        .concat(config.excludeFiles.map(file => {
            if (file.startsWith('*')) {
                return `**/${file}`;
            }
            return `**/${file}`;
        }));

    // Fetch all relevant files excluding excluded folders/files
    const entries = fg.sync(searchPatterns, {
        cwd: baseDir,
        absolute: true,
        dot: true,
        onlyFiles: true,
        ignore: excludePatterns
    });

    log('DEBUG', `Generating file contents with API relationships and dependencies...`);
    log('DEBUG', `Total files to process for contents: ${entries.length}`);

    // Build dependency graphs
    const dependencyGraphMap = buildDependencyGraph(entries);
    const invertedDependencyGraphMap = invertDependencyGraph(dependencyGraphMap);

    // Detect circular dependencies
    const cycles = detectCircularDependencies(dependencyGraphMap);
    if (cycles.length > 0) {
        const table = new Table({
            head: [chalk.red('Cycle #'), chalk.red('Files Involved')],
            colWidths: [10, 100]
        });
        cycles.forEach((cycle, index) => {
            table.push([index + 1, cycle.map(file => path.relative(baseDir, file)).join(' -> ')]);
        });
        log('WARN', `Detected ${cycles.length} circular dependency cycle(s):\n${table.toString()}`);
    } else {
        log('INFO', 'No circular dependencies detected.');
    }

    // Determine which files to process based on the `-component` flag
    let filesToProcess = entries;
    if (componentPath) {
        if (!fs.existsSync(componentPath)) {
            log('ERROR', `The specified component path does not exist: ${componentPath}`);
            return output;
        }
        // Find all dependencies of the specified component
        const stack = [componentPath];
        const visited = new Set();
        while (stack.length > 0) {
            const current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                const deps = dependencyGraphMap.get(current) || new Set();
                deps.forEach(dep => {
                    if (!visited.has(dep)) {
                        stack.push(dep);
                    }
                });
            }
        }
        // Filter entries to include only visited files
        filesToProcess = entries.filter(file => visited.has(file));
        output.push(`\n## 📄 File Contents for Component: ${path.relative(baseDir, componentPath)}\n`);
    } else {
        output.push(`\n## 📄 File Contents\n`);
    }

    filesToProcess.forEach(filePath => {
        output.push(`\n### File: ${path.relative(baseDir, filePath)}`);

        const isApiEndpoint = endpoints.has(filePath);

        if (isApiEndpoint) {
            const endpointInfo = endpoints.get(filePath);
            const endpointUsers = invertedDependencyGraphMap.get(filePath) || new Set();

            if (endpointInfo.methods.size > 0) {
                output.push('\n#### API Methods');
                const methods = Array.from(endpointInfo.methods).map(method => {
                    switch(method) {
                        case 'SUPABASE':
                            return `${chalk.blue('Supabase Connection')}`;
                        default:
                            return `${chalk.green(method)}`;
                    }
                });
                output.push(methods.join(', '));
            }

            if (endpointUsers.size > 0) {
                output.push('\n#### Dependencies');
                output.push('Files that import or require this file:');
                Array.from(endpointUsers).forEach(user => {
                    output.push(`- ${path.relative(baseDir, user)} (imports this file)`);
                });
            }
        } else {
            // Show endpoints used by this file if it's not an API file
            const usedEndpoints = findEndpointUsage(filePath, baseDir);
            if (usedEndpoints.size > 0) {
                output.push('\n#### Endpoints');
                output.push('Endpoints that this file uses:');
                Array.from(usedEndpoints).forEach(endpoint => {
                    const resolvedEndpoint = mapEndpointToFile(endpoint);
                    if (resolvedEndpoint) {
                        output.push(`- ${path.relative(baseDir, resolvedEndpoint)}`);
                    } else {
                        output.push(`- ${endpoint} (Endpoint not found)`);
                    }
                });
            }
        }

        // Dependencies: Files that this file imports or requires
        const dependencies = dependencyGraphMap.get(filePath) || new Set();
        if (dependencies.size > 0) {
            output.push('\n#### Dependencies');
            output.push('Files that this file imports or requires:');
            Array.from(dependencies).forEach(dep => {
                output.push(`- ${path.relative(baseDir, dep)} (imports)`);
            });
        }

        // Dependents: Files that import or require this file
        const dependents = invertedDependencyGraphMap.get(filePath) || new Set();
        if (dependents.size > 0) {
            output.push('\n#### Dependents');
            output.push('Files that import or require this file:');
            Array.from(dependents).forEach(dep => {
                output.push(`- is imported by: ${path.relative(baseDir, dep)}`);
            });
        }

        // File content
        const ext = path.extname(filePath).toLowerCase();
        if (isBinary(ext)) {
            const upperExt = ext.substring(1).toUpperCase();
            output.push('\n#### Content');
            output.push(`[Binary ${upperExt} file]`);
        } else {
            const extension = ext.slice(1);
            const content = readFileContent(filePath);
            output.push('\n#### Content');
            output.push(`\`\`\`${extension}`);
            output.push(content);
            output.push('```');
        }

        output.push(''); // Add an empty line for readability
    });

    return output;
}

/**
 * Main function to execute the script.
 */
async function main() {
    animateStartup(); // Start the animation

    globalOptions = parseArgs();
    const options = globalOptions;
    const output = [];
    const resolvedPath = path.resolve(options.directory);

    log('INFO', `Starting directory traversal for: ${resolvedPath}`);

    // Extract Path Aliases from tsconfig.json if exists
    const tsConfigPath = path.join(resolvedPath, 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
        try {
            const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
            if (tsConfig.compilerOptions && tsConfig.compilerOptions.paths) {
                pathAliases = tsConfig.compilerOptions.paths;
                log('DEBUG', `Path aliases detected: ${JSON.stringify(pathAliases)}`);
            }
        } catch (error) {
            log('WARN', 'Error parsing tsconfig.json. Path aliases will not be recognized.');
        }
    }

    // Find and store all API endpoints
    log('INFO', 'Scanning for API endpoints...');
    globalEndpointsMap = findAPIEndpoints(resolvedPath);

    // Generate directory tree
    if (options.showTree) {
        log('INFO', 'Generating directory tree...');
        const tree = generateTree(resolvedPath);
        output.push(tree.join('\n'));
    }

    // Generate file contents with API relationships and dependencies
    if (options.showContents) {
        log('INFO', 'Generating file contents with API relationships and dependencies...');
        const fileContents = generateFileContents(resolvedPath, globalEndpointsMap, options.component);
        output.push(fileContents.join('\n'));
    }

    const finalOutput = output.join('\n');

    if (options.terminal) {
        console.log(finalOutput);
    }

    if (options.output) {
        fs.writeFileSync(options.output, finalOutput);
        log('INFO', `Output saved to: ${options.output}`);
    }
}

main();
