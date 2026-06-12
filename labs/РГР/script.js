$(document).ready(function() {
    
    // 1. ЛОГІКА ПЕРЕКЛАДУ
    $('#btn-en').click(function(e) {
        e.preventDefault();
        $('body').removeClass('lang-ua').addClass('lang-en');
        $('#btn-ua').removeClass('active');
        $(this).addClass('active');
        document.title = "World Museums";
    });

    $('#btn-ua').click(function(e) {
        e.preventDefault();
        $('body').removeClass('lang-en').addClass('lang-ua');
        $('#btn-en').removeClass('active');
        $(this).addClass('active');
        document.title = "Найвідоміші музеї світу";
    });

    // 2. Ініціалізація віджета Accordion (Про сайт)
    $("#accordion").accordion({
        collapsible: true,
        active: 0,
        heightStyle: "content"
    });

    // 3. Логіка кнопки "Вгору"
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn(300);
        } else {
            $('#backToTop').fadeOut(300);
        }
    });

    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // 4. Ініціалізація Fancybox (Галерея)
    // Змінено селектор та ВИМКНЕНО Hash (щоб не відкривало фото при натисканні на меню)
    Fancybox.bind('[data-fancybox="museum_gallery"]', {
        Hash: false, // Цей рядок блокує авто-відкриття від URL
        compact: false,
        idle: 8000,
        animated: true,
        showClass: "f-fadeIn",
        hideClass: "f-fadeOut"
    });

    // 5. ЛОГІКА СЛАЙДЕРА НОВИН (гортання кнопок)
    const newsTrack = document.getElementById('newsTrack');
    
    $('.slider-next').click(function() {
        let cardWidth = $('.news-card').outerWidth(true) + 20; 
        newsTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    $('.slider-prev').click(function() {
        let cardWidth = $('.news-card').outerWidth(true) + 20; 
        newsTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

});