class DoubleDragon {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
    if (this.tail === null)
      this.tail = this.head;
  }

  insertLast(item) {
    if (this.head === null)
      this.insertFirst(item);
    else {
      let newNode = new _Node(item, null, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertBefore(item, givenValue) {
    if (this.head === null)
      console.log('list is empty');
    else {
      let currNode = this.head;
      while (currNode !== null && currNode.value !== givenValue) {
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log(`${givenValue} not found, cannot insert before.`);
        return;
      }
      let newNode = new _Node(item, currNode, currNode.prev);
      if (this.head === currNode)
        this.head = newNode;
      if (currNode.prev !== null)
        currNode.prev.next = newNode;
      currNode.prev = newNode;
    }
  }

  insertAfter(item, givenValue) {
    if (this.head === null)
      console.log('list is empty');
    else {
      let currNode = this.head;
      while (currNode !== null && currNode.value !== givenValue) {
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log(`${givenValue} not found, cannot insert after.`);
        return;
      }
      let newNode = new _Node(item, currNode.next, currNode);
      if (currNode.next === null)
        this.tail = newNode;
      if (currNode.next !== null)
        currNode.next.prev = newNode;
      currNode.next = newNode;
    }
  }

  insertAt(item, index) {
    if (this.head === null) {
      console.log('list is empty');
      return null;
    }
    let currNode = this.head;
    let count = 0;
    while (currNode !== null && count !== index) {
      currNode = currNode.next;
      count++;
    }
    if (currNode === null) {
      console.log(`index: ${index} not found, cannot insert.`);
      return;
    }
    let newNode = new _Node(item, currNode, currNode.prev);
    if (index === 0)
      this.head = newNode;
    currNode.prev.next = newNode;
    currNode.prev = newNode;

  }


  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    if (this.tail.value === item) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${item} not found, cannot remove.`);
      return;
    }
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
  }

  find(item) {
    if (this.head === null) {
      console.log('list is empty');
      return null;
    }
    let currNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      currNode = currNode.next;
    }
    if (currNode.value === null) {
      console.log(`${item} is not in list`);
      return null;
    }
    return currNode;
  }

}

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default DoubleDragon;