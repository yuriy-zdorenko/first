let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

input1.addEventListener("click",firstClick);
input2.addEventListener("click",firstClick);
input3.addEventListener("click",firstClick);

//перший клік
function firstClick() {
    let val = this.value; 
    console.log("Значення поля " + this.id + ": " + val);
    this.removeEventListener("click",firstClick);
    this.addEventListener("click", secondClick);
};

//другий клік
function secondClick()
{
    let val = this.value; 
    alert("Значення поля " + this.id + ": " + val);
};
