// function for finding anagram

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false
    const newStr1 = str1.split('').sort().join('')
    const newStr2 = str2.split('').sort().join('')
    return newStr1 === newStr2
}

console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thingc"));