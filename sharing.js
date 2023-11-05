// var button = document.getElementById("my-button");
// //button.addEventListener("click", changeColor);

// button.addEventListener("click", function(event) {
//     event.preventDefault();
//     popupWindow.style.display = "block";
//   });

// function changeColor() {
//   document.getElementById("my-div").style.backgroundColor = "green";
// }


const popupButton = document.getElementById("popup-button");
const popupContainer = document.getElementById("popup-container");
const closeButton = document.getElementById("close-button");

popupButton.addEventListener("click", () => {
  popupContainer.style.right = "50"; // Slide the pop-up in from the right
});

closeButton.addEventListener("click", () => {
  popupContainer.style.right = "-400px"; // Slide the pop-up out to the right
});
