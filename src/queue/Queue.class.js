const QueueNode = require('./QueueNode.class');

module.exports = class Queue{

    constructor() {
        this._head = null;
    }

    isEmpty = () => {
        return !this._head
    }

    peek = () => {
        if(!this._head){
            return null;
        }

        return this._head.data;
    }

    enqueue = (value) => { 
        const newNode = new QueueNode(value);

        if (!this._head){
            this._head = newNode;
        }else{
            let lastNode = this._head;

            // * Finding the last node in the queue 
            while (lastNode.next){
                lastNode = lastNode.next;
            }

            lastNode.next = newNode;
        }

        return this;
    }

    dequeue = () => {
        if(!this._head) return null;
        if(!this._head.next) return this._head = null;
        
        const removedHead = this._head;

        this._head = removedHead.next;

        return removedHead.data;
    }

}