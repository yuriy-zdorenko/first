let b = 1000;
let res = b;
let count=0;
do
{
    res = res/3;
    count++;
}while(res>5)

document.writeln("Результат: " + res + ". Кількість ітерацій:" + count);