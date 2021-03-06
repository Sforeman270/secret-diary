// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Declaration of arrays of the character types to be included in the password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x",
     "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
"X", "Y", "Z",];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")", "_", "-", "=", "+" ];

//Declaration of arrays above
var identifiedLength = "";
var identifiedLowercase;
var identifiedNumber;
var identifiedUpperCase;
var identifiedSpecialCharacter;

//function for the prompt to verify the numbers of character needed in the password
function generatePassword() {
  var identifiedLength = (prompt("Hi User! How long do you want your password to be?"));

  while(identifiedLength <= 7 || identifiedLength >= 129) {
    alert("Your password should be within 8-128 characters");
    var identifiedLength = (prompt("Hi User! How long do you want your password to be?"));
  }

  var identifiedNumber = confirm("Click if you want to have any numeric characters.");
  var identifiedLowercase = confirm("Click if you want to have any lowercase characters.");
  var identifiedUpperCase = confirm("Click if you want to have any uppercase characters.");
  var identifiedSpecialCharacter = confirm("Click if you want any special characters.");

  while(identifiedSpecialCharacter === false && identifiedUpperCase === false && identifiedNumber === false && identifiedLowercase === false) {
    alert("Hi User! You need to choose at least one option.");
    var identifiedNumber = confirm("Click if you want to have any numeric characters.");
    var identifiedLowercase = confirm("Click if you want to have any lowercase characters.");
    var identifiedUpperCase = confirm("Click if you want to have any uppercase characters.");
    var identifiedSpecialCharacter = confirm("Click if you want to have any special characters.");
  }

  var passwordElement = []

  if (identifiedNumber) {
    passwordElement = passwordElement.concat(number)
  }

  if (identifiedLowercase) {
    passwordElement = passwordElement.concat(lowerCase)
  }

  if (identifiedUpperCase) {
    passwordElement = passwordElement.concat(upperCase)
  }

  if (identifiedSpecialCharacter) {
    passwordElement = passwordElement.concat(specialCharacter)
  }

  console.log(passwordElement);

  var anyNumber = ""

  for(var i = 0; i < identifiedLength; i++) {
    anyNumber = anyNumber + passwordElement[Math.floor(Math.random() * passwordElement.length)];
    console.log(anyNumber)
  }

  return anyNumber;
}


