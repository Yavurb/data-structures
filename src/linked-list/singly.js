class Node {
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

class Singly {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append (value) {
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      this.tail = this.head;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  prepend (value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }

    node.next = this.head;
    this.head = node;

    return this;
  }
}

module.exports = Singly;
