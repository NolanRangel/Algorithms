// class Node 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        // Create a new node with the given value 
        // inserts it at the back of the list
        // HINT: How to find the last node of a Singly Linked List?


        if (!this.head) { //if it is an empty list
            this.head = new Node(data);
            return
        }

        var newNode = new Node(data);

        var runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }
    // HEAD
    //  (1) --> (2) --> (3) --> NULL
    //                   r


    // newNode



    removeHead() {
        // Remove the head (HINT: What will be the new head?)
        return !this.head ? "Head is empty" : this.head = this.head.next;
    }



    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }

    }
}


// FOR LEARNING PURPOSE ONLY
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
node1.next = node2;
node2.next = node3;
// ---------------------- 

var list1 = new SLL();

var list2 = new SLL();
list2.head = node1;

list1.insertAtBack(4);
list1.removeHead()
console.log("LIST 1")
list1.printList();

console.log("LIST 2")
list2.insertAtBack(4);
list2.printList();

