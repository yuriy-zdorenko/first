// ----- task_1  ------
const pic1 = document.getElementById('pic_1');
const pic2 = document.getElementById('pic_2');
function showSource(img) {
  alert(img.src);
}
// ----- task_1  ------

// ----- task_2  ------
const linksTitle = document.getElementsByClassName('links_t');
Array.from(linksTitle).forEach((link) => {
  link.addEventListener('mouseover', function addTitle(e) {
    e.target.title = e.target.textContent;
    e.target.removeEventListener('mouseover', addTitle);
  });
});
// ----- task_2  ------

// ----- task_3  ------
const linksHref = document.getElementsByClassName('links_h');
Array.from(linksHref).forEach((link) => {
  link.addEventListener('mouseover', function addHref(e) {
    e.target.textContent = `${e.target.textContent} (${e.target.href})`;
    e.target.removeEventListener('mouseover', addHref);
  });
});
// ----- task_3  ------

// ----- task_4  ------
const demo = document.getElementById('demo');
const inputs = document.getElementsByClassName('input');
Array.from(inputs).forEach((input) => {
  input.addEventListener('blur', function addText(e) {
    demo.textContent = e.target.value;
  });
  input.addEventListener('click', function alertValue(e) {
    alert(e.target.value);
    e.target.removeEventListener('click', alertValue);
  });
});
// ----- task_4  ------

// ----- task_5  ------
const params = document.getElementsByClassName('numbers');
Array.from(params).forEach((para) => {
  para.addEventListener('click', function square(e) {
    let txt = para.textContent;
    e.target.textContent = txt + `(${Number(txt) * Number(txt)})`;
    e.target.removeEventListener('click', square);
  });
});
// ----- task_5  ------

// ----- task_6  ------
const inputs2 = document.getElementsByClassName('inputs_again');
Array.from(inputs2).forEach((input) => {
  input.addEventListener('blur', function checkLength(e) {
    let len = e.target.dataset.length;
    let value = e.target.value;
    if (len == value.length) {
      e.target.classList.toggle('valid');
    } else {
      e.target.classList.toggle('wrong');
    }
  });
});
// ----- task_6  ------

// ----- task_7  ------
const divs = document.getElementsByClassName('colors');
Array.from(divs).forEach((div) => {
  let curColor = 'none';
  div.addEventListener('click', function color(e) {
    if (curColor === 'none' || curColor === 'green') {
      e.target.style.backgroundColor = 'red';
      curColor = 'red';
    } else {
      e.target.style.backgroundColor = 'green';
      curColor = 'green';
    }
  });
});
// ----- task_7  ------
