$(document).ready(function () {
  let categories = ['animals', 'insects', 'fish'];
  let images = { animals: [], insects: [], fish: [] };
  let matchedCount = 0;

  function loadImages() {
    images = { animals: [], insects: [], fish: [] };
    categories.forEach(category => {
      for (let i = 1; i <= 50; i++) {
        images[category].push(`images/${category}/${i}.png`);
      }
    });
  }

  function shuffleArray(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }

  function initGame() {
    $('#grid').empty();
    matchedCount = 0;
    loadImages();

    let selectedImages = [];
    categories.forEach(category => {
      selectedImages = selectedImages.concat(shuffleArray(images[category]).slice(0, 50));
    });

    selectedImages = shuffleArray(selectedImages).slice(0, 25);

    selectedImages.forEach(src => {
      const item = $(`<div class="grid-item" data-src="${src}"></div>`).css('background-image', `url(${src})`);
      item.droppable({
        accept: '#targetImage',
        drop: function (event, ui) {
          const targetSrc = $('#targetImage').data('src');
          if ($(this).data('src') === targetSrc) {
            $(this).css('border', '2px solid green');
            matchedCount++;
            if (matchedCount === 25) {
              setTimeout(() => {
                alert('Вітаємо! Ви завершили гру!');
                initGame();
              }, 100);
            } else {
              setNextImage();
            }
          }
        }
      });
      $('#grid').append(item);
    });

    setNextImage();
  }

  function setNextImage() {
    const items = $('.grid-item').not(function () {
      return $(this).css('border-color') === 'rgb(0, 128, 0)';
    });
    const randIndex = Math.floor(Math.random() * items.length);
    const src = items.eq(randIndex).data('src');
    $('#targetImage')
      .data('src', src)
      .css('background-image', `url(${src})`)
      .draggable({ revert: 'invalid' });
  }

  $('#startGame').click(function () {
    $('#main').hide();
    $('#game').show();
    initGame();
  });

  $('#restart').click(function () {
    initGame();
  });

  $('#main').show();
});