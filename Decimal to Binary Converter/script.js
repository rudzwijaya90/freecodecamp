const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {

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