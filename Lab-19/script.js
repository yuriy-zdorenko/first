$(document).ready(function() {
    // Останній блок коду

    function checkGameCompletion() {
        if ($("#game-board img[src='']").length === 25) {
            $("#congratulations-dialog").show();
            gameStarted = false;
        }
    }

    // Додайте обробник події click до кожного квадрату гри
    $("#game-board").on("click", ".game-square", function() {
        if (!gameStarted) return;
        var clickedImageSrc = $(this).children("img").attr("src");
        if (clickedImageSrc === images[currentImageIndex]) {
            currentImageIndex = Math.floor(Math.random() * images.length);
            $("#current-image").attr("src", images[currentImageIndex]);
            $(this).children("img").attr("src", "");
            checkGameCompletion();
        }
    });

    // Почати гру
    $("#start-game").click(function() {
        $("#main-page").hide();
        $("#game-page").show();
        startGame();
        gameStarted = true;
    });

    // Почати з початку
    $("#reset-game").click(function() {
        startGame();
        gameStarted = true;
    });

    // Зіграти ще раз
    $("#play-again").click(function() {
        $("#congratulations-dialog").hide();
        startGame();
        gameStarted = true;
    });

    function startGame() {
        category = $("#category").val();
        images = generateRandomImages(category);
        currentImageIndex = Math.floor(Math.random() * images.length);
        renderGameBoard();
        $("#current-image").attr("src", images[currentImageIndex]);

        $(".game-square").droppable({
            drop: function(event, ui) {
                var droppedImageSrc = $(ui.draggable).attr("src");
                if (droppedImageSrc === images[currentImageIndex]) {
                    currentImageIndex = Math.floor(Math.random() * images.length);
                    $("#current-image").attr("src", images[currentImageIndex]);
                }
            }
        });

        $(".game-square img").draggable({
            revert: "invalid"
        });
    }

    function generateRandomImages(category) {
        var imageBasePath = "images/" + category + "/";
        var images = [];
        for (var i = 1; i <= 50; i++) {
            images.push(imageBasePath + i + ".jpg");
        }
        return images;
    }

    function renderGameBoard() {
        var gameBoard = $("#game-board");
        gameBoard.empty();
        for (var i = 0; i < 25; i++) {
            var imageIndex = Math.floor(Math.random() * images.length);
            var imageSrc = images[imageIndex];
            var gameSquare = $("<div>").addClass("game-square");
            var image = $("<img>").attr("src", imageSrc).attr("alt", "Картинка");
            gameSquare.append(image);
            gameBoard.append(gameSquare);
        }
    }

    function checkGameCompletion() {
        if ($("#game-board img[src='']").length === 25) {
            $("#congratulations-dialog").show();
            gameStarted = false;
        }
    }
});
