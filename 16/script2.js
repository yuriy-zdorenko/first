// Task 5
const inputs = document.querySelectorAll('input');

let isFirstClick = true;
inputs.forEach(input => {
  input.addEventListener('click', function() {
    if (isFirstClick) {
      alert(this.value);
      isFirstClick = false;
    }
  });
});

// Task 6
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', function() {
    const num = parseInt(this.innerText);
    this.innerText = num * num;
  });
});

