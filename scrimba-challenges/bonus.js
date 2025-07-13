/*Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
    for(let i = 0; i < 10; i++){
        if(i % 5 ===0) {
            console.log('$100,000')
        } else if(i % 3 === 0){
            console.log('Vacation!')
        } else {
            console.log(':(')
        }
    }
}

awardBonuses()