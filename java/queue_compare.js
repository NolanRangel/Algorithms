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
    // class name was not capitalized, push was missing a new node statement, and pop returns a node


    pop() {
        if (this.top === null) return null;
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed;
    }

    peek() {
        return this.top;
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {
    constructor() {
        this.front = null;
        this.rear = null;

    }


    compareQueue(q2) {
        // compare this queue to another given queue to see if they are equal
        // do not use any extra array or objects
        // the queue should return to the original order when order
        let tempQ1 = new SLLQueue();
        let tempQ2 = new SLLQueue();
        let result = true;
        while (!this.isEmpty() && !q2.isEmpty()) {
            let tempData1 = this.dequeue();
            let tempData2 = q2.dequeue();
            tempQ1.enqueue(tempData1);
            tempQ2.enqueue(tempData2);
            if (tempData1 !== tempData2) {
                result = false;
            }

        }
        while (!tempQ1.isEmpty() && !tempQ2.isEmpty()) {
            let tempData1 = tempQ1.dequeue();
            let tempData2 = tempQ2.dequeue();
            this.enqueue(tempData1);
            q2.enqueue(tempData2);
        }
        return result
    }

    isPalindrome() {
        //Determine if the queue is a palindrome (same items forward and backwards)
        // Use only 1 stack as additional storage, no other arrays or objects
        let tempStack = new SLLStack();
        let tempQ1 = new SLLQueue();
        let result = true;
        while (!this.isEmpty()) {
            let tempData = this.dequeue();
            tempStack.push(tempData);
            console.log(tempStack);
        }
        while (!this.isEmpty() && !tempStack.isEmpty()) {
            let tempData1 = this.dequeue();
            let tempData2 = tempStack.dequeue();
            tempQ1.enqueue(tempData1);
            if (tempData1 !== tempData2) {
                result = false;
            }
        }
        return result;

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



}


var q1 = new SLLQueue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.enqueue("d");
q1.printQueue();


var q2 = new SLLQueue();
q2.enqueue("a");
q2.enqueue("b");
q2.enqueue("c");
q2.enqueue("d");

var q3 = new SLLQueue();
q3.enqueue("a");
q3.enqueue("a");
q3.enqueue("c");
q3.enqueue("d");

console.log(q1.compareQueue(q2)) // expected: true
console.log(q1.compareQueue(q3)) // expected: false
console.log(q1.isPalindrome())
q1.printQueue();
q2.printQueue();
q3.printQueue();