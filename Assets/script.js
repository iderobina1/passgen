// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt(
    "Enter the length of your secure password between (8-128 characters):"
  );
  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  var lowerCase = confirm("Do you want lowercase characters?");
  var upperCase = confirm("Do you want uppercase characters?");
  var number = confirm("Do you want number characters?");
  var specialCharac = confirm("Do you want special characters?");

  if (!lowerCase && !upperCase && !number && !specialCharac) {
    alert("You must select at least one type of character.");
    return;
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$=";

  var Chars = "";
  if (lowercaseChars) Chars += lowercaseChars;
  if (uppercaseChars) Chars += uppercaseChars;
  if (numberChars) Chars += numberChars;
  if (specialChars) Chars += specialChars;

  var password = generateRandomPassword(length, Chars);

  return password;
}

function generateRandomPassword(length, Chars) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * Chars.length);
    password += Chars.charAt(randomIndex);
  }
  return password;
}
