/**Challenge: Write a function that takes an array of numbers as input and returns a new array containing only the unique numbers from the original array, preserving their original order. */

const numbers = [2, 5, 1, 3, 2, 4, 3, 5];

function getUniqueNumbers(nums) {
    const uniqueNums = []

    nums.forEach(num => {
        if(!uniqueNums.includes(num)) uniqueNums.push(num)
    });

    return uniqueNums 
}

console.log(getUniqueNumbers(numbers));
// Output: [2, 5, 1, 3, 4]
