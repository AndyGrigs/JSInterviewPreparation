/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  const count = {}

  const name = str.toLowerCase().split(' ').join('')
  for (let i = 0; i <= name.length; i++) {
    if (!count[name[i]]) {
      count[name[i]] = 1
    } else {
      count[name[i]] += 1
    }
  }
  return count
}

console.log(countChars("Peggy Poojdfbvlakjbdvaljkooooorth"));



/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce"
]

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
    if(!Array.isArray(el)){
resArr.push(el)
} else {
      el.forEach(i=>{
        resArr.push(i)
      })
}
  })
return console.log(resArr)
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

console.log(sumArray(studentCount));
