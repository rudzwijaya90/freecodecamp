const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault(); //to prevent default action button inside form element
    const inputValues = [
      ...document.getElementsByClassName('values-dropdown')
    ].map((dropdown) => Number(dropdown.value)); //.map()to iterate an array
    // console.log(inputValues); //output a string of array [ '8', '2', '4', '1', '3' ]
    // const sortedValues = bubbleSort(inputValues); //using bubbleSort
    // const sortedValues = selectionSort(inputValues); //using selectionSort
    // const sortedValues = insertionSort (inputValues); //using insertionSort

    // to fix 10 at beginning of array, use arrow syntax a and b --- step 43
    const sortedValues = inputValues.sort((a, b) => { // step 41 to .sort() the elements of an array
      return a - b;
    }); 
    
    //updateUI(inputValues); //step 15
    updateUI(sortedValues); //step 20
};

//step 11 
const updateUI = (array = []) => {
    array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num; //step 14
  })
};

  const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length - 1; j++){ //iterate every array element except the last one
        //console.log(array, array[j], array[j+1]); //debugging
        if(array[j] > array[j+1]){
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    } return array;
  };


  /* Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. 
  Then, it finds the next smallest value in the array, and swaps it with the second value in the array. 
  It continues iterating through the array until it is completely sorted. */
  const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++){
      let minIndex = i; //to ensure current value is the smallest and swapped with itself
      
      for (let j = i + 1; j < array.length; j++){ //i + 1 start at the index after i
        console.log(array, array[j], array[minIndex]); // for debugging
        if (array[j] < array[minIndex]){
            minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array;
  };

  /* The last sorting algorithm you will implement is the insertion sort. 
  This algorithm works by building up a sorted array at the beginning of the list. 
  It begins the sorted array with the first element. 
  Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on. */
  const insertionSort = (array) => {
    /* An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted. 
    With this in mind, create a for loop that starts at the second element in the array */
    for (let i = 1; i < array.length; i++){
      const currValue = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currValue){
        array[j + 1] = array[j];
        
        j--;
      }
      array[j + 1] = currValue;
    }
    return array;
  };

sortButton.addEventListener('click', sortInputArray); //testing