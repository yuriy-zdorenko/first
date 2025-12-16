let currentCategory = "animals50";
let images = [];
let currentImage = "";
let remainingMatches = 5;

function getRandomUniqueImages(array, count) {
  const copy = [...array];
  const selected = [];
  while (selected.length < count && copy.length) {
    const index = Math.floor(Math.random() * copy.length);
    selected.push(copy.splice(index, 1)[0]);
  }
  return selected;
}

function loadImages(category) {
  images = [];
  for (let i = 1; i <= 50; i++) {
    images.push(`images/${category}/${i}.jpg`);
  }
  const selected = getRandomUniqueImages(images, 25);
  $("#game-grid").empty();
  selected.forEach((src) => {
    const img = $(`<img src="${src}" data-src="${src}">`);
    img.droppable({
      drop: function (event, ui) {
        if ($(this).data("src") === ui.helper.data("src")) {
          $(this).css("border", "2px solid green");
          ui.helper.remove();
          remainingMatches--;
          if (remainingMatches === 0) {
            setTimeout(() => {
              alert("Вітаємо! Ви успішно знайшли 5 збігів!");
              $("#restart").click();
            }, 300);
          } else {
            setTimeout(() => {
              generateNewCurrent(selected);
            }, 300);
          }
        }
      }
    });
    $("#game-grid").append(img);
  });

  remainingMatches = 5;
  generateNewCurrent(selected);
}

function generateNewCurrent(availableImages) {
  const unmatched = availableImages.filter(src =>
    !$(`#game-grid img[data-src='${src}']`).is(":hidden")
  );
  currentImage = unmatched[Math.floor(Math.random() * unmatched.length)];
  $("#current-image").html(`<img src="${currentImage}" data-src="${currentImage}">`);
  $("#current-image img").draggable({
    revert: "invalid"
  });
}

$(document).ready(() => {
  loadImages(currentCategory);

  $("#category").on("change", function () {
    currentCategory = $(this).val();
    loadImages(currentCategory);
  });

  $("#restart").on("click", function () {
    loadImages(currentCategory);
  });
});
