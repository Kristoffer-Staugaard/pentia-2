document.getElementById("show-popup").addEventListener("click", function() {
    var popup = document.querySelector(".popup-wrap");
    popup.style.display = "block";
  });

  document.querySelector(".popup-btn").addEventListener("click", function() {
    var popup = document.querySelector(".popup-wrap");
    popup.style.display = "none";
  });
