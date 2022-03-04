class Node {
  constructor(value){
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class Doubly {
  constructor(){
    this.head = null;
    this.tail = null;

    this.lenght = 0;
  }

  append (value) {
    const node = new Node(value);
    this.lenght++;

    if(!this.head){
      this.head = node;
      this.tail = this.head;
      return this;
    }

    this.tail.next = node;
    node.prev = this.tail;

    this.tail = node;

    return this;
  }

  prepend (value) {
    const node = new Node(value);
    this.lenght++;

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    return this;
  }

  insert (value, index) {
    if(index > this.lenght - 1) return this.append(value);
    if(index == 0) return this.prepend(value);

    const node = new Node(value);

    let preNode = this.getNode(index - 1);

    preNode.next.prev = node

    node.next = preNode.next;
    node.prev = preNode;

    preNode.next = node;

    this.lenght++;

    return this;
  }

  getNode (index) {
    let node = this.head;
    for(let i = 1; i <= index; i++){
      node = node.next;
    }

    return node;
  }
}

module.exports = Doubly;
