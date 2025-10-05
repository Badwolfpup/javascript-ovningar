const slumpKnapp = document.getElementById("slump");
slumpKnapp.addEventListener("click", function() {
  let färg = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = färg;
});