//writing mocking function

function altCaps(str){
    let newSrt = ''
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            newSrt += str[i].toUpperCase()
        } else {
            newSrt += str[i]
        }
    }
    return newSrt
}


console.log(altCaps("I'm almost done to get"))
console.log(altCaps("let us have your thoughts about our relationship"));
