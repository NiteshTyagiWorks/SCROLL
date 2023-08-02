document.addEventListener("DOMContentLoaded", function() {
    const one = document.getElementById("button_one");
    const two = document.getElementById("button_two");
    const three = document.getElementById("button_three");
    const four = document.getElementById("button_four");


    one.addEventListener("click", function() {
        window.scrollTo(0, window.innerHeight * 0);
    });
    two.addEventListener("click", function() {
        window.scrollTo(0, window.innerHeight * 1);
    });
    three.addEventListener("click", function() {
        window.scrollTo(0, window.innerHeight * 2);
    });
    four.addEventListener("click", function() {
        window.scrollTo(0, window.innerHeight * 3);
    });
});