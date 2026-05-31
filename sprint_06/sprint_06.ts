// Task 01
// Створіть масив чисел ar_1 що містить елементи 77, 88, 99 в такому ж порядку як зазначено. Тип вкажіть самостійно. Виведіть у консоль.

const ar_1: number[] = [77, 88, 99];
console.log(ar_1)


// Task 02
// Створіть масив чисел ar_2 що містить елементи 99, 100, 110 в такому ж порядку як зазначено. Тип вкажіть самостійно. Виведіть у .out-2, розділювач — знак підкреслення. В цьому і наступних завданнях з розділювачем прийнятною буде відповідь і 99_100_110_ і 99_100_110.

const ar_2: number[] = [99, 100, 110]
document.querySelector('.out-2')!.textContent = ar_2.join('_')

// Task 03
// Створіть масив ar_3, що складається з рядків 'Hello', 'Hi', 'Trust'. Тип даних вкажіть самостійно. Напишіть функцію f03, яка фільтрує масив ar3, повертаючи новий масив, в якому знаходяться елементи довжиною не менше 4 символів.

const ar_3: string[] = ['Hello', 'Hi', 'Trust']

// тут створюєте f03 стрілкову!!!
const f03 = (arr: string[]) => arr.filter(str => str.length >= 4)
console.log(f03(ar_3))

document.querySelector('.b-3')!.addEventListener('click', () : void => {
    document.querySelector('.out-3')!.textContent = f03(ar_3).join(' ');
});

// Task 04
// Створіть масив ar_4 що складається з чисел. Заповніть значеннями самостійно. Напишіть функцію f04, яка приймає масив як аргумент і повертає суму елементів масиву. Тип даних функції напишіть самостійно.

const ar_4: number[] = [1, 2, 7, 8, 9, 10]


// тут створюєте f04 стрілкову!!!
const f04 = (arr: number[]) => arr.reduce((acc, num) => acc + num,  0)

document.querySelector('.b-4')!.addEventListener('click', () : void => {
    document.querySelector('.out-4')!.textContent = String(f04(ar_4));
});


// Task 05
// Створіть функцію, яка виводить масив ar_5 у .out-5. Вивід здійснюйте циклом. Розділювач — дефіс.

const ar_5 : number[] = [];
ar_5[2] = 333;
ar_5[4] = 777;

// тут створюєте f05 стрілкову!!!
const f05 = (): void => {
    let result = '';
    for(let i = 0; i < ar_5.length; i++){
        if(ar_5[i] === undefined) continue;
        result += (result ? '-' : '') + ar_5[i];
    }
    document.querySelector('.out-5')!.textContent = result;
}
    


document.querySelector('.b-5')!.addEventListener('click', f05);




// Task 06
// Напишіть функцію f06, яка створює масив що складається лише з чисел масиву ar_06 та повертає його.

const ar_06 : (number|boolean)[] = [1, false, 2, true, 5, false];

// тут створюєте f06 стрілкову!!!
const f06 = () => ar_06.filter(i=> typeof(i) === 'number')


document.querySelector('.b-6')!.addEventListener('click', ():void=> {
    document.querySelector('.out-6')!.textContent = f06().join('=');
});

// Task 07
// Створіть readonly масив ar_07 що містить лише два значення true, false. Тип задайте самостійно. Виведіть масив у консоль.

const ar_07: readonly boolean[] = [true, false];
console.log(ar_07)

// Task 08
// Створіть функцію, яка зчитує число з input.i-8 і якщо число парне — робить його push у масив ar_08, якщо непарне — unshift у масив. Масив створіть глобально по відношенню до функції. Результат виводьте у .out-8, розділювач — підкреслення.

const ar_08: number[] = [];

// тут створюєте f08 стрілкову!!!
const f08 =()=> {
    const el = document.querySelector('.i-8') as HTMLInputElement;
    const num = Number(el.value);
    if (num%2 === 0) {
        ar_08.push(num)
    } else {
        ar_08.unshift(num)
    }
    document.querySelector('.out-8')!.textContent = ar_08.join('_')
}

document.querySelector('.b-8')!.addEventListener('click', f08);

// Task 09
// Створіть функцію, яка приймає ціле число n як аргумент і повертає масив довжиною n, заповнений випадковими числами від 0 до 10.

// тут створюєте f09 стрілкову!!!
const f09 = (n: number) => {
    let arr: number[] = [];
    for(let i = 0; i< n; i++){
        arr.push(Math.floor(Math.random()* 11))
    }
    return arr;
}


document.querySelector('.b-9')!.addEventListener('click', ():void=> {
    document.querySelector('.out-9')!.textContent = f09(4).join('_');
});

// Task 10
// Створіть функцію, яка приймає масив ar_10 і повертає два масиви, перший з яких містить лише парні числа з вихідного масиву, а другий — лише непарні числа.


// тут створюєте f10 стрілкову!!!
const f10 =(arr:number[]) => {
    const even = arr.filter(i => i%2 === 0)
    const odd = arr.filter(i => i%2 !== 0)
    return [even, odd]
}

document.querySelector('.b-10')!.addEventListener('click', ():void=> {
    const ar_10 : number[] = [22, 33, 44, 55, 66, 66, 88, 77];
    document.querySelector('.out-101')!.textContent = f10(ar_10)[0].join('_');
    document.querySelector('.out-102')!.textContent = f10(ar_10)[1].join('_');
});

// Task 11
// Створіть функцію, яка виводить у .out-11 одновимірний масив ar_11. Якщо в масиві зустрічається число 1, то при виводі воно замінюється на 'X' — латинську X у верхньому регістрі. Розділювач — пробіл.

const ar_11 : number[] = [1, 0, 0, 0, 0];

// тут створюєте f11 стрілкову!!!
const f11=(): void => {
    document.querySelector(".out-11")!.textContent =  ar_11.map(i=> i === 1 ? "x" : i).join(' ')
}

document.querySelector('.b-11')!.addEventListener('click', f11);


// Task 12
// Створіть функцію, яка виводить у .out-12 одновимірний масив ar_12. Якщо в масиві зустрічається число 1, то при виводі воно замінюється на 'X' — латинську X у верхньому регістрі. Розділювач — пробіл. При натисканні кнопки значення 1 в масиві має зміщуватися вправо, а старе положення замінюватися на 0. Положення одиниці визначається лічильником count.

const ar_12 : number[] = [1, 0, 0, 0, 0];
let count : number = 0;

// тут створюєте f12 стрілкову!!!

// document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
// Створіть функцію яка в масиві ar_13 замінює числа 1 на 0, а 0 на 1. Виводить масив на сторінку, розділювач між елементами — пробіл, розділювач між рядками — перенос рядка.

const ar_13 : number[][] = [
    [1,0,1],
    [0,1,0],
    [1,0,1]
];

// тут створюєте f13 стрілкову!!!


// document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
// Створіть кортеж k14 типу string, string і заповніть його 'type', 'script'. Для перевірки виведіть у консоль.

// const k14


// Task 15
// Створіть кортеж k15 типу number, number і заповніть його числами 77, 99. Для перевірки виведіть у консоль.

// const k15

// Task 16
// Створено кортеж k16. Напишіть функцію, яка змінює в ньому числа — додає до кожного числа по 10 і виводить у .out-16 суму елементів кортежу.

const k16 : [number, number] = [77, 88];

// тут створюєте f16 стрілкову!!!


// document.querySelector('.b-16').addEventListener('click', f16);


// Task 17
// Створено кортеж k17. Напишіть функцію, яка виводить у .out-17 суму елементів кортежу. Зверніть увагу — кількість елементів кортежу при перевірці може змінюватися.

let k17 : [...number[]] = [2, 2, 3, 4];

// тут створюєте f17 стрілкову!!!

// document.querySelector('.b-17').addEventListener('click', f17);



// Task 18
// Створено кортеж k18 readonly типу boolean, що містить елементи true, false. Напишіть функцію f18, яка виводить у .out-18 значення кортежу через пробіл. Кортеж оголошено глобально по відношенню до функції.

let k18 : readonly [boolean, boolean] = [true, false];

// тут створюєте f18 стрілкову!!!


// document.querySelector('.b-18').addEventListener('click', f18);

// Task 19
// Створено кортеж k19 readonly типу boolean, що містить елементи true, false. Напишіть функцію f19, яка виводить у .out-19 довжину кортежу. Кортеж оголошено глобально по відношенню до функції.

let k19 : readonly [boolean, boolean] = [true, false];

// тут створюєте f19 стрілкову!!!


// document.querySelector('.b-19').addEventListener('click', f19);

// Task 20
// Створіть кортеж k20, що містить масив чисел [2, 3]. Виведіть у консоль.

// const k20
