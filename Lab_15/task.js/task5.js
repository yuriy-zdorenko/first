let tempCInput = prompt("Введіть температуру в градусах за Цельсієм:");
let tc = parseFloat(tempCInput);

if (!isNaN(tc)) {
    let tf = (9 / 5) * tc + 32;
    alert(`${tc}°C дорівнює ${tf.toFixed(2)}°F`);
} else {
    alert("Помилка! Введено не число.");
}