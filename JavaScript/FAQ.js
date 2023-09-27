console.log("main.js is running...");
let select_element = document.getElementsByClassName("FAQboks");
let i;

for (i = 0; i < select_element.length; i++) {
  select_element[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let BoksVedKlik = this.nextElementSibling;
    if (BoksVedKlik.style.display === "block") {
      BoksVedKlik.style.display = "none";
    } else {
      BoksVedKlik.style.display = "block";
    }
  });
}