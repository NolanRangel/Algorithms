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
        this.index = 0;
    }

    insertAtBack(data) {
        var newNode = new Node(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    // establish the head
    //  loop throught the list and create index
    // loop again and find index?
    // return value
    secondToLast() {
        //return the value of the second to last node in the list.
        let runner = this.head
        if (runner.next === null) {
            return null;
        }
        while (runner != null) {
            if (runner.next.next === null) {
                return runner.data
            }
            runner = runner.next;
        }

    }

    removeData(data) {
        //Remove the node that has the matching given value
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list.
        if (!this.head) {
            console.log("Empty List");
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let runner1 = this.head;
        let runner2 = null;
        while (runner1) {
            console.log(runner1);
            runner2 = runner1;
            runner1 = runner1.next;
            if (runner1 && runner1.data === data) {
                runner2.next = runner1.next;
                break;
            }
        }
    }

    // BONUS
    prepend(newVal, targetVal) {
        //Insert a new node before a node that has the given target value
    }

}


var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
list2.insertAtBack(4);
list2.insertAtBack(5);
//       HEAD
// list2: (1) --> (2) --> (3) --> null
console.log(list2.secondToLast());

list2.removeData(2);


// list1.printList();
list2.printList();