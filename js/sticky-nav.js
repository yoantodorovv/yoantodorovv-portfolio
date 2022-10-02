window.addEventListener("scroll", function() {
    let nav = document.querySelector(".nav");
    nav.classList.remove("hidden");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        let nav = document.querySelector(".nav");
        nav.classList.remove("sticky");
        nav.classList.toggle("hidden", window.scrollY > 0);
    }, 2300);
}, false);