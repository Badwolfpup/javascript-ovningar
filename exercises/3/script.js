const knapp = document.getElementById("räkna");
knapp.addEventListener("click", function() {
  let t1 = parseInt(document.getElementById("tal1").value);
  let t2 = parseInt(document.getElementById("tal2").value);
  document.getElementById("resultat").innerText = t1 + t2;
});