// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        let newNode = new DLLNode(node)
        let runner = this.head;
        if (this.exists(target) === false) {
            return false;
        }
        if (this.head.data === target) {
            addHead(target);
        }
        // while (runner !== null) {
        //     if (runner.data === target) {
        //         node.next = runner
        //         node.prev = runner.prev
        //         node.prev.next = node
        //         node.next.prev = node
        //     }
        //     runner = runner.next;
        // }

    }



    // return true or false if a node exists with data === val
    exists(val) {

        let runner = this.head;

        while (runner !== null) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // push to head
    addHead(node) {
        let newNode = new DLLNode(node)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            newNode.next.prev = newNode;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    printList() {
        let runner = this.head
        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}

// instantiate the DLL
// add a few nodes
// test!

var list1 = new DLList();
list1.addHead(1)
list1.addHead(2)
list1.addHead(3)
list1.addHead(4)
list1.prepend(3, 6)

// console.log(list1.exists(6))
list1.printList();