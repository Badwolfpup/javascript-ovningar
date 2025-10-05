const toggle = document.getElementById("toggle");
const texten = document.getElementById("texten");
toggle.addEventListener("click", function() {
  if (texten.style.display === "none") {
    texten.style.display = "block";
  } else {
    texten.style.display = "none";
  }
});