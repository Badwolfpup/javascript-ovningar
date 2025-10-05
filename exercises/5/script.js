let klick = 0;
const knapp = document.getElementById("knapp");
knapp.addEventListener("click", function() {
  klick++;
  document.getElementById("antal").innerText = "Antal klick: " + klick;
});