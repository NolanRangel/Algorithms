/**
http://btv.melezinek.cz/binary-search-tree.html.
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(newVal) {
        let isInserted = false;
        let newNode = new Node(newVal);
        if (this.root === null) {
            this.root = newNode;
            return
        }
        let current = this.root;
        while (isInserted === false) {
            if (newVal < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    isInserted = true
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode
                    isInserted = true
                }
                current = current.right;
            }
        }
    }

    size(curr = this.root) {
        // counts the total number of nodes in this tree.
        if (!curr) {
            return 0
        }

        if (curr) {
            return 1 + this.size(curr.left) + this.size(curr.right);
        }

    }

    height(curr = this.root) {
        // Calculates the height of the tree based on how many nodes from top to bottom (whichever side is taller).
        if (!curr)
            return 0;
        // get the heights of the left and right subtrees, return the larger one + 1
        let leftHeight = this.height(curr.left);
        let rightHeight = this.height(curr.right);
        return (leftHeight > rightHeight) ? 1 + leftHeight : 1 + rightHeight;
    }

    // BONUS: check if the tree has equal height on both left and right sides
    isBalanced(curr = this.root) {
        return this.height(curr.left) === this.height(curr.right);
    }


    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}


const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10);
threeLevelTree.insert(5);
threeLevelTree.insert(15);
threeLevelTree.insert(2);
threeLevelTree.insert(8);
threeLevelTree.insert(12);
threeLevelTree.insert(20);
// threeLevelTree.print()

console.log(threeLevelTree.isBalanced());