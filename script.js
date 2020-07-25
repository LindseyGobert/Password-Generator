// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(passwordLength){
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var num = "123456789";
  var specialChar = "!@#$%^&*(){<>?|";
  var randomPassword = "";
  // var allInputs = upperCaseAlphabet + lowerCaseAlphabet + num + specialChar;

  var inputLower = confirm("Do you want to include lower case letters?")
  if (inputLower === true) {
    randomPassword += lowerCaseAlphabet;
  }
  var inputUpper = confirm("Do you want to include upper case letters?")
  if (inputUpper === true) {
    randomPassword += upperCaseAlphabet;
  }
  var inputNum = confirm("Do you want to include numbers?")
  if (inputNum === true) {
    randomPassword += num;
  }
  var inputChar = confimrm("Do you want to include special characters?")
  if (inputChar === true) {
    randomPassword += specialChar;
  }

  var charCount = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))
  for (let i = 0; i < charCount; i++) {
    let inputs = Math.floor(Math.random()*randomPassword.length);
    allInputs += randomPassword.charAt(inputs)
  }

  return randomPassword

}
    
  // }
    


  
    

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
