const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

/* const isEven = (num) => {
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
} */

const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = str => {
  const regex = /([\d]+)([*/])([\d]+)/;
  //return regex.test(str); //for testing
  const str2 = infixEval(str, regex);
  return str2 === str ? str : highPrecedence(str2);

};
//console.log(highPrecedence("5*3")); //for testing


const isEven = num => num % 2 === 0;

const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;
const median = nums => {
    const sorted = nums.slice().sort((a,b) => a - b); //sorting in ascending order
    const length = sorted.length;
    const middle = length / 2 - 1;
    return isEven(length) ? 
        average([sorted[middle], sorted[middle + 1]]) : 
        sorted[Math.ceil(middle)];  //step 25
}

const spreadsheetFunctions = {
    sum,
    average,
    median,
    even: nums => nums.filter(isEven), /* Add an even property to your spreadsheetFunctions. It should take a nums parameter, and return the result of filtering the nums array to only include even numbers */
    someeven: nums => nums.some(isEven), 
    everyeven: nums => nums.every(isEven),
    firsttwo: nums => nums.slice(0, 2), //return first two elements of nums array
    lasttwo: nums => nums.slice(-2), //return last two elements of nums array
    has2: nums => nums.includes(2),
    increment: nums => nums.map(num => num + 1),
    random: ([x, y]) => Math.floor(Math.random() * y + x), //step 102, don't understand how this syntax lol
    range: nums => range(...nums), // => range(...nums) from fcc, generates a range from the first number in nums to the second number in nums
    nodupes: nums => [...new Set(nums).values()], // Removing duplicates
    "": nums => nums,
  };

const applyFunction = (str) => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/; //regular expression that matches a number (including decimal numbers) followed by a + or - operator followed by another number.
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i; // This expression will look for function calls like sum(1, 4)
  const toNumberList = (args) => args.split(",").map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);
  
};

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
    
const charRange = (start, end) => 
    range(start.charCodeAt(0), end.charCodeAt(0)) //step 12
    .map(code => String.fromCharCode(code));

const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi; //Ranges are separated by a colon
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  
  const addCharacters = (character1) => character2 => num =>  //step 45, 46, 47
      charRange(character1, character2).map(elemValue(num)); //implicit return step 48
  
  // In JavaScript, it is common convention to prefix an unused parameter with an underscore _
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
  const functionExpanded  = applyFunction(cellExpanded);
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
};    

/* step 45 Example Code
const innerOne = elemValue(1);
const final = innerOne("A");
innerOne would be your inner function, with num set to 1, and final would have the value of the cell with the id of "A1". 
This is possible because functions have access to all variables declared at their creation. 
This is called closure. */

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };
  const letters = charRange("A", "J")
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
        const input = document.createElement("input");
        input.type = "text";
        input.id = letter + number;
        input.ariaLabel = letter + number;
        input.onchange = update; //onchange property, you need to tell your input elements to call the update function when the value changes, step 28
        container.appendChild(input);
    });
  });
};

const update = (event) => {
    const element = event.target;
    const value = element.value.replace(/\s/g, "");
    if (!value.includes(element.id) && value.startsWith('=')) {
      element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
    }
};