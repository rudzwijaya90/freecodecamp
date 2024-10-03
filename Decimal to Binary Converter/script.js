const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    //return "1"; //step 18 return string of 1 or true, false is 0 in binary
    /* const inputs = [];
    const quotients = [];
    const remainders = [];
    if(input === 0){
        result.innerText = "0";
        return;
    };
    while (input > 0){
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
    result.innerText = remainders.reverse().join(""); */
    let binary = "";
    while(input > 0){
        binary = input % 2 + binary;
        input = Math.floor(input / 2);
      }  
    result.innerText = binary;
};

function checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0){
        alert('Please provide a decimal number greater than or equal to 0');
        return;
    }  
    //console.log(numberInput.value);
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    //console.log(e);
    if (e.key === "Enter"){
        checkUserInput();
    }
});