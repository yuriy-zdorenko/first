let i = 2;
while (i <= 100) {
    let j = 2;
    while (j * j <= i && i % j !== 0) j++;
    if (j * j > i) console.log(i);
    i++;
}