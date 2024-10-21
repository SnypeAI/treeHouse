# 🌳 TreeHouse

Welcome to **TreeHouse**, the enhanced Node.js tool for comprehensive project structure analysis and documentation. With advanced dependency tracking, file analysis capabilities, and streamlined usage features, TreeHouse empowers developers to maintain organized and efficient codebases effortlessly.

## 📋 Table of Contents
1. [Features](#features)
2. [Installation](#-installation)
3. [Usage Guide](#%EF%B8%8F-usage-guide)
4. [Configuration Reference](#%EF%B8%8F-configuration-reference)
5. [Advanced Features](#-advanced-features)
6. [Framework Support](#-framework-support)
7. [Performance Guide](#-performance-guide)
8. [Troubleshooting](#-troubleshooting)
9. [Aliases](#-aliases)
10. [License](#-license)

## Features

### Core Features
- 🌲 **Directory Tree Visualization**: Generate a clear and organized visual representation of your project structure.
- 📊 **Dependency Analysis**: Comprehensive tracking of file dependencies, imports, and usage across the project.
- 📦 **Package.json Usage Tracking**: Analyze and document dependency usage directly from your `package.json`.
- 🔍 **Binary File Detection**: Automatically identify and handle binary files to streamline analysis.
- 📄 **File Content Display**: View and document file contents with syntax highlighting and dependency mappings.
- 📱 **Framework-Specific Configurations**: Tailored settings for popular frameworks like Next.js, Create React App, Gatsby, and React Native.
- 💾 **Multiple Output Formats**: Export analysis results in various formats, including Markdown for easy documentation.
- 🔧 **Component-Specific Analysis**: Analyze specific components to display their dependencies and related endpoints.

### Dependency Tracking
TreeHouse provides in-depth dependency analysis:

1. **File Dependencies**
   - Detects `import`/`require` statements across files.
   - Maps relationships between components and modules.
   - Identifies circular dependencies to prevent potential issues.
   - Tracks both static and dynamic imports.
   - Analyzes CSS/SCSS imports for comprehensive styling dependencies.
   - Detects image and asset usage within files.

2. **Package.json Analysis**
   - Maps which files utilize each dependency.
   - Tracks usage of `devDependencies` and `peerDependencies`.
   - Identifies unused dependencies to optimize your project.
   - Analyzes version compatibility and potential conflicts.

### Binary File Detection
Automatically identifies and properly handles various binary files:

1. **Images**
   - Common formats: `.jpg`, `.png`, `.gif`, `.svg`, `.webp`
   - Design files: `.psd`, `.ai`, `.sketch`
   - Icons: `.ico`

2. **Documents**
   - PDFs: `.pdf`
   - Office files: `.doc`, `.docx`, `.xls`, `.xlsx`
   - Archives: `.zip`, `.rar`, `.7z`

3. **Media**
   - Audio: `.mp3`, `.wav`, `.ogg`
   - Video: `.mp4`, `.mov`, `.avi`
   - Fonts: `.ttf`, `.otf`, `.woff`, `.woff2`

## 🚀 Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js (v14 or higher recommended) installed. [Download Node.js](https://nodejs.org)

### Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/SnypeAI/treeHouse.git
    cd treeHouse
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Make the Script Executable**
    ```bash
    chmod +x treeHouse.js
    ```

4. **(Optional) Set Up Aliases**
   
   Add the following aliases to your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`):
   
    ```bash
    # TreeHouse Aliases
    alias th='node /your/path/to/treeHouse.js . -tree -terminal'
    alias thc='node /your/path/to/treeHouse.js . -tree -contents -terminal'
    alias thd='function _thd() { node /your/path/to/treeHouse.js . -tree -contents -output "${PWD##*/}_structure.md"; }; _thd'
    alias ths='function _ths() { if [ -z "$1" ]; then echo "Please provide an output filename"; else node /your/path/to/treeHouse.js . -tree -contents -output "$1.md"; fi; }; _ths'
    alias thcmt='function _thcmt() { 
        if [ -z "$1" ]; then 
            read -p "Enter the component file path: " component; 
        else 
            component="$1"; 
        fi; 
        if [ -z "$component" ]; then 
            echo "No component file path provided."; 
            return; 
        fi; 
        # Extract the base name without extension for the output file
        basename=$(basename "$component" | sed "s/\.[^.]*$//")
        output_file="${basename}_structure.md"
        node /your/path/to/treeHouse.js . -contents -output "$output_file" -component "$component"; 
    }; _thcmt'
    ```

   **Note**: After adding the aliases, reload your shell configuration:
   
    ```bash
    source ~/.bashrc
    # or
    source ~/.zshrc
    ```

## 🛠️ Usage Guide

### Command Structure
`node treeHouse.js [directory] [flags]`

### Available Flags
- `-tree`: Generate directory structure.
- `-contents`: Include file contents and dependencies.
- `-terminal`: Display output in the terminal.
- `-output <filename.md>`: Save output to a Markdown file.
- `-component <file>`: Analyze a specific component and display its dependencies and endpoints.

### Usage Examples

1. **Basic Tree Generation**
    ```bash
    th
    ```

2. **Full Project Analysis**
    ```bash
    thc
    ```

3. **Generate Documentation**
    ```bash
    thd
    ```

4. **Analyze Specific Component**
    - **Providing the Component Path as an Argument**
      ```bash
      thcmt ./src/app/checkout/page.tsx
      ```

    - **Prompting for the Component Path**
      ```bash
      thcmt
      Enter the component file path: ./src/app/checkout/page.tsx
      ```

5. **Save Analysis to a Specific File**
    ```bash
    ths project_structure
    ```

### Example Outputs

1. **Directory Tree**
    ```markdown
    # 🌳 Project Structure
    ├── 📂 src
    │   ├── 📄 App.tsx
    │   ├── 📂 components
    │   │   └── 📄 Header.tsx
    │   └── 📂 styles
    │       └── 📄 main.css
    ```

2. **File Analysis**
    ```markdown
    ## File: src/App.tsx
    
    ### Dependencies
    Files that import or require this file:
    - src/index.tsx
    - src/tests/App.test.tsx
    - src/components/Layout.tsx
    
    ### Content
    [File contents displayed here]
    ```

3. **Package.json Analysis**
    ```markdown
    ## File: package.json
    
    ### Dependencies
    Files using dependencies:
    - `react`: 
      - src/App.tsx
      - src/components/*.tsx
    - `typescript`: 
      - All .tsx and .ts files
    - `tailwindcss`:
      - src/styles/globals.css
    
    ### Content
    [Package.json contents]
    ```

## ⚙️ Configuration Reference

### Configuration File (`tree-config.json`)
```json
{
    "excludeFolders": [
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
    "excludeFiles": [
        ".DS_Store",
        "Thumbs.db",
        "*.log",
        "*.lock"
    ],
    "fileTypes": {
        "binary": [
            ".ico", ".jpg", ".jpeg", ".png", ".gif", 
            ".pdf", ".ttf", ".woff",
            ".mp3", ".mp4"
        ],
        "code": [
            ".js", ".ts", ".jsx", ".tsx", 
            ".css", ".html", ".json"
        ],
        "text": [
            ".md", ".txt", ".env"
        ]
    },
    "frameworks": {
        "cra": {
            "excludeFolders": ["build", "coverage"]
        },
        "nextjs": {
            "excludeFolders": [".next", "out"]
        },
        "gatsby": {
            "excludeFolders": [".cache", "public"]
        },
        "reactNative": {
            "excludeFolders": ["android", "ios"]
        }
    }
}
```

### Configuration Options

#### File Types
- **binary**: Files that should not display content.
- **code**: Files to display with syntax highlighting.
- **text**: Plain text files to display normally.

#### Framework Configurations
Each framework can have custom:
- Folder exclusions.
- File exclusions.
- File type mappings.
- Dependency tracking rules.

## 🔍 Advanced Features

### Dependency Detection Patterns

1. **ES6 Imports**
   `import Component from './Component'`
   `import { util } from '../utils'`
   `import * as helpers from './helpers'`

2. **CommonJS Requires**
   `const package = require('package')`
   `require('./styles.css')`

3. **CSS/SCSS Imports**
   `@import 'styles/variables';`
   `url('./image.png')`

4. **HTML References**
   `<img src="./image.png">`
   `<link href="styles.css">`
   `<script src="script.js">`

### Package.json Analysis Features

1. **Direct Dependencies**
   - Tracks explicit imports.
   - Maps usage locations.
   - Identifies unused packages.

2. **Indirect Dependencies**
   - Traces dependency chains.
   - Finds shared dependencies.
   - Detects version conflicts.

3. **Development Dependencies**
   - Maps test file usage.
   - Tracks build tool usage.
   - Analyzes script usage.

## 🎯 Performance Guide

### Large Projects
For projects with many files:
- Use specific directories instead of root.
- Exclude test and build directories.
- Focus on specific file types.

### Optimization Tips
1. Start with tree-only analysis.
2. Add content analysis for specific directories.
3. Use output flag instead of terminal for large results.

## 🛠 Troubleshooting

### Common Issues

1. **Long Analysis Times**
   - Check excluded directories.
   - Verify binary file detection.
   - Consider splitting analysis.

2. **Memory Usage**
   - Analyze smaller directories.
   - Exclude unnecessary file types.
   - Focus on specific dependencies.

3. **Missing Dependencies**
   - Check import patterns.
   - Verify file extensions.
   - Review exclusion rules.

## 📦 Framework Support

### Create React App
- Automatic detection of CRA structure.
- Proper handling of build directory.
- React-specific dependency tracking.

### Next.js
- Support for pages and app directory.
- Route analysis.
- API route detection.

### Gatsby
- Plugin dependency tracking.
- GraphQL schema analysis.
- Static file handling.

### React Native
- Platform-specific file detection.
- Native module dependency tracking.
- Asset management.

## 📈 Best Practices

1. **Project Organization**
   - Analyze before major refactoring.
   - Track dependency changes.
   - Document component relationships.

2. **Dependency Management**
   - Regular `package.json` analysis.
   - Version compatibility checks.
   - Cleanup unused dependencies.

3. **Documentation**
   - Regular structure snapshots.
   - Dependency graph updates.
   - Component relationship maps.

## 📚 Aliases

TreeHouse provides convenient shell aliases to streamline your workflow. Add the following aliases to your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`):

```bash
# TreeHouse Aliases
alias th='node /your/path/to/treeHouse.js . -tree -terminal'
alias thc='node /your/path/to/treeHouse.js . -tree -contents -terminal'
alias thd='function _thd() { node /your/path/to/treeHouse.js . -tree -contents -output "${PWD##*/}_structure.md"; }; _thd'
alias ths='function _ths() { if [ -z "$1" ]; then echo "Please provide an output filename"; else node /your/path/to/treeHouse.js . -tree -contents -output "$1.md"; fi; }; _ths'
alias thcmt='function _thcmt() { 
    if [ -z "$1" ]; then 
        read -p "Enter the component file path: " component; 
    else 
        component="$1"; 
    fi; 
    if [ -z "$component" ]; then 
        echo "No component file path provided."; 
        return; 
    fi; 
    # Extract the base name without extension for the output file
    basename=$(basename "$component" | sed "s/\.[^.]*$//")
    output_file="${basename}_structure.md"
    node /your/path/to/treeHouse.js . -contents -output "$output_file" -component "$component"; 
}; _thcmt'
```

**Alias Descriptions:**

- `th`: Generates and displays the directory tree in the terminal.
- `thc`: Generates and displays the directory tree along with file contents and dependencies in the terminal.
- `thd`: Generates the directory tree and file contents, saving the output to a Markdown file named after the current directory (e.g., `project_structure.md`).
- `ths`: Generates the directory tree and file contents, saving the output to a specified Markdown file.
- `thcmt`: Analyzes a specific component to display its dependencies and related endpoints. If no file path is provided as an argument, it prompts for one.

**Reload Your Shell Configuration:**

After adding the aliases, reload your shell configuration to apply the changes:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

## 📝 License

This project is licensed under the MIT License.

---

For more information or support, please visit our [GitHub repository](https://github.com/SnypeAI/treeHouse).
