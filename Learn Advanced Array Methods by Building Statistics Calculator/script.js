const calculate = () => {
    const value = document.querySelector("#numbers").value; //get the value from input
    // The .split() method takes a string and splits it into an array of strings
    const array = value.split(/,\s*/g); //regex to split the value string by commas
    // The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method
    const numbers = array.map(el => Number(el)); //.map() creates a new array, instead of mutating the original array
    const filtered = numbers.filter(); //to filter that we are only working with numbers
};

// The .map() method takes a callback function as its first argument.