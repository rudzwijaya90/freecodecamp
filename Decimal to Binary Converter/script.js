const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");



function checkUserInput = () => {
    if (!numberInput.value){

    }
    console.log(numberInput.value);
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    //console.log(e);
    if (e.key === "Enter"){
        checkUserInput();
    }
});