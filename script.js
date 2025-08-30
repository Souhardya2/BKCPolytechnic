
document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector('.navbar');
    let scroll_up_btn = document.querySelector(".scroll-up-btn");
    let menu_btn = document.querySelectorAll('.menu-btn');

    window.addEventListener("scroll", () => {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }

        //scroll-up button show/hide script
        if (this.scrollY > 500) {

            scroll_up_btn.classList.add("show");
        } else {

            scroll_up_btn.classList.remove("show");
        }
    });

    //slide-up script
    scroll_up_btn.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // toggle menu/navbar script
    menu_btn.forEach(function (elem) {
        elem.addEventListener("click", function () {
            document.querySelector('#menu').classList.toggle("active");
            document.querySelector('#bar').classList.toggle("active");
        });
    });

    // javascript typing text animation
    var typed = new Typed(".typing", {
        strings: ["Student Clubs", "Hostel", "Canteen", "Transport", "Libraries", "Sports", "Scholarships", "Healthcare", "Laboratories"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Career Guidance", "Academic support", "Internship opportunities", "Professional skills", "Digital resources"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Responsive sliding setion-1
    if (window.outerWidth > 1024) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 6,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    else if (window.outerWidth > 800) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    else if (window.outerWidth > 600) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    else if (window.outerWidth > 450) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    // Responsive sliding setion - 2
    if (window.outerWidth > 925) {
        var swiper = new Swiper(".mySwiper1", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    else if (window.outerWidth > 657) {
        var swiper = new Swiper(".mySwiper1", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    else if (window.outerWidth > 444) {
        var swiper = new Swiper("mySwiper1", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    else {
        var swiper = new Swiper(".mySwiper1", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOninteraction: false,
            },
            navigation: {
                nextEl: "swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});
