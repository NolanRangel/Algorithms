
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


    sumOfHalvesEqual() {
        //Determines whether the sum of the left half of the queue items 
        // is equal to the sum of the right half.
        // using enqueue, dequeue 

        let newq1 = new SLLQueue()
        let sum = 0;
        let sum2 = 0;
        let counter = 0;
        let halfCount = 0;

        while (!this.isEmpty()) {
            let temp = this.dequeue();
            counter++
            console.log(counter);
            newq1.enqueue(temp);
        }
        if (counter % 2 == 1) {
            console.log("Halves are not equal");
            return false;
        } else {
            halfCount = counter / 2;
        }
        // get sum of first half
        while (halfCount > 0) {
            let temp = newq1.dequeue();
            sum += temp;
            this.enqueue(temp);
            halfCount--
        }
        // get sum of second half
        while (!newq1.isEmpty()) {
            let temp = newq1.dequeue();
            sum2 += temp;
            this.enqueue(temp);
        }
        if (sum === sum2) {
            console.log("Left half is equal to the right half");
            return true;
        } else {
            console.log("right half is not equal to the left half");
            return false;
        }



    }


    compareQueue(q2) {
        let isEqual = true;
        let newq1 = new SLLQueue()
        let newq2 = new SLLQueue()
        // q1: a,b,c,d.  q2: a,b,c 
        while (!this.isEmpty() || !q2.isEmpty()) {
            let temp = this.dequeue();
            let temp2 = q2.dequeue();
            if (temp != temp2) {
                console.log("false")
                isEqual = false;
            }
            newq1.enqueue(temp);
            newq2.enqueue(temp2);
        }
        // the while loop will stop when one of the q ends

        // q1 is not empty but q2 is empty 
        if (!this.isEmpty() && q2.isEmpty()) {
            isEqual = false;
        }
        if (this.isEmpty() && !q2.isEmpty()) {
            isEqual = false;
        }


        while (!newq1.isEmpty() && !newq2.isEmpty()) {
            let temp3 = newq1.dequeue()
            this.enqueue(temp3)
            let temp4 = newq2.dequeue()
            q2.enqueue(temp4)
        }
        if (isEqual) {
            console.log("they are equal")
        } else {
            console.log("they are not equal")
        }
        // compare this queue to another given queue to see if they are equal
        // do not use any extra array or objects
        // the queue should return to the original order when order
    }



    getFront() {
        if (this.front) {
            return this.front.data;
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
        let q2 = new SLLQueue();
        while (!this.isEmpty()) {
            let temp = this.dequeue();
            console.log(temp);
            q2.enqueue(temp)
        }
        while (!q2.isEmpty()) {
            this.enqueue(q2.dequeue())
        }


    }

}


var q1 = new SLLQueue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(1);
q1.enqueue(1);
q1.printQueue();

q1.sumOfHalvesEqual();


