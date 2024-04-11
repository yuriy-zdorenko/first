simpleWhile();
simpleDoWhile();

//while 1 -> 100
function simpleWhile() {
  console.log('while 1 -> 100');
  let i = 0;
  while (i <= 100) {
    console.log(i);
    i++;
  }
}
//while 1 -> 100
function simpleDoWhile() {
  console.log('do while 1 -> 10');
  let i = 0;
  do {
    if (i === 0) {
      console.log(i + ' - це нуль');
    } else if (i % 2 === 0) {
      console.log(i + ' - парне число');
    } else {
      console.log(i + ' - непарне число');
    }
    i++;
  } while (i <= 10);
}
