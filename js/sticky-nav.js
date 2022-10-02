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
    }, 1000);
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