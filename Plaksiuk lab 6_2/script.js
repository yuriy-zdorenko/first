// Завдання 1
// document.querySelectorAll("img").forEach(img =>{
//     img.onclick = function(){
//         console.log(this.width)
//     }
// })

// Завдання 2
// document.querySelectorAll("a").forEach(a =>{
//     function title(){
//         a.title = a.href
//     }

//     function removeTitle() {
//         a.removeAttribute("title");
//     }

//     a.addEventListener("mouseenter", title)
//     a.removeEventListener("mouseleave", removeTitle)
// })

// Завдання 3
// document.querySelectorAll("input").forEach(input =>{
//     input.onclick = function(){
//         document.getElementById("demo").innerText = this.value
//     }
// })

// Завдання 4
// document.querySelectorAll("input").forEach(input =>{
//     let flagInput = false

//     input.addEventListener("click", function(){
//         if(flagInput){
//             alert(this.value)
//         } else{
//             flagInput = true
//             console.log(this.value)
//         }
//     })
// })

// Завдання 5
// const numberWords = {
//     "нуль": 0,
//     "один": 1,
//     "два": 2,
//     "три": 3,
//     "чотири": 4,
//     "п'ять": 5,
//     "шість": 6,
//     "сім": 7,
//     "вісім": 8,
//     "дев'ять": 9,
//     "десять": 10
// };

// document.querySelectorAll("p").forEach(p =>{
//     p.addEventListener("click", function(){
//         this.innerText = numberWords[this.innerText] * 2
//     })
// })

// Завдання 6
// document.querySelectorAll("div").forEach(div => {
//     const originalColor = div.style.backgroundColor

//     function colorRed() {
//         div.style.background = "red"
//         div.removeEventListener("click", colorRed)
//         div.addEventListener("click", originColor)
//     }

//     function originColor() {
//         div.style.background = originalColor
//         div.removeEventListener("click", originColor)
//         div.addEventListener("click", colorRed)
//     }

//     div.addEventListener("click", colorRed)
// })