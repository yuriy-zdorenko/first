// Task 1
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.onclick = function() {
        alert(this.getAttribute('src'));
    }
});

// Task 2
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.setAttribute('title', this.innerText);
    });
    link.addEventListener('mouseout', function() {
        this.removeAttribute('title');
    });
});

// Task 3
links.forEach(link => {
    link.addEventListener('mouseover', addHrefToTitle);
    link.addEventListener('mouseout', removeHrefFromTitle);
});

function addHrefToTitle() {
    this.innerText += ` (${this.getAttribute('href')})`;
    this.removeEventListener('mouseover', addHrefToTitle);
}

function removeHrefFromTitle() {
    const href = this.getAttribute('href');
    this.innerText = this.innerText.replace(` (${href})`, '');
}

// Task 4
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        document.getElementById('demo').innerText = this.value;
    });
});
