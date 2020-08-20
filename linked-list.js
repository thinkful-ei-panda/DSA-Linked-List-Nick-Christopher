class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // start at the head
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${item} not found, cannot remove.`);
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(newValue, givenValue) {
    // If the list is empty
    if (this.head === null) {
      return null;
    }

    if (this.head.value === givenValue) {
      let newNode = new _Node(newValue, this.head);
      this.head = newNode;
      return;
    }

    // Start at the head
    let currNode = this.head;

    while ((currNode.next !== null) && (currNode.next.value !== givenValue)) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      console.log(`${givenValue} not found, cannot insert ${newValue}.`);
      return null;
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
  }

  insertAfter(newValue, givenValue) {
    if (this.head === null)  // If the list is empty
      return null;

    let currNode = this.head; // Start at the head

    while (currNode !== null && currNode.value !== givenValue) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${givenValue} not found, cannot insert ${newValue}.`);
      return;
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
  }

  insertAt(newValue, index) {
    if (this.head === null)
      return null;

    let currentIndex = 0;
    let currNode = this.head;
    let prevNode = this.head;

    if (index === 0) {
      this.insertFirst(newValue);
      return;
    }

    while (currNode !== null && currentIndex < index) {
      currentIndex++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`index:${index} not found, cannot insert ${newValue}.`);
      return;
    }
    let newNode = new _Node(newValue, currNode);
    prevNode.next = newNode;
  }

  printList() {
    let currNode = this.head;

    while (currNode !== null) {
      console.log(`${currNode.value}`);
      currNode = currNode.next;
    }
  }
}

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default LinkedList;