module.exports = class QueueNode {
    constructor (value = null, next = null){
        this.data =  value;
        this.next = next;
    }
}