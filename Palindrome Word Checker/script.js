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

//Instead doing this, I was typing all else if 
const checkInput = input => {
    if (input === ""){
        alert("Please input a value");
        return;
    }  else if(isAlphanumericPalindrome(input)) {
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
