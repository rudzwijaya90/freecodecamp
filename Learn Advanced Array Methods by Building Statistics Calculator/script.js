const getMean = (array) => 
    array.reduce((acc, el) => acc + el, 0) / array.length; //without {} to make implicit return

const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b); /* By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. The .sort() method mutates the original array. Change .toSorted()*/ 
    const getMedian = (array) => {
        const sorted = array.toSorted((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        
        const median = sorted.length % 2 === 0
          ? getMean([sorted[mid - 1], sorted[mid]])
          : sorted[mid];
        return median;
      }
}

const getMode = (array) => {
    const counts = {};
    //freecodecamp more consice code
    //array.forEach(el => counts[el] = (counts[el] || 0) + 1)
    array.forEach(el => {
        if (counts[el]){
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    })
    if (new Set(Object.values(counts)).size === 1){ //A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values
        return null;
      }
      const highest = Object.keys(counts)
      .sort((a, b) => counts[b] - counts[a])[0];

      const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
      );
      return mode.join(", ");
    // return counts; //only for testing. removed later
}

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
  }

const getVariance = (array) => {
    const mean = getMean(array);
    /* const differences = array.map(
        el => el - mean
    );
    const squaredDifferences = differences.map(
        el => el ** 2 //callback return value of el squared
    ); 
    const sumSquaredDifferences = squaredDifferences.reduce(
        (acc, el) => acc + el, 0
    ); */
    // to save time and memory (step 50)
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
};

const calculate = () => {
    const value = document.querySelector("#numbers").value; //get the value from input
    // The .split() method takes a string and splits it into an array of strings
    const array = value.split(/,\s*/g); //regex to split the value string by commas
    // The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method
    const numbers = array.map(el => Number(el)).filter(el => {return !isNaN(el)}); //.map() creates a new array, instead of mutating the original array
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
};

// The .map() method takes a callback function as its first argument.

/* tutorial to find oddListMedian and evenListMedian from freecodecamp
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian); 
*/