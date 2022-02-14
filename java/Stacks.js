//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;

    }
  }
  
  class Stack{
    constructor(){
      this.top=null;
      this.length = 0;
    }
  
    isEmpty(){
      //check if the stack is empty
      //return a boolean 

      if(this.top === null){
          return true;
      } else{
          return false;
      }
    }
  
    push(data){
      //create a node from the data
      // add the new node to the stack (the top)
      
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    }
  
    pop(){
      // remove and return the item 
      // remove the top
    let poppedTop = this.top
    this.top = this.top.next;
    this.length--;
    return poppedTop;
    }
  
    peek(){
      //return the top item without removing it
      return this.top.data;
    }
  
    size(){
      //return the size of the stack
      return this.length;
    }
  
    printStack(){ // For learning purpose
      console.log("TOP")
      let runner = this.top;
      while(runner){
        // console.log(runner.data);
        runner= runner.next
      }
    }
  }
  
  let s1 = new Stack();
    s1.push(1);
  console.log(s1.isEmpty())
  s1.push(2);
  s1.push(3);
  s1.printStack(); 
  //expected:
  // TOP
  // [ 3 ] 
  // [ 2 ]
  // [ 1 ]
  
  console.log(s1.pop()); //expected: [ 3 ]
  s1.printStack();
  console.log(s1.size());
  console.log(s1.peek());
  //expected: 3
  // TOP
  // [ 2 ] 
  // [ 1 ]
  