const knapp = document.getElementById("hälsa");
knapp.addEventListener("click", function() {
  let namn = document.getElementById("namn").value;
  document.getElementById("meddelande").innerText = "Hej " + namn + "!";
});