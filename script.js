




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