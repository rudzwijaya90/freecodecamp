const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault(); //to prevent default action button inside form element
    const inputValues = [...document.getElementsByClassName('values-dropdown')]const inputValues = [...document.getElementsByClassName("values-dropdown")].map(dropdown => Number(dropdown.value)); //.map()to iterate an array
    // console.log(inputValues); //output a string of array [ '8', '2', '4', '1', '3' ]
};

//step 11 
const updateUI = (array = []) => {
    array.forEach((num, i) => {});
    
  };



sortButton.addEventListener('click', sortInputArray); //testing