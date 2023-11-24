// logic for step one
let stepOne = document.getElementsByClassName("step-one");

// select step two
let stepTwo = document.getElementsByClassName("step-two");

// select form from step one
let formOne = document.querySelector(".step-one form");

// select form from step one
let formTwo = document.querySelector(".step-two form");

// select step one button
let buttonOne = document.querySelector(".step-one form button");

// select error span for name
let nameErorr = document.querySelector(".name-error");

// select error span for email
let emailErorr = document.querySelector(".email-error");

// select switch bullets Div
let mainBullets = document.querySelector(".container .switch-bullets");

// sellect bullet's span
let bulletsSpan = document.querySelector(".switch-bullets span");

// sellect all bullets spans
let allSpans = document.querySelectorAll(".switch-bullets span");

// select p in switch bullets
let phBullets = document.querySelector(".switch-bullets p");

// Function to validate email format
function isValidEmail(email) {
  let emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegx.test(email);
}
// Function to validate name format
function isValidName(name) {
  let nameRegx = /^[a-zA-Z ]{2,30}$/;
  return nameRegx.test(name);
}

formOne.addEventListener("submit", (event) => {
  event.preventDefault();
  // select name input value
  let nameInput = document.getElementById("name").value;

  // select email input value
  let emailInput = document.getElementById("email").value;

  // reset error massage
  nameErorr.textContent = "";
  emailErorr.textContent = "";

  // Validate name
  if (!nameInput) {
    nameErorr.textContent = "name is required";
    event.preventDefault();
  } else if (!isValidName(nameInput)) {
    nameErorr.textContent = "Invalid name format";
    event.preventDefault();
  }

  // Validate email
  if (!emailInput) {
    emailErorr.textContent = "email is required";
    event.preventDefault();
  } else if (!isValidEmail(emailInput)) {
    emailErorr.textContent = "Invalid email format";
    event.preventDefault();
  }

  //check if inputs valid or not to move to next step
  if (isValidName(nameInput) && isValidEmail(emailInput)) {
    allSpans.forEach((e) => {
      e.classList.remove("active");
    });
    mainBullets
      .getElementsByTagName("span")[1]
      .classList.add("color", "active");
    phBullets.textContent = "Step 2 of 3";
    formOne.style.left = "-150%";
    formTwo.style.left = "-80%";
  }
});
