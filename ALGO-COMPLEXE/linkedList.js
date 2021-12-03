class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null,
            this.tail = null;
        this.size = 0;
    }

    add(node) {
        if (this.size === 0) {
            this.tail = node;
        } else {
            this.head.next = node;
        }

        this.head = node;
        this.size++
        return this;
    }

    deleteTail() {
        if (this.size > 0) {
            if (this.tail.next) {
                this.tail = this.tail.next;
            } else {
                this.tail = null;
                this.head = null;
            }
            this.size--;
        }
    }

    getNode(n) {

        if (n > this.size - 1 || n < 0) {
            throw "l'indice est en dehors des bornes";
        }

        let currentNode = this.tail;
        while (n > 0) {
            currentNode = currentNode.next;
            n--;
        }
        return currentNode;
    }

    deleteHead() {
        if (this.size > 0) {
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            } else {
                let nextToLast = this.getNode(this.size - 2);
                this.head = nextToLast;
            }
            this.size--;
        }
    }


}

const list = new LinkedList();

list.add(new Node(5))
    .add(new Node(8))
    .add(new Node(3))
    .add(new Node(7))
    .add(new Node(12));

//console.log(list.tail.next.value);

//list.deleteTail();

console.log(list.getNode(2).value)

/*
let current = list.tail;
while(current){
    console.log(current.value);
    current = current.next;
}*/