


let myDiv = document.getElementsByTagName("div");

function colorRed()
{
    if (!this.classList.contains('red') && !this.classList.contains('green')) 
    {
        this.classList.add('red');
        this.removeEventListener("click", colorRed);
        this.addEventListener("click", colorGreen);
        return;
    };

    this.classList.replace('green', 'red');
    this.removeEventListener("click", colorRed);
    this.addEventListener("click", colorGreen);
};

function colorGreen()
{
    this.classList.replace('red', 'green');
    this.removeEventListener("click", colorGreen);
    this.addEventListener("click", colorRed);
};

for (let i=0; i<myDiv.length; i++)
{
    myDiv[i].addEventListener("click", colorRed);
};