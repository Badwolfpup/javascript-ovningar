let hemligt = Math.floor(Math.random()*10)+1;
const knapp = document.getElementById("knapp");
knapp.addEventListener("click", function() {
  let giss = parseInt(document.getElementById("gissning").value);
  if (giss === hemligt) {
    document.getElementById("svar").innerText = "Rätt!";
  } else {
    document.getElementById("svar").innerText = "Fel, försök igen.";
  }
});