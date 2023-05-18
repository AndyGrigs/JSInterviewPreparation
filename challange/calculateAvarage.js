/*Challenge: Write a function that takes an array of numbers as input and returns the average of all the numbers in the array, rounded to two decimal places. */

const numbers = [4, 7, 2, 9, 12, 3];

function calculateAverage(numbers){
    if (numbers.length === 0) {
        return 0
    }

    const sum = numbers.reduce((acc, num) => acc + num)
    console.log(sum)
    const average = sum / numbers.length
    average.toFixed(2)

    return average
}

console.log(calculateAverage(numbers));
// Output: 6.17
