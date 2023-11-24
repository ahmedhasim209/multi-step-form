// logic for step one
let stepOne = document.querySelector(".step-one");

// select step two
let stepTwo = document.querySelector(".step-two");

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

let data = { name: "", email: "", topics: new Set() };

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
    stepOne.style.left = "-45%";
    stepTwo.style.left = "50%";
    data.name = nameInput;
    data.email = emailInput;
  }
});
// start logic for step two

// select checkbox divs
let checkBox = document.querySelectorAll(".checkbox-container .check-box");

// select step two button
let btnTwo = document.querySelector(".step-two form button");

// select step three
let stepThree = document.querySelector(".step-three");

// select step three container
let threeContainer = document.querySelector(".step-three .three-container");

// select span name
let spanName = document.querySelector(".span-name");
// select span email
let spanEmail = document.querySelector(".span-email");
// select topics lis
let topics = document.querySelector(".topics-ul");

// loop in all check divs
checkBox.forEach((e) => {
  e.addEventListener("click", (event) => {
    if (event.target.classList.contains("clicked")) {
      event.target.classList.remove("clicked");
      data.topics.delete(event.target.textContent);
    } else {
      event.target.classList.add("clicked");
      data.topics.add(event.target.textContent);
    }
  });
});

btnTwo.addEventListener("click", (event) => {
  data.topics.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = e;
    topics.appendChild(li);
  });
  // loop in all checkboc divs
  checkBox.forEach((e) => {
    if (e.classList.contains("clicked")) {
      allSpans.forEach((e) => {
        e.classList.remove("active");
      });
      mainBullets
        .getElementsByTagName("span")[2]
        .classList.add("color", "active");
      phBullets.textContent = "Step 3 of 3";
      stepTwo.style.left = "-45%";
      stepThree.style.left = "50%";
      spanName.textContent = data.name;
      spanEmail.textContent = data.email;
    }
  });
});
