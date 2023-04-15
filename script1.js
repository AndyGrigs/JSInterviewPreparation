

//8888888888888888888888888888888888888888888888888888888888888



function isPalindrome(str) {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr === str
}

// Test your function

//==========================================================================

/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    let res = ''
  for(let i=0; i <= chars.length; i++){
    if(!res.includes(chars[i])){
      res += chars[i]
      return res
    }
  }
}

console.log(removeDupeChars(password));
