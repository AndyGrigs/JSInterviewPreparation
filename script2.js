





function removeDupesFromArray(arr) {
  const res = []
  arr.forEach(item => {
    if (!res.includes(item)) {
      res.push(item)
    }
  })
  return res
}

//console.log(removeDupesFromArray(eggScrambleRecipe));



/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr) {
  let resArr = []
  arr.forEach(el => {
    if (!Array.isArray(el)) {
      resArr.push(el)
    } else {
      el.forEach(i => {
        resArr.push(i)
      })
    }
  })
  return resArr
}

console.log(flatten(kittyPrizes));
//console.log(flatten(kittyScores));



/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

// console.log(sumArray(studentCount));



/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5
}

function findTheWinner(obj){
    // initialize some new variable to: 
        // keep track of the current highest vote number
        let highestVotes = 0;
        // keep track of the current winning item
        let winningItem = "";
    // for each food option in the food object
    for(let food in obj){
          // is the current value higher than the value of highestVotes?
          if(obj[food] > highestVotes){
              // yes: the new value of highestVotes in the current value and
              highestVotes = obj[food];
              // winningItem = the current property
              winningItem = food;
          }

           
    }
      
    // return string announcing the winner using winningItme and highestVote variables
    return `The winner is ${winningItem} with ${highestVotes} votes.`
}

console.log(findTheWinner(gameNightFood));


/*Write a function that takes in an array of numbers and returns a new array containing only the even numbers in the original array.

For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return [2, 4, 6].

 */
const evenArr =(arr) => {
let res  = []
 arr.forEach(i=>{
    if(i%2===0){
      res.push(i)
    }
  })
return res
}
console.log(evenArr([1, 2, 3, 4, 5, 6]))
