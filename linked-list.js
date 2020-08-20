class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    console.log(`added ${item} to beginning of LL`);
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
      console.log(`added ${item} to end of LL`);
    }
  }

  find(item) {
    // start at the head
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      console.log(`list is empty cannot add ${item}`);
      return null;
    }
    // check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        console.log(`${item} not found in list`);
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    console.log(`found ${item}`);
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      console.log(`list is empty can't find ${item}`);
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      console.log(`removed ${item} (which was the head)`);
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
      console.log(`${item} not found in list`);
      return;
    }
    console.log(`${item} removed`);
    previousNode.next = currNode.next;
  }

  insertBefore(newNode, givenNode) {
    // If the list is empty
    if (this.head === null) {
      console.log(`list is empty adding ${newNode} to beginning`);
      return null;
    }

    if (this.head === givenNode) {
      console.log(`adding ${newNode} before ${givenNode} and setting ${newNode} to head`);
      this.insertFirst(newNode.value);
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