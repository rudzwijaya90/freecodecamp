function getAverage(scores) {
    if (scores.length === 0) return 0;

    let sum = 0;

    // Use a unique variable name for the loop index
    for (let index = 0; index < scores.length; index++) {
        sum += scores[index];
    }

    // Calculate the average
    const average = sum / scores.length;

    return average;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));