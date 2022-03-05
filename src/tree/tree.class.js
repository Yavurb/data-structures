class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    const node = new Node(value);

    if(this.root == null){
      this.root = node;
      return;
    }

    let currentNode = this.root;

    while(true) {
      if(node.value == currentNode.value) break;
      if(node.value > currentNode.value){
        const nextNode = currentNode.rigth;
        if(nextNode == null){
          currentNode.rigth = node;
          break;
        }
        currentNode = currentNode.rigth;
      } else if (node.value < currentNode.value) {
        const nextNode = currentNode.left;
        if(nextNode == null){
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      }
    }

    return this;
  }

  search(value){
    let currentNode = this.root;

    while(currentNode.value != value) {
      if(value > currentNode.value){
        const nextNode = currentNode.rigth;
        if(nextNode == null){
          return false;
        }
        currentNode = currentNode.rigth;
      } else {
        const nextNode = currentNode.left;
        if(nextNode == null){
          return false
        }
        currentNode = currentNode.left;
      }
    }

    return true;
  }
}