let a = 0;

while (a <= 100) {
  let y = 2;
  while (y <= a) {
    if (a == y) console.log(a);

    if (a % y == 0) break;

    y++;
  }
  a++;
}
