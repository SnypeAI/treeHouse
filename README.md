# 🌳 TreeHouse

Welcome to **TreeHouse**, a comprehensive Node.js tool for analyzing and documenting project structures with advanced dependency tracking and file analysis capabilities.

## 📋 Table of Contents
1. [Features](#features)
2. [Installation](#-installation)
3. [Usage Guide](#%EF%B8%8F-usage-guide)
4. [Configuration Reference](#%EF%B8%8F-configuration-reference)
5. [Advanced Features](#-advanced-features)
6. [Framework Support](#-framework-support)
7. [Performance Guide](#-performance-guide)
8. [Troubleshooting](#-troubleshooting)

## Features

### Core Features
- 🌲 Directory Tree Visualization
- 📊 Dependency Analysis
- 📦 Package.json Usage Tracking
- 🔍 Binary File Detection
- 📄 File Content Display
- 📱 Framework-Specific Configurations
- 💾 Multiple Output Formats

### Dependency Tracking
TreeHouse provides comprehensive dependency analysis:

1. **File Dependencies**
   - Detects imports/requires across files
   - Maps relationships between components
   - Identifies circular dependencies
   - Tracks static and dynamic imports
   - Analyzes CSS/SCSS imports
   - Detects image and asset usage

2. **Package.json Analysis**
   - Maps which files use each dependency
   - Tracks usage of devDependencies
   - Identifies unused dependencies
   - Analyzes peer dependency usage
   - Checks version compatibility

### Binary File Detection
Automatically identifies and properly handles:

1. **Images**
   - Common formats: .jpg, .png, .gif, .svg, .webp
   - Design files: .psd, .ai, .sketch
   - Icons: .ico

2. **Documents**
   - PDFs: .pdf
   - Office files: .doc, .docx, .xls, .xlsx
   - Archives: .zip, .rar, .7z

3. **Media**
   - Audio: .mp3, .wav, .ogg
   - Video: .mp4, .mov, .avi
   - Fonts: .ttf, .otf, .woff, .woff2

## 🚀 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SnypeAI/treeHouse.git
    cd treeHouse
    ```

2. Install Node.js (v14+ recommended):
   [Node.js Download Page](https://nodejs.org)

## 🛠️ Usage Guide

### Command Structure
```bash
node treeHouse.js [directory] [flags]
```

### Available Flags
- `-tree`: Generate directory structure
- `-contents`: Include file contents and dependencies
- `-terminal`: Display in terminal
- `-output filename.md`: Save to markdown file

### Usage Examples

1. Basic Tree Generation:
```bash
node treeHouse.js ./my-project -tree -terminal
```

2. Full Project Analysis:
```bash
node treeHouse.js ./my-project -tree -contents -terminal
```

3. Generate Documentation:
```bash
node treeHouse.js ./my-project -tree -contents -output docs.md
```

### Example Outputs

1. Directory Tree:
```
🌳 Project Structure
├── 📂 src
│   ├── 📄 App.tsx
│   ├── 📂 components
│   │   └── 📄 Header.tsx
│   └── 📂 styles
│       └── 📄 main.css
```

2. File Analysis:
```
## File: src/App.tsx

### Dependencies
Files that import or require this file:
- src/index.tsx
- src/tests/App.test.tsx
- src/components/Layout.tsx

### Content
[File contents displayed here]
```

3. Package.json Analysis:
```
## File: package.json

### Dependencies
Files using dependencies:
- react: 
  - src/App.tsx
  - src/components/*.tsx
- typescript: 
  - All .tsx and .ts files
- tailwindcss:
  - src/styles/globals.css

### Content
[Package.json contents]
```

## ⚙️ Configuration Reference

### Configuration File (tree-config.json)
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
- **binary**: Files that should not display content
- **code**: Files to display with syntax highlighting
- **text**: Plain text files to display normally

#### Framework Configurations
Each framework can have custom:
- Folder exclusions
- File exclusions
- File type mappings
- Dependency tracking rules

## 🔍 Advanced Features

### Dependency Detection Patterns

1. ES6 Imports:
```
import Component from './Component'
import { util } from '../utils'
import * as helpers from './helpers'
```

2. CommonJS Requires:
```
const package = require('package')
require('./styles.css')
```

3. CSS/SCSS Imports:
```
@import 'styles/variables';
url('./image.png')
```

4. HTML References:
```
<img src="./image.png">
<link href="styles.css">
<script src="script.js">
```

### Package.json Analysis Features

1. **Direct Dependencies**
   - Tracks explicit imports
   - Maps usage locations
   - Identifies unused packages

2. **Indirect Dependencies**
   - Traces dependency chains
   - Finds shared dependencies
   - Detects version conflicts

3. **Development Dependencies**
   - Maps test file usage
   - Tracks build tool usage
   - Analyzes script usage

## 🎯 Performance Guide

### Large Projects
For projects with many files:
- Use specific directories instead of root
- Exclude test and build directories
- Focus on specific file types

### Optimization Tips
1. Start with tree-only analysis
2. Add content analysis for specific directories
3. Use output flag instead of terminal for large results

## 🛠 Troubleshooting

### Common Issues

1. **Long Analysis Times**
   - Check excluded directories
   - Verify binary file detection
   - Consider splitting analysis

2. **Memory Usage**
   - Analyze smaller directories
   - Exclude unnecessary file types
   - Focus on specific dependencies

3. **Missing Dependencies**
   - Check import patterns
   - Verify file extensions
   - Review exclusion rules

## 📦 Framework Support

### Create React App
- Automatic detection of CRA structure
- Proper handling of build directory
- React-specific dependency tracking

### Next.js
- Support for pages and app directory
- Route analysis
- API route detection

### Gatsby
- Plugin dependency tracking
- GraphQL schema analysis
- Static file handling

### React Native
- Platform-specific file detection
- Native module dependency tracking
- Asset management

## 📈 Best Practices

1. **Project Organization**
   - Analyze before major refactoring
   - Track dependency changes
   - Document component relationships

2. **Dependency Management**
   - Regular package.json analysis
   - Version compatibility checks
   - Cleanup unused dependencies

3. **Documentation**
   - Regular structure snapshots
   - Dependency graph updates
   - Component relationship maps

## 📝 License

This project is licensed under the MIT License.

---

For more information or support, please visit our [GitHub repository](https://github.com/SnypeAI/treeHouse)