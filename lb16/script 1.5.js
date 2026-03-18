let arrP = document.querySelectorAll("p");

function wordsToNumber(text) {
    const dictionary = {
        "один": 1, "два": 2, "три": 3
    };

    const words = text.toLowerCase().split(/\s+/); // Розбиваємо за пробілами
    let total = 0;

    words.forEach(word => {
        if (dictionary[word] !== undefined) {
            total += dictionary[word];
        }
    });

    return total;
};

function myFoo()
{
    let str = this.innerHTML;
    let number = wordsToNumber(str);
    this.innerHTML = sqrt(number);
};

for (let i=0; i<arrP.length; i++)
{
    arrP[i].onclick=myFoo;
};

function sqrt(number)
{
    return number*number;
};