import "./style.css";

const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Email address is required.");
  } else {
    email.setCustomValidity("");
  }
});

zipcode.addEventListener("input", (event) => {
  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode.value);
  if (isValidZip) {
    zipcode.setCustomValidity("");
  } else {
    zipcode.setCustomValidity("Please input a valid zipcode.");
  }
});

password1.addEventListener("input", (event) => {
  if (password1.value.length >= 8) {
    password1.setCustomValidity("");
  } else {
    password1.setCustomValidity("Password must be at least 8 characters.");
  }
});

password2.addEventListener("input", (event) => {
  if (password2.value === password1.value) {
    password2.setCustomValidity("");
  } else {
    password2.setCustomValidity("Passwords don't match.");
  }
});

form.addEventListener("submit", (event) => {
  // Validate country selection
  if (country.value) {
    country.setCustomValidity("");
    console.log("form submitted");
  } else {
    country.setCustomValidity("Please select a country from the list.");
  }
  event.preventDefault();
});
