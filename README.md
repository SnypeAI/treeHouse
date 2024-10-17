# 🌳 TreeHouse

Welcome to **TreeHouse**! This is a simple yet powerful Node.js tool that recursively prints your project's directory structure in the terminal using a traditional tree layout 🌲.

## Features
- 📂 **Shows folders** and 📄 **files** with emojis.
- Supports **React frameworks** like CRA, Next.js, Gatsby, and React Native.
- Customizable with a **configuration file** (`tree-config.json`) to exclude specific folders or files (e.g., `node_modules`, `.git`).
- Easily adaptable to **any project type**.

## 🚀 Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/SnypeAI/treeHouse.git
    cd treeHouse
    ```

2. Install Node.js if you haven't already:  
   [Node.js Download Page](https://nodejs.org)


## 🛠️  Usage

You can run the `treeHouse.js` script from the terminal to generate a directory tree:

```bash
node treeHouse.js [directory]
```

If no directory is specified, it defaults to the current working directory.

Example:
```bash
node treeHouse.js ./my-react-project
```

This will print a tree like this:

```bash
🌳 TreeHouse Directory Structure for: /path/to/my-react-project
├── 📂 src
│   ├── 📄 App.js
│   ├── 📂 components
│   │   └── �� Header.js
└── 📂 node_modules (excluded)
```

## ⚙️  Configuration

The behavior of **TreeHouse** can be customized using the `tree-config.json` file.

### Exclude Folders and Files

To exclude specific files or folders from being displayed in the tree structure, add them to the `excludeFolders` or `excludeFiles` arrays in the `tree-config.json` file:

```json
{
    "excludeFolders": ["node_modules", ".git"],
    "excludeFiles": [".DS_Store", "Thumbs.db"]
}
```

### Framework-specific Configuration

For common React frameworks, you can tailor **TreeHouse** by specifying framework-specific configurations:

- **Create React App (CRA)**
- **Next.js**
- **Gatsby**
- **React Native**

The configuration file supports different sets of exclusions for these frameworks. You can modify these in the `frameworks` section of `tree-config.json`.

```json
{
    "frameworks": {
        "cra": {
            "excludeFolders": ["build", "coverage"],
            "excludeFiles": [".DS_Store", "Thumbs.db"]
        },
        "nextjs": {
            "excludeFolders": [".next", "out"],
            "excludeFiles": [".DS_Store", "Thumbs.db"]
        }
    }
}
```

## 📦 Supported Frameworks

- **Create React App (CRA)**
- **Next.js**
- **Gatsby**
- **React Native**

Feel free to modify or add more frameworks to the ±tree-config.json± file as needed.

## 📝 License

This project is licensed under the MIT License.

---

Enjoy organizing your projects with **TreeHouse**! 🌲✨
