class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    let elementDeleted = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return elementDeleted;
  }

  delete(index) {
    let elementDeleted = this.data[index];
    this.shiftIndex(index);

    return elementDeleted;
  }

  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

module.exports = CustomArray;