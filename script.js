const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const rangeEl = document.getElementById("range");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const copyBtn = document.getElementById("copyBtn");

rangeEl.addEventListener("input", () => {
  lengthEl.value = rangeEl.value;
});
lengthEl.addEventListener("input", () => {
  rangeEl.value = lengthEl.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordEl.value);
  alert("Password copied!");
}); 

function generatePassword() {
  const length = +lengthEl.value;
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let validChars = "";
  if (uppercaseEl.checked) validChars += uppercase;
  if (lowercaseEl.checked) validChars += lowercase;
  if (numbersEl.checked) validChars += numbers;
  if (symbolsEl.checked) validChars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += validChars[Math.floor(Math.random() * validChars.length)];
  }

  passwordEl.value = password;
}
