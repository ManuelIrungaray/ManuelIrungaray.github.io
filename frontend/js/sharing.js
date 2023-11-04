var button = document.getElementById("my-button");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("my-div").style.backgroundColor = "green";
}
