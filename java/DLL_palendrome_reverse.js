// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// ⚠ other methods removed for brevity ⚠
// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

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

    // return true or false if the current linked list is a palindrome
    // a palindrome is a string of characters equal to itself when reversed
    // assume your node.data are all numbers or lowercase chars
    isPalindrome() {
        if (this.head === null) {
            return false;
        }
        if (this.head === this.tail) {
            return true;
        }

        let hRunner = this.head;
        let tRunner = this.tail;

        while (tRunner !== hRunner && hRunner.prev != tRunner) {
            if (hRunner.data !== tRunner.data) {
                return false;
            }
            hRunner = hRunner.next;
            tRunner = tRunner.prev;
        }
        return true;
    }
    // ⚠ other methods removed for brevity ⚠
    // reverse a doubly linked list in place
    reverse() {

        if (this.head !== null && this.head !== this.tail) {
            let runner1 = this.head.next;
            let runner2 = this.head;

            while (runner1 !== null) {
                runner2.next = runner2.prev;
                runner2.prev = runner1;
                runner2 = runner1;
                runner1 = runner1.next;

            }
            runner2.next = runner2.prev

            let tempNode = this.head;
            this.head = this.tail;
            this.tail = tempNode;
        }


    }


    printList() {
        let runner = this.head
        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }



    // ---------------------------
    // ⚠ other methods removed for brevity ⚠
    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) { }
    // ⚠ other methods removed for brevity ⚠

}

// ⚠ ... other methods removed for brevity ⚠
// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)

const list1 = new DLList;

list1.addHead("a")
list1.addHead("b")
list1.addHead("b")
list1.addHead("a")
list1.addHead("c")

// console.log(list1.isPalindrome());
list1.printList()
console.log("***");;
list1.reverse();
console.log("***");;
list1.printList();