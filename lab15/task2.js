let a = 0;

do {
  if (a % 2 == 1) console.log(`${a} - непарне число`);
  if (a % 2 == 0) {
    if (a == 0) console.log(`${a} - це нуль`);
    else console.log(`${a} - парне число`);
  }
  a++;
} while (a <= 10);
