// Task 7

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        const length = parseInt(this.getAttribute('data-length'));
        if (this.value.length === length) {
            this.classList.remove('red-border');
            this.classList.add('green-border');
        } else {
            this.classList.remove('green-border');
            this.classList.add('red-border');
        }
    });
});

// Task 8

const divs = document.querySelectorAll('.box');

divs.forEach(div => {
    div.addEventListener('click', toggleColor);
});

let isRed = true;

function toggleColor(event) {
    if (isRed) {
        event.target.classList.add('red');
        event.target.classList.remove('green');
    } else {
        event.target.classList.add('green');
        event.target.classList.remove('red');
    }
    isRed = !isRed;
}
