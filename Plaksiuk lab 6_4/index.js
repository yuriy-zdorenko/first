// Завдання 1
// (function seconds(total){console.log(total % 60)})(20)

// Завдання 2
// (function perimeter(side, count){console.log(side * count)})(5, 6)

// Завдання 3
// (function(n){
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz")
//         }else if(i % 3 === 0){
//             console.log("fizz")
//         }else if(i % 5 === 0){
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
//     }
// })(15)

// Завдання 4
// (function calculate(num1, num2, num3){console.log(((num1 + num2 + num3) / 3).toFixed(2))})(2,5,7)

// Завдання 5
// (function isDivisible(n, x, y){
//     if(n < 0 || x < 0 || y < 0){
//         console.log("Якесь число менше 0!")
//     }else if(n % x === 0 && n % y === 0){
//         console.log(`Число ${n} ділиться на ${x} та ${y}!`)
//     }else{
//         console.log("Ніяке число не ділиться")
//     }
// })(8,4,2)

// (function isDivisible(n, x, y){n % x === 0 && n % y === 0 ? console.log(`Число ${n} ділиться на ${x} та ${y}!`) : console.log("Ніяке число не ділиться")})(8,4,2)

// (function isDivisible(n, x, y){
//     const result = (n % x === 0 && n % y === 0 && `Число ${n} ділиться на ${x} та ${y}!`) || "Ніяке число не ділиться" 
//     console.log(result)
// })(8,4,2)

// Завдання 6
// const arr = [2,4,5,2,9,32,45,23,21,65,12,23]
// const most = arr.reduce((max, num) => max > num ? max : num)
// const least = arr.reduce((min, num) => min < num ? min : num)
// const sum = arr.reduce((sum, num) => sum + num)
// let average = arr.reduce((ave, num) => ave + num)
// average = average / arr.length
// let couples = arr.filter(num => num % 2 !== 0)
// console.log(`Найбільше ${most}, Найменше ${least}, Сумма ${sum}, Середнє ${average}, Непарні ${couples}`)

// Завдання 7
// let arr = [
//     [4, -3, 5, 2, -8],
//     [-9, 12, 1, 6, 3],
//     [7, 2, -5, -3, 4],
//     [-6, 4, 8, -2, 1],
//     [1, 3, -7, 9, -10]
// ]

// for(let i = 0; i < 5; i++){
//     if(arr[i][i] > 0){
//         arr[i][i] = 1
//     }else if(arr[i][i] < 0){
//         arr[i][i] = 0
//     }
// }
// console.log(arr)

// Завдання 8
// function add(num1, num2){return num1 + num2}
// console.log(add(2,8))

// function sub(num1, num2){return num1 - num2}
// console.log(sub(2,8))

// function mul(num1, num2){return num1 * num2}
// console.log(add(2,8))

// function div(num1, num2){if(num1 !== 0 && num2 !== 0) return num1 / num2}
// console.log(div(2,8))

// Завдання 9
// (function checkNumber(num){
//     const arr = [2,5,3,6,9]
//     num > 0 ? console.log(`Число ${num} позитивне`) : console.log(`Число ${num} негативне`)
//     num > 0 && num % num ? console.log(`Число ${num} просте число`) : console.log(`Число ${num} не просте число`)
//     arr.forEach(el =>{
//         num % el === 0 ? console.log(`Число ділиться на ${el} без залишку`) : console.log(`Число не ділиться на ${el} без залишку`)
//     })
// })(10)

// Завдання 10
// const arr = [2,5,3,6,9,"Hello"]
// function squareArr(arr){return arr = arr.map(el => !isNaN(el) ? el * el : el)}
// console.log(squareArr(arr))

// Завдання 11
// const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
// function checkArr(arr){
//     return arr = arr.filter((el, index) => {
//         return arr.indexOf(el) === index
//     })
// }
// console.log(checkArr(arr))