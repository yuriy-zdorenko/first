let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let outputStr = document.getElementById("demo");



input1.onclick = myFoo;
input2.onclick = myFoo;
input3.onclick = myFoo;


function myFoo() {
    let val = this.value; 
    console.log("Значення поля " + this.id + ": " + val);
    
    outputStr.textContent = val;
}