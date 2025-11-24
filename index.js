function myFunction() {
  let x = document.getElementById("Change_ingredients2").value;
  document.getElementById("Change_ingredients2").innerHTML = "You selected: " + x;
}

function changeColor() {
  document.body.style.backgroundColor = "#89CFF0";
}

function addReview() {
  let x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
