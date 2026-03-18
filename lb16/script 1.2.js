let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");

a1.addEventListener("mouseenter", myFoo);
a2.addEventListener("mouseenter", myFoo);
a3.addEventListener("mouseenter", myFoo);

function myFoo() {
    let hrefValue = this.getAttribute("href");
    
    

    this.setAttribute("title", hrefValue);
    
    console.log("Title встановлено: " + hrefValue);

    this.removeEventListener("mouseenter", myFoo);
}