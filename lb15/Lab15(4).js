let user = prompt("Задайте довжину в сантиметрах: ")

let number = Number(user);

if (isNaN(number) || user.trim() === "") {
    alert("Це НЕ число! Ви ввели літери або порожній рядок.");
} else {
    console.log("Користувач ввів число:" + number)
    alert("Це = " + number / 2.54 + "  дюйма")
}


