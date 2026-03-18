let user = prompt("Задайте число від 1 до 31: ")

let number = Number(user);

if (isNaN(number) || user.trim() === "") {
    alert("Це НЕ число! Ви ввели літери або порожній рядок.");
} else if(number>=1 && number<=31)
{
    let now = new Date();
    now.setDate(number);
    let dayName = now.toLocaleString('uk-UA', { weekday: 'long' });
    alert(`Число ${number} в цьому місяці — це ${dayName}.`);
    console.log(`Результат: ${dayName}`);
}
else
{
    alert("Введне число виходить за межі вказаного діапазона!")
    console.error("Введне число виходить за межі вказаного діапазона!")
}