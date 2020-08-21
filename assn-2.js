import LinkedList from './linked-list.js';
import DoubleDragon from './dll.js';

function mainDLL() {
  let DLL = new DoubleDragon();

  const items = [
    'Aquaria',
    'Caprica',
    'Gemenon',
    'Picon',
    'Sagittaron',
  ];

  for (let i in items)
    DLL.insertLast(items[i]);

  DLL.insertAfter('Aang', 'Sagittaron');
  console.log('head: ', DLL.head.value);
  console.log('tail: ', DLL.tail.value);

  display(DLL);
}

mainDLL();

function main() {

  let SSL = new LinkedList();

  const items = [
    'Apollo',
    'Boomer',
    'Helo',
    'Husker',
    'Husker2',
    'Husker3',
    'Starbuck'
  ];

  for (const i in items)
    SSL.insertLast(items[i]);

  SSL.insertLast('Tauhida');
  // SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Helo');
  SSL.insertAfter('Hotdog', 'Starbuck');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');

  // SSL.printList();
  // display(SSL);
  // console.log(size(SSL));
  // console.log(isEmpty(SSL));
  // console.log(findPrevious(SSL, 'Kat'));
  // console.log(findLast(SSL));
  // console.log(display(reverseList(SSL)));
  // console.log(thirdFromEnd(SSL));
  // console.log(findMiddle(SSL));

  // // Create a circular linked list
  // SSL.head.next.next.next.next.next.next = SSL.head.next.next;
  // console.log(hasCycle(SSL)); // true

  // // Remove circular dependency
  // SSL.head.next.next.next.next.next.next = null;
  // console.log(hasCycle(SSL)); // false

}

function display(linkedList) {
  let currNode = linkedList.head;

  if (currNode === null) {
    console.log('list is empty');
    return;
  }

  while (currNode !== null) {
    console.log(`${currNode.value}`);
    currNode = currNode.next;
  }
}

function size(linkedList) {
  let currNode = linkedList.head;
  let count = 0;

  while (currNode !== null) {
    currNode = currNode.next;
    count++;
  }
  return count;
}

function isEmpty(linkedList) {
  if (linkedList.head === null)
    return true;
  return false;
}

function findPrevious(linkedList, item) {
  let currNode = linkedList.head;

  if (currNode === null) {
    console.log('list is empty');
    return;
  }

  while (currNode !== null && currNode.next.value !== item) {
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log(`${item} does not exist in this list`);
    return;
  }

  return currNode;

}

function findLast(linkedList) {
  let currNode = linkedList.head;

  if (currNode === null) {
    console.log('list is empty');
    return;
  }

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// O(n^2)
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function reverseList(linkedList) {
  if (linkedList.head === null) {
    console.log('list is empty');
    return;
  }

  let curr = linkedList.head;
  let prev = null;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  linkedList.head = prev; //set head
  return (linkedList);
}

function thirdFromEnd(linkedList) {
  let currNode = linkedList.head;

  if (currNode === null) {
    console.log('list is empty');
    return;
  }

  if (currNode.next.next.next === null) {
    console.log('list is does not have 3 items');
    return;
  }

  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;

}

function findMiddle(linkedList) {
  if (linkedList.head === null) {
    console.log('list is empty');
    return;
  }

  let currNode = linkedList.head;
  let midNode = currNode;
  let currCount = 1;
  let midCount = 1;

  while (currNode !== null) {
    if (midCount <= Math.ceil(currCount / 2)
      && Math.ceil(currCount / 2) !== 1) {

      midNode = midNode.next;
      midCount++;
    }
    currNode = currNode.next;
    currCount++;
  }
  console.log('currCount', currCount);
  console.log('midCount', midCount);

  return midNode;
}

function hasCycle(linkedList) {
  let currNode = linkedList.head;
  let nextNode = linkedList.head;

  while (nextNode.next.next !== null) {
    currNode = currNode.next;
    nextNode = nextNode.next.next;

    if (currNode === nextNode) {
      return true;
    }
  }
  return false;
}



main();