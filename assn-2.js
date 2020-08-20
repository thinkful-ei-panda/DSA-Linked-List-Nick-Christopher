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

  // SSL.insertLast('Tauhida');
  // SSL.remove('squirrel');
  // SSL.insertBefore('test', 'Starbuck');



  SSL.printList();
}

main();