let clock = document.querySelector('.clock');
    let loader = document.getElementById('loader');

    function showPage() {
        loader.style.display = 'none';
        document.querySelector('.background').style.display = 'none'; // Приховати фон після завантаження
        document.body.style.overflow = 'visible'; // Показати сторінку після завантаження
    }

    function time() {
        let date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        if (hours < 10) {
            hours = '0' + hours;
        }

    }
    setInterval(time, 1000);

    // Час для затримки анімації завантаження
    setTimeout(showPage, 2000);

    document.addEventListener("DOMContentLoaded", function() {
        const navToggle = document.querySelector(".nav-toggle");
        const sidebar = document.querySelector(".sidebar");

        navToggle.addEventListener("click", function() {
            sidebar.classList.toggle("active");
        });
    });