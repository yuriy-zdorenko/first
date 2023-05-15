

//1
let i = 0;

while(i <= 100) {
    console.log(i)
    i++;
}

// 2
let i2 = 0;

do {
    if (i2 === 0) {
        console.log("0 - це нуль")
        i2++;
        continue;
    }

    if (i2 % 2 === 0)
        console.log(i2 + " - це парне число")
    else
        console.log(i2 + " - це непарне число")

    i2++;
} while (i2 <= 10)

// 3
let numb = 10000;
let counter = 0;
let result = 0;

while (true) {
    counter++;

    if ((numb /= 2) < 50) {
        result = numb;
        break;
    }
}
console.log("Count is " + counter);
console.log("Result is " + result);

//4
let month = 0;

while (true) {
    month = parseInt(window.prompt("Input month number: "));

    if (month >= 1 && month <= 12) {
        break;
    }
    else window.alert("Wrong input! Month number must be greater then 0 and lower then 12")
}
let season = "";

if (month === 12 || month === 1 || month === 2)
    season = "Winter";
else if (month >= 3 && month <= 5)
    season = "Spring";
else if (month >= 6 && month <= 8)
    season = "Summer";
else if (month >= 9 && month <= 11)
    season = "Autumn";

const month_names = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
let month_name = month_names[month - 1];

window.alert("Current month is " + month_name + " , This is " + season + " season");

//5
let temperature_celsius = parseInt(window.prompt("Enter temperature in Celsius: "));
let temperature_fahrenheit = (9/5) * temperature_celsius + 32;
window.alert("Temperature in Fahrenheit is: " + temperature_fahrenheit);

//6
let day = 0;

while (true) {
    day = parseInt(window.prompt("Input day number: "));

    if (day >= 1 && day <= 7) {
        break;
    }
    else window.alert("Wrong input! Day number must be greater then 0 and lower then 7");
}

const day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day_name = day_names[day - 1];

window.alert("Day name is: " + day_name);