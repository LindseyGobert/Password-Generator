// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*(){<>?|";
  
  for (let i = 0; i < 10; i++) {
        password = password + values.Math.floor(Math.random() * Math.floor(values.length - 1));
    
  }

  passwordText.values = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
