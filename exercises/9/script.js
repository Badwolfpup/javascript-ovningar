let n = 0;
const plus = document.getElementById("plus");
plus.addEventListener("click", function() {
  n++;
  document.getElementById("räknare").innerText = n;
});