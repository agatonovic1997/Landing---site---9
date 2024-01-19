var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("navbar-hidden");
    } else {
        navbar.classList.add("navbar-hidden");
    }

    if (currentScrollPos === 0) {
        navbar.classList.remove("navbar-hidden");
    }

    prevScrollpos = currentScrollPos;
};
