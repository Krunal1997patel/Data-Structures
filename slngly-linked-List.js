//random data that will = vall
// reference to the next after thet data = next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// let test = new Node('1');
// test.next = new Node('23');
// test.next.next = new Node('21');

// console.log(test);

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newtail = current;
        while(current.next){
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let current = this.head.next;
        this.head = current
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;

    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = null;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++; 
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, val){
       let foundNode = this.get(index);

        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length -1) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index -1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
             current = current.next;
        }
        console.log(arr);
    }


}

let test = new singlyLinkedList();
test.push('hello');
test.push(23);
test.push('welcome');
test.push(true);
test.push('100');
// test.set(1, 'user');
// test.insert(0, "something");
// test.remove(3);
// console.log(test.insert(0, "something"));
test.reverse();
test.print();