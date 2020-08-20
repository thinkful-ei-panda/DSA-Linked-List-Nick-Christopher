import LinkedList from './linked-list.js';

function main() {

  let SSL = new LinkedList();

  const items = [
    'Apollo',
    'Boomer',
    'Helo',
    'Husker',
    'Starbuck'
  ];

  for (const i in items)
    SSL.insertLast(items[i]);

  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Helo');
  SSL.insertAfter('Hotdog', 'Starbuck');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');

  // SSL.printList();
  display(SSL);
  console.log(size(SSL));
  console.log(isEmpty(SSL));
  console.log(findPrevious(SSL, 'Kat'));
  console.log(findLast(SSL));
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

main();