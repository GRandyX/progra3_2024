class FileManagerTree {
    
    static saveMatches(matches, filename, traversalOrder = "inorder") {
        let data;
        switch (traversalOrder) {
            case "inorder":
                data = FileManagerTree._inorderTraversal(matches);
                break;
            case "preorder":
                data = FileManagerTree._preorderTraversal(matches);
                break;
            case "postorder":
                data = FileManagerTree._postorderTraversal(matches);
                break;
            default:
                throw new Error("Traversal order must be 'inorder', 'preorder', or 'postorder'.");
        }

        const fs = require('fs');
        const fileStream = fs.createWriteStream(filename);

        data.forEach(match => {
            fileStream.write(`${JSON.stringify(match)}\n`);
        });

        fileStream.end();
    }

    static _inorderTraversal(tree) {
        if (!tree) return [];
        return FileManagerTree._inorderTraversal(tree.left)
            .concat([{ key: tree.key, value: tree.value }])
            .concat(FileManagerTree._inorderTraversal(tree.right));
    }

    static _preorderTraversal(tree) {
        if (!tree) return [];
        return [{ key: tree.key, value: tree.value }]
            .concat(FileManagerTree._preorderTraversal(tree.left))
            .concat(FileManagerTree._preorderTraversal(tree.right));
    }

    static _postorderTraversal(tree) {
        if (!tree) return [];
        return FileManagerTree._postorderTraversal(tree.left)
            .concat(FileManagerTree._postorderTraversal(tree.right))
            .concat([{ key: tree.key, value: tree.value }]);
    }
}

const _FileManagerTree = FileManagerTree;
module.exports = { _FileManagerTree };