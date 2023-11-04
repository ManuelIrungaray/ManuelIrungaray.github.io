var button = document.getElementById("my-button");
//button.addEventListener("click", changeColor);

button.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });

function changeColor() {
  document.getElementById("my-div").style.backgroundColor = "green";
}
