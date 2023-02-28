// making altars mocking function 

function altCaps(str) {
   let newStr =""
  for(let i = 0; i<str.length; i++){
     if(i % 2 === 0){
       newStr += str[i].toUpperCase()
     } else {
       newStr += str[i]
     }
     
  }
  return newStr
}



console.log(altCaps("I'm almost done to get"))
console.log(altCaps("let us have your thoughts about our relationship"));