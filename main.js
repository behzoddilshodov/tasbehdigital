var i = 0; 
var input = document.querySelector(".input");
var demo = document.getElementById("demo");
var form = document.querySelector(".form");

function buttonClick() {
  document.getElementById("inc").value = ++i
}


function reset() {
  document.getElementById("form").reset()
}

