# 🌳 TreeHouse

Welcome to **TreeHouse**! This is a simple yet powerful Node.js tool that recursively prints your project's directory structure in the terminal using a traditional tree layout 🌲. 

## Features
- 📂 **Shows folders** and 📄 **files** with emojis.
- **Intelligent binary file detection** - automatically identifies and labels binary files (images, fonts, etc.)
- **Dependency tracking** - shows which files import/require each file
- **Package.json analysis** - tracks usage of dependencies across your project
- Supports **React frameworks** like CRA, Next.js, Gatsby, and React Native
- Customizable with a **configuration file** (`tree-config.json`) to exclude specific folders or files
- **Multiple output formats** - display in terminal or save as markdown
- **File content display** - view contents of text-based files

## 🚀 Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/SnypeAI/treeHouse.git
    cd treeHouse
    ```

2. Install Node.js if you haven't already:  
   [Node.js Download Page](https://nodejs.org)

## 🛠️ Usage

Run the script with various flags to customize output:

```bash
node treeHouse.js [directory] [flags]
```

### Flags
- `-tree` - Show directory tree structure
- `-contents` - Display file contents and dependencies
- `-terminal` - Output to terminal
- `-output filename.md` - Save output to markdown file

### Examples:
```bash
# Show tree and contents in terminal
node treeHouse.js ./my-project -tree -contents -terminal

# Generate markdown report
node treeHouse.js ./my-project -tree -contents -output report.md

# Analyze specific directory
node treeHouse.js ../../other-project -tree -contents -terminal
```

The output will include:
- Directory tree structure
- File contents (for text files)
- Binary file identification
- File dependency relationships
- Package.json dependency usage analysis

Example output:
```
🌳 TreeHouse Directory Structure for: /path/to/my-project
├── 📂 src
│   ├── 📄 App.js
│   │   Dependencies:
│   │   - ./components/Header.js
│   │   - ./styles/main.css
│   ├── 📂 components
│   │   └── 📄 Header.js
│   └── 📂 assets
│       └── 📄 logo.png [Binary PNG file]
```

## ⚙️ Configuration

Customize **TreeHouse** using `tree-config.json`:

```json
{
    "excludeFolders": [
        "node_modules",
        ".git",
        "build",
        "dist"
    ],
    "excludeFiles": [
        ".DS_Store",
        "Thumbs.db",
        "*.log"
    ],
    "fileTypes": {
        "binary": [
            ".jpg", ".png", ".gif",
            ".pdf", ".ttf", ".woff",
            ".mp3", ".mp4"
        ],
        "code": [
            ".js", ".ts", ".jsx",
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

- **excludeFolders**: Directories to skip
- **excludeFiles**: Files to ignore (supports wildcards)
- **fileTypes**: Categorize files for proper handling
  - **binary**: Files to treat as binary (no content display)
  - **code**: Programming and markup files
  - **text**: Plain text files
- **frameworks**: Framework-specific exclusion rules

## 📦 Supported Frameworks

- **Create React App (CRA)**
- **Next.js**
- **Gatsby**
- **React Native**

Easily extendable for other frameworks by modifying `tree-config.json`.

## 📝 License

This project is licensed under the MIT License.

---

Enjoy exploring your projects with **TreeHouse**! 🌲✨
