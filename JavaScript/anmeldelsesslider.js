const colors = {
    "red": "#e74c3c",
    "orange": "#e67e22",
    "yellow": "#f1c40f",
    "green": "#2ecc71",
    "blue": "#3498db"
}


let slideIndex = 1;

showSlides(slideIndex);

document.getElementById("prevBtn").addEventListener("click", function() {
    changeSlide(-1);
});

document.getElementById("nextBtn").addEventListener("click", function() {
    changeSlide(1);
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "grid";
    // Set the color of the quote svg with in the current slide to a random color in the colors object
    slides[slideIndex-1].querySelector("svg").style.fill = colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]];
    
}