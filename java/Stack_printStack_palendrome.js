class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLStack {
    constructor() {
        this.top = null;
    }
    // add to top
    push(data) {
        let newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top === null) return null;
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed.data;
    }

    peek() {
        return this.top.data;
    }


    printStack() {
        // print every node in the stack (hint: by using push() and pop()
        // make sure the original stack is back to the original state
        let tempStack = new SLLStack();

        while (this.top !== null) {
            let tempData = this.pop();
            console.log(tempData);
            tempStack.push(tempData);
        }
        while (tempStack.top !== null) {
            let tempData = tempStack.pop();
            this.push(tempData);
        }
    }

    copyStack() {
        var newStack = new SLLStack()
        var tempStack = new SLLStack();
        while (!this.isEmpty()) {
            var tempData = this.pop();
            tempStack.push(tempData);
            //console.log(tempData);
        }
        while (!tempStack.isEmpty()) {
            var tempData = tempStack.pop(); // grab value from temp stack
            this.push(tempData); // push data back to original stack
            newStack.push(tempData);
        }
        //create a second stack and copy values from the first stack into the second stack, so they are in the same order. 
        return newStack
    }

}


class SLLQueue {
    constructor() {
        this.front = null;
        this.rear = null;

    }


    isPalindrome() {
        //Determine if the queue is a palindrome (same items forward and backwards)
        // Use only 1 stack as additional storage, no other arrays or objects
        // tacocat
        var isPalindrome = true;
        var tempQueue = new SLLQueue();
        var tempStack = new SLLStack();
        while (!this.isEmpty()) {
            var tempData = this.dequeue();
            tempQueue.enqueue(tempData);
            tempStack.push(tempData);
        }
        while (!tempQueue.isEmpty()) {
            var tempData1 = tempQueue.dequeue();
            var tempData2 = tempStack.pop();
            if (tempData1 !== tempData2) {
                isPalindrome = false;
            }
            this.enqueue(tempData1);
        }
        return isPalindrome;
    }


    getFront() {
        if (this.front) {
            return this.front.data;
        } else {
            return null;
        }
        //return the front
    }

    getRear() {
        if (this.rear) {
            return this.rear.data;
        } else {
            return null;
        }
        //return the front
    }

    enqueue(data) {
        // construct a new node and add to the current queue
        var node = new Node(data);
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        // remove and return from the front of the queue
        if (!this.front) {
            return null;
        }

        const dequeued = this.front;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }
        return dequeued.data;
    }

    isEmpty() {
        if (this.front) {
            return false;
        } else {
            return true;
        }
        // check if the queue is empty
    }

    printQueue() {
        console.log("Front: " + this.getFront());
        console.log("Rear: " + this.getRear());
        var tempQ = new SLLQueue();
        while (!this.isEmpty()) {
            var tempData = this.dequeue();
            tempQ.enqueue(tempData);
            console.log(tempData);
        }
        while (!tempQ.isEmpty()) {
            var tempData = tempQ.dequeue();
            this.enqueue(tempData);
        }

    }

}


var q1 = new SLLQueue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.enqueue("d");
q1.printQueue();
console.log(q1.isPalindrome());

var q2 = new SLLQueue();
q2.enqueue("a");
q2.enqueue("b");
q2.enqueue("c");
q2.enqueue("b");
q2.enqueue("a");
q2.printQueue();
console.log(q2.isPalindrome());
// var s1 = new SLLStack();
// s1.push("a");
// s1.push("b");
// s1.push("c");
// s1.push("d");
// s1.printStack();