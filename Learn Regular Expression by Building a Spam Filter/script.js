const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

//regex to match "please help" words
const helpRegex = /please help|assist me/i; //i flag to ignore case "|" to match either left or right side text
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i; //step 17-22

//step 25++
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i; //[]character class to match e or 3, \s to check spaces tabs or line breaks
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i; //(?:^|\s) to match whole words front (?:$|\s) for end of whole words 
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener('click', () => {
    if (messageInput.value === ""){
        alert("Please enter a message.");
        return;
    } result.textContent= isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam."
    messageInput.value = "";
});

//step 4 implicitly return false
//const isSpam = (msg) => false;
//const isSpam = (msg) => msg.match(helpRegex); //return the result of calling .match() on msg passing helpRegex as argument

//const isSpam = (msg) => helpRegex.test(msg); //test method return boolean value
/* Use the .some() method to check if testing your msg on any of your denyList regular expressions returns true.
Use regex as the parameter for the callback function, for clarity. step 12*/




