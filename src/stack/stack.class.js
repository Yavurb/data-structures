class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if(this.length == 0){
      this.bottom = node;
      this.top = node;
    } else {
      const lastNode = this.top;
      this.top = node;
      this.top.next = lastNode;
    };

    this.length++;
    return this;
  }

  pop(){
    this.length--;

    const nextNode = this.top.next;
    this.top = nextNode;

    if(this.length == 0) this.bottom = null;

    return this;
  }
}

module.exports = Stack;