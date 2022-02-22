// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
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
        var nodeRunner;
        if (this.tail != null) {
            nodeRunner = this.tail
            if (nodeRunner.prev == null) {
                this.tail = null
                this.head = null
            }
            else {
                nodeRunner.prev.next = null
                this.tail = nodeRunner.prev
                return nodeRunner;
            }
        }

    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        let count = 0;
        let runner = this.head;
        while (runner) {
            count++
            runner = runner.next;
        }
        return count;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }

    printList() {
        let runner = this.head
        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }
}

// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?

var list1 = new DLList();
list1.addHead(1)
list1.addHead(2)
list1.addHead(3)
list1.addHead(4)
console.log(list1.size())
console.log("****");


list1.printList()
console.log("****");
list1.removeTail()
console.log("****");
list1.printList()