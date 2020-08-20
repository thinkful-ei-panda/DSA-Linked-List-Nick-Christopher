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
    SSL.insertFirst(items[i]);

  SSL.insertFirst('Tauhida');

  SSL.remove('squirrel');

}

main();