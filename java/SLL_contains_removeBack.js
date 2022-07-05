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

    // check if the SLL includes the given data
    // return a boolean
    contains(data) {
        let runner = this.head;
        // console.log(runner);
        while (runner !== null) {
            //console.log(runner);
            //console.log(data);
            if (runner.data === data)
                runner = runner.next;
            return true;
        }
        return false;
    }

    // remove the last node of a SLL
    removeBack() {
        if (this.head === null)
            return;
        if (this.head.next === null)
            this.head = null;
        let runner = this.head;
        while (runner.next.next != null)
            runner = runner.next;
        runner.next = null;
    }

    // BONUS 
    average() {
        // loop through the SLL
        //find the average of all nodes
        if (this.head === null)
            return 0;
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner != null) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }
        return sum / count;
    }

    // use recursive for the contains methods
    containsRecursive(data, curr = this.head) {
        if (curr === null)
            return false;
        if (curr.data === data)
            return true;
        return this.containsRecursive(data, curr.next)
    }


}




var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
//       HEAD
// list2: (1) --> (2) --> (3) --> null


list1.printList();
list2.printList();

console.log(list2.contains(3));
// expected result: true
console.log(list2.contains(1000));
// expected result: false
console.log(list2.average());
console.log(list2.containsRecursive(3));
console.log(list2.containsRecursive(10));
list2.removeBack();
list2.printList();