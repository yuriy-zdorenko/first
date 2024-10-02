const restartGame = () => {
  location.reload();
};

const arrIMG = [];
let selectIMG;
const imgType = Math.floor(Math.random() * 3) + 1;

do {
  let newIMG = true;

  let str = './img/';

  switch (imgType) {
    case 1:
      str += 'animals/';
      break;
    case 2:
      str += 'fishes/';
      break;
    case 3:
      str += 'insects/';
      break;
  }

  str += Math.floor(Math.random() * 50) + 1;
  arrIMG.forEach(function (i) {
    if (i == str) newIMG = false;
  });
  if (newIMG) arrIMG.push(str);
} while (arrIMG.length < 25);

arrIMGCopy = [...arrIMG];

for (let i = 0; i < 25; i++) {
  $('.cards').append(
    `<div class="item border k${i + 1}" style="background-image: url(${
      arrIMG[i]
    }.jpg);"></div>`
  );
}

function changeIMG() {
  selectIMG = Math.floor(Math.random() * arrIMGCopy.length);
  let str = arrIMGCopy[selectIMG];
  $('#imgSlct').attr('src', `${str}.jpg`);
  arrIMGCopy.splice(selectIMG, 1);

  arrIMG.forEach(function (item, i) {
    if (item === str) {
      selectIMG = i;
    }
  });
}

changeIMG();

let currentDroppable = null;
let imgSelected = document.getElementById('imgSlct');
let imgInsert1 = document.getElementById('imgInsert');

imgSelected.onmousedown = function (event) {
  $(imgSelected).css('width', '90px');
  $(imgSelected).css('height', '90px');

  let shiftX = 30;
  let shiftY = 30;

  imgSelected.style.position = 'absolute';
  imgSelected.style.zIndex = 1000;
  imgInsert1.append(imgSelected);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    imgSelected.style.left = pageX - shiftX + 'px';
    imgSelected.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    imgSelected.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    imgSelected.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest(`.k${selectIMG + 1}`);
    if (currentDroppable != droppableBelow) {
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  imgSelected.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    imgSelected.onmouseup = null;
    $(imgSelected).removeAttr('style');
  };
};

function win() {
  if (arrIMGCopy[0] == undefined) {
    alert('Ви перемогли!!!');
    restartGame();
  }
}

function enterDroppable(elem) {
  elem.style.background = 'white';
  win();
  changeIMG();
  imgSelected.dispatchEvent(new MouseEvent('mouseup'));
}

imgSelected.ondragstart = function () {
  return false;
};
