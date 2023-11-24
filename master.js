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

// start logic for step three

// select main div
let mainDiv = document.querySelector(".main");

// select step three button
let btnThree = document.querySelector(".step-three .three-container button");

btnThree.addEventListener("click", (e) => {
  let overLay = document.createElement("div");
  overLay.style =
    "width : 100%; height : 100%; background-color : #00000080; position :absolute; z-index : 1000; ";
  mainDiv.appendChild(overLay);
  let alertBox = document.createElement("div");
  alertBox.style =
    "background: linear-gradient(135deg, rgb(38, 29, 81), rgb(18, 24, 38), rgb(18, 24, 38), rgb(18, 24, 38), rgb(18, 24, 38), rgb(38, 29, 81));z-index: 1001;width: 35%;height: 25%;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 1px solid #a1a1a9;border-radius: 15px;";
  overLay.appendChild(alertBox);
  let alertText = document.createElement("h1");
  alertText.innerHTML = "Success &#128131&#129309&#127997 ✅✅";
  alertText.style =
    "color: white;display: flex;justify-content: center;align-items: center;height: 100%;margin: 0 ;padding: 0;font-weight: 500;";
  alertBox.appendChild(alertText);
});