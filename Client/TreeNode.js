class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        if (!this.root) {
            this.root = new TreeNode(key, value);
        } else {
            this._insertRecursive(this.root, key, value);
        }
    }

    _insertRecursive(node, key, value) {
        if (key < node.key) {
            if (node.left) {
                this._insertRecursive(node.left, key, value);
            } else {
                node.left = new TreeNode(key, value);
            }
        } else if (key > node.key) {
            if (node.right) {
                this._insertRecursive(node.right, key, value);
            } else {
                node.right = new TreeNode(key, value);
            }
        } else {}
    }

    search(key) {
        return this._searchRecursive(this.root, key);
    }

    _searchRecursive(node, key) {
        if (!node) {
            return null;
        }
        if (key === node.key) {
            return node.value;
        } else if (key < node.key) {
            return this._searchRecursive(node.left, key);
        } else {
            return this._searchRecursive(node.right, key);
        }
    }
}

const _BinarySearchTree = BinarySearchTree;
module.exports = { _BinarySearchTree };