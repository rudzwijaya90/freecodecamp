const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const formattedDate = `${day}-${month}-${year}`;
//console.log(formattedDate);

currentDateParagraph.textContent = formattedDate;



//change event is used to detect when the value of an HTML element has changed
dateOptionsSelectElement.addEventListener('change', () => { 
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
          currentDateParagraph.textContent = formattedDate
            .split("-")
            .reverse()
            .join("-");
          break;
        case "mm-dd-yyyy-h-mm":
          currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
          break;
        case "mm-dd-yyyy-h-mm-ss":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});

// const exampleSentence = "selur pmaCedoCeerf".split('').reverse().join('');
// console.log(exampleSentence);