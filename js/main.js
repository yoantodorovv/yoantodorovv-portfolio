//Sticky nav

let nav = document.querySelector(".nav");

var timer = null;
var bool = true;
window.addEventListener('scroll', function(e) {
    nav.classList.remove("hidden");
    nav.classList.toggle("sticky", window.scrollY > 0);

    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {

        if (bool) {
            nav.classList.remove("sticky");
            nav.classList.toggle("hidden", window.scrollY > 0);
        }

        bool = true;
    }, 300);
}, false);

nav.addEventListener("mouseover", function() {
    nav.classList.remove("hidden");
    nav.classList.toggle("sticky", window.scrollY > 0);

    bool = false;
});

nav.addEventListener("mouseout", function() {
    nav.classList.remove("sticky");
    nav.classList.toggle("hidden", window.scrollY > 0);
    
    bool = true;
});

// Contact Buttons

var radioButtons = document.querySelectorAll('input.radio');

Array.from(radioButtons).forEach(x => {
    x.addEventListener('change', () => {
        Array.from(radioButtons).forEach(x => x.parentElement.classList.remove('form-service-click'));

        if (x.checked) {
            x.parentElement.classList.add('form-service-click');
        }
    });
});

let formInputs = document.querySelectorAll('.input');

Array.from(formInputs).forEach(x => {
    x.addEventListener('focus', () => {
        x.parentElement.classList.add('form-btn-click');
    });

    x.addEventListener('focusout', () => {
        x.parentElement.classList.remove('form-btn-click');
    });
});

//URL manipulation
