class FileManagerQueue {
    static saveMatches(matches, filename, traversalOrder = "inorder") {
        let data;
        switch (traversalOrder) {
            case "inorder":
                data = FileManagerQueue._inorderTraversal(matches);
                break;
            case "preorder":
                data = FileManagerQueue._preorderTraversal(matches);
                break;
            case "postorder":
                data = FileManagerQueue._postorderTraversal(matches);
                break;
            default:
                throw new Error("Traversal order must be 'inorder', 'preorder', or 'postorder'.");
        }

        const fs = require('fs');
        const fileStream = fs.createWriteStream(filename);

        const queue = [...data]; // Copia los datos en una cola

        function writeNext() {
            const match = queue.shift();
            if (match) {
                fileStream.write(`${JSON.stringify(match)}\n`);
                process.nextTick(writeNext); // Procesa el siguiente elemento en la cola
            } else {
                fileStream.end();
            }
        }

        writeNext();
    }

    static _inorderTraversal(tree) {
        const result = [];
        const stack = [];
        let current = tree;
        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push({ key: current.key, value: current.value });
            current = current.right;
        }
        return result;
    }

    static _preorderTraversal(tree) {
        const result = [];
        const stack = [tree];
        while (stack.length > 0) {
            const current = stack.pop();
            result.push({ key: current.key, value: current.value });
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
        return result;
    }

    static _postorderTraversal(tree) {
        const result = [];
        const stack = [tree];
        while (stack.length > 0) {
            const current = stack.pop();
            result.unshift({ key: current.key, value: current.value });
            if (current.left) stack.push(current.left);
            if (current.right) stack.push(current.right);
        }
        return result;
    }
}

const _FileManagerQueue = FileManagerQueue;
module.exports = { _FileManagerQueue };