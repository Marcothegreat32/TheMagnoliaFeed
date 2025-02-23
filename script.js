document.addEventListener("scroll", function () {
  let header = document.querySelector(".newsletter-header");
  let stopPosition = 1000; // Adjust this value to the horizontal position where it should stop

  if (window.scrollY >= stopPosition) {
    header.style.position = "absolute";
    header.style.left = stopPosition + "px"; // Keep it in place
  } else {
    header.style.position = "fixed";
    header.style.left = "0";
  }
});

function checkPassword() {
  const correctPassword = "1mississippi2mississippi"; // Change this to your actual password
  const userInput = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");

  if (userInput === correctPassword) {
    document.getElementById("password-prompt").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
}
