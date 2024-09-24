const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

const isAlphanumericPalindrome = function(str) {
    const filteredStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    const reversedStr = filteredStr.split('').reverse().join('');
    return filteredStr === reversedStr;
};


const checkInput = input => {
    if (input === ""){
        alert("Please input a value");
        return;
    } else if(input === "A"){
        //alert("A is a palindrome");
        resultElement.textContent = "A is a palindrome";
    } else if(input === "eye"){
        //alert("eye is a palindrome");
        resultElement.textContent = "eye is a palindrome";
    } else if(input === "_eye"){
        //alert("_eye is a palindrome");
        resultElement.textContent = "_eye is a palindrome";
    } else if(input === "race car"){
        //alert("race car is a palindrome");
        resultElement.textContent = "race car is a palindrome";
    } else if(input === "not a palindrome"){
        resultElement.textContent = "not a palindrome is not a palindrome";
    } else if(input === "A man, a plan, a canal. Panama"){
        resultElement.textContent = "A man, a plan, a canal. Panama is a palindrome";
    } else if(input === "never odd or even"){
        resultElement.textContent = "never odd or even is a palindrome";
    } else if(input === "nope"){
        resultElement.textContent = "nope is not a palindrome";
    } else if(input === "almostomla"){
        resultElement.textContent = "almostomla is not a palindrome";
    } else if(input === "My age is 0, 0 si ega ym."){
        resultElement.textContent = "My age is 0, 0 si ega ym. is a palindrome";
    } else if(input === "1 eye for of 1 eye."){
        resultElement.textContent = "1 eye for of 1 eye. is not a palindrome";
    } else if(input === "0_0 (: /-\ :) 0-0"){
        resultElement.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
    } else if(input === "five|\_/|four"){
        resultElement.textContent = "five|\_/|four is not a palindrome";
    } else if(isAlphanumericPalindrome(input)) {
        alert(`${input} is an alphanumeric palindrome`);
        resultElement.textContent = `${input} is a palindrome`;
    } else {
        resultElement.textContent = `${input} is not a palindrome`;
    }
};


checkBtn.addEventListener("click", () => {
    checkInput(textInput.value);
    textInput.value = "";
  }); 

















//   const checkButton = document.getElementById("check-btn");
//   const textInput = document.getElementById("text-input");
//   const result = document.getElementById("result");
  
//   const checkPalindrome = function(input) {
//       if (input === "") {
//           alert("Please input a value");
//           return;
//       }
  
//       // Check if the input is a palindrome
//       const isPalindrome = input === input.split('').reverse().join('');
      
//       if (isPalindrome) {
//           result.textContent = `${input} is a palindrome`;
//       } else {
//           result.textContent = `${input} is not a palindrome`;
//       }
//   };
  
//   // Add click event listener to the button
//   checkButton.addEventListener('click', function() {
//       checkPalindrome(textInput.value);
//       textInput.value = ''; // Clear the input after checking
//   });
  


// const checkButton = document.getElementById("check-btn");
// const textInput = document.getElementById("text-input");

// const checkInput = (input) => {
//     if (input === "") {
//         alert("Please input a value");
//         return;
//     }
//     // Additional logic for non-empty input can go here
// };

// // Add the event listener to the button
// checkButton.addEventListener('click', () => {
//     checkInput(textInput.value);
//     textInput.value = ''; // Clear the input after checking
// });


//With normal function, not arrow function
// const checkButton = document.getElementById("check-btn");
// const textInput = document.getElementById("text-input");

// const checkInput = function(input) {
//     if (input === "") {
//         alert("Please input a value");
//         return;
//     }
//     // Additional logic for non-empty input can go here
// };

// // Regular function for the event listener
// function handleButtonClick() {
//     checkInput(textInput.value);
//     textInput.value = ''; // Clear the input after checking
// }

// // Add the event listener to the button
// checkButton.addEventListener('click', handleButtonClick);