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

    isEmpty() {
        // determine if the BST is empty and return a boolean
        if (this.root === null) {
            return true;
        }
        return false;
    }
    min(current = this.root) {
        //return the smallest integer data
        if (this.isEmpty()) {
            return false;
        }
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    max(current = this.root) {
        //return the largest integer data
        if (this.isEmpty()) {
            return false;
        }
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }


    contains(searchVal, current = this.root) {
        //Determine if the tree contains the given searchVal
        if (this.isEmpty()) {
            return false;
        }
        // previous while condition: while(current.right!=null||current.left!=null)
        while (current != null) {
            if (searchVal > current.data) { // searchVal is bigger
                if (current.right == null) { // if we don't have a right node
                    return false;
                }
                current = current.right; // if we do have a right node
            } else if (searchVal < current.data) { // searchVal is smaller
                if (current.left == null) { // if we don't have a left node
                    return false;
                }
                current = current.left; // if we do have a left node
            } else if (searchVal == current.data) { // we found searchVal
                return true;
            }
        }
        return false;
    }

    insert(newVal) {
        // construct a new node and insert into the current tree
        if (this.isEmpty()) {
            this.root = new Node(newVal);
        } else {
            let inserted = false;
            let current = this.root;
            while (!inserted) {
                if (newVal < current.data) {
                    if (!current.left) {
                        current.left = new Node(newVal);
                        inserted = true;
                    } else {
                        current = current.left;
                    }
                } else if (newVal > current.data) {
                    if (!current.right) {
                        current.right = new Node(newVal);
                        inserted = true;
                    } else {
                        current = current.right;
                    }
                } else {
                    inserted = true;
                }
            }
        }

    }

    insertRecursive(newVal, current = this.root) {
        // insert using recursive
        if (this.isEmpty()) {
            this.root = new Node(newVal);
        } else if (newVal < current.data) {
            if (!current.left) {
                current.left = new Node(newVal);
            } else {
                return this.insertRecursive(newVal, current.left);
            }
        } else if (newVal > current.data) {
            if (!current.right) {
                current.right = new Node(newVal);
            } else {
                return this.insertRecursive(newVal, current.right);
            }
        }
    }

    // isSymmetric(curr = this.root) {
    //     // BONUS: check if the tree is symmetric
    //     //https://leetcode.com/problems/symmetric-tree/ 
    //     console.log(curr);
    //     if (curr === null) {
    //         // console.log("***")
    //         return true;
    //     }

    //     return this.isSymmetric(curr.left, curr.right);

    // }



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

let insertTree = new BinarySearchTree();
insertTree.insert(10);
insertTree.insert(5);
insertTree.insert(15);
insertTree.insert(2);
insertTree.insert(8);
insertTree.insert(12);
insertTree.insert(20);
insertTree.print();

console.log("****************")

let insertTree2 = new BinarySearchTree();
insertTree2.insertRecursive(10);
insertTree2.insertRecursive(5);
insertTree2.insertRecursive(15);
insertTree2.insertRecursive(2);
insertTree2.insertRecursive(8);
insertTree2.insertRecursive(12);
insertTree2.insertRecursive(20);
insertTree2.print();

console.log("****************")

insertTree.isSymmetric();



