// Assignment Code
var generateBtn = document.querySelector("#generate");
var allInputs = "";
var charAdded = 0;

// Write password to the #password input
function generatePassword(passwordLength){
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var num = "123456789";
  var specialChar = "!@#$%^&*(){<>?|";
  var randomPassword = "";
  allInputs = "";
  charAdded = 0;
  // var allInputs = upperCaseAlphabet + lowerCaseAlphabet + num + specialChar;

  var inputLower = confirm("Do you want to include lower case letters?")
  if (inputLower === true) {
    randomPassword += lowerCaseAlphabet;
    addedChars(lowerCaseAlphabet,1);
  }
  var inputUpper = confirm("Do you want to include upper case letters?")
  if (inputUpper === true) {
    randomPassword += upperCaseAlphabet;
   addedChars(upperCaseAlphabet,1);
  }
  var inputNum = confirm("Do you want to include numbers?")
  if (inputNum === true) {
    randomPassword += num;
    addedChars(num,1);
  }
  var inputChar = confirm("Do you want to include special characters?")
  if (inputChar === true) {
    randomPassword += specialChar;
    addedChars(specialChar,1);
  }

  var charCount = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))
  for (let i = 0; i < charCount - charAdded; i++) {
   addedChars(randomPassword,0)
  }

  return allInputs

}

function addedChars(charArray, numToAdd) {
  let inputs = Math.floor(Math.random()*charArray.length);
  allInputs += charArray.charAt(inputs)
  charAdded+=numToAdd;
  
}
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
  }
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
    

  //   for (let i = 0; i < array.length; i++) {
  //     var allChar = Math.floor(Math.random()*allChar.length);
  //     randomPassword +=
      
  //   }
  // }




// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password")

//   passwordText.value = password;
  // var password = "";
  // var passwordText = document.querySelector("#password");
  

  // var builtString = ""

  // //boolean




  

  // passwordLength: function() {
  //   alert()
  // }

  
  
  // for (let i = 0; i < passwordLength; i++) {
  //       password = password + values.Math.floor(Math.random() * Math.floor(values.length - 1));
    
  // }

  // passwordText.values = password;





// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
