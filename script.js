function cap(str) {
  return str.toUpperCase()
}
//console.log(cap('run'))


/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(str) {
  return str.split(' ')
    .join('😱')
    .toUpperCase() + '!'
}

// Test your function
//console.log(panic("I'm almost out of coffee"));
//console.log(panic("winter is coming"))

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str) {
if(str.endsWith("!")){
  return "sh..." + str.slice(0, -1).toLowerCase()
}
  return "sh..." + str.toLowerCase()
}

//console.log(whisper("PLEASE STOP SHOUTING."));
//console.log(whisper("MA'AM, this is a Wendy's!"));

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
  if(!word.startsWith(':') && !word.endsWith(':')) return word
  const slice = word.slice(1, -1)
    if(emojis[slice]){
      return emojis[slice]
    } else {
      return slice
    }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
  const resPhrase = phrase.split(' ').map(word => emojifyWord(word)).join(' ')
   return resPhrase
}



// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));



// function for finding anagram
function isAnagram(str1, str2) {
   if (str1.length !== str2.length) {
      return false
   }
   const newStr1 = str1.split('').sort().join('')
   const newStr2 = str2.split('').sort().join('')
  return newStr1 === newStr2
}


// console.log(isAnagram("inch", "chin"));
// console.log(isAnagram("night", "thing"));