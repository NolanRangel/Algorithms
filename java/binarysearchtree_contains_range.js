/**
 * Class to represent a Node in a Binary Search Tree (BST).
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

    isEmpty() {
        // determine if the BST is empty and return a boolean
        if (this.root === null) {
            return true;
        }
        return false;
    }



    contains(searchVal) {
        //Determine if the tree contains the given searchVal
        let current = this.root;
        while (current) {
            if (current.data === searchVal) {
                return true;
            }
            if (current.data > searchVal) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        //Determine if the tree contains the given searchVal using recursive
        if (current === null) {
            return false;
        }
        if (current.data === searchVal) {
            return true;
        }
        if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left)
        } else {
            return this.containsRecursive(searchVal, current.right)
        }

    }

    range(current = this.root) {
        // find the range of the tree
        if (!current) {
            return null;
        }
        while (current.left) {
            current = current.left;
        }
        let min = current.data;
        current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data - min;
    }

    // BONUS
    isFull(current = this.root) {
        // check if the tree is full 
        // In a full tree, every node has both a left and a right except for the leaf nodes (last nodes)
        if (!current) {
            return false;
        }
        if (this.root.left === null && this.root.right === null) {
            return false
        }
        if (current.left === null && current.right !== null) {
            return false;
        }
        if (current.right === null && current.left !== null) {
            return false;
        }
        this.isFull(current.left)
        this.isFull(current.right)

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

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);


/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
// twoLevelTree.print();


/* threeLevelTree
                    root
                <-- 10 -->
              /            \
            5             15
          /    \         /    \
        2       8      12     20
*/



const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new Node(10);
threeLevelTree.root.left = new Node(5);
threeLevelTree.root.right = new Node(15);
threeLevelTree.root.left.left = new Node(2);
threeLevelTree.root.left.right = new Node(8);
threeLevelTree.root.right.left = new Node(12);
threeLevelTree.root.right.right = new Node(20);
// threeLevelTree.print();



console.log('*******contains*******');
console.log(emptyTree.contains(1));
console.log(oneNodeTree.contains(10));
console.log(twoLevelTree.contains(15));
console.log(threeLevelTree.contains(12));

console.log('******range********');
console.log(emptyTree.range());
console.log(oneNodeTree.range());
console.log(twoLevelTree.range());
console.log(threeLevelTree.range());

console.log('*******containsRecursive*******');
console.log(emptyTree.containsRecursive());
console.log(oneNodeTree.containsRecursive());
console.log(twoLevelTree.containsRecursive());
console.log(threeLevelTree.containsRecursive());

console.log('******isFull********');
console.log(emptyTree.isFull());
console.log(oneNodeTree.isFull());
console.log(twoLevelTree.isFull());
console.log(threeLevelTree.isFull());

