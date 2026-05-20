"use strict";
// Как создать массив
const arr_01 = [5, 6];
arr_01.push(44);
arr_01[3] = 66;
arr_01[1] = 77;
console.log(arr_01);
arr_01.length = 0;
console.log(arr_01);
// Создание readonly массива
const arr_02 = [22, 33, 44, 55];
// arr_02.push(88);
// arr_02[0] = 11;
console.log(arr_02);
// Автоопределение типа
const arr_03 = ['hello', 'ts'];
arr_03.push('typescript');
// arr_03.push(4);
console.log(arr_03);
// декомпозиция массива в TS
const arr_04 = [222, 333, 444, 555];
const [a, b, ...c] = arr_04;
console.log(a, b, c);
// Двумерный массив
// const arr_05 : number[][] = [[22, 33, 44], [55, 66, 77]];
const arr_05 = [];
arr_05[0] = [11, 22];
arr_05.push([11, 22]);
console.log(arr_05);
console.log(arr_05[0][1]);
// Смешанные по типу массивы
const arr_06 = [2, 3, false];
console.log(arr_06);
const arr_07 = [33, 44, 'hello'];
console.log(arr_07);
// Кортежи
const cort_01 = ['Alex', 55];
console.log(cort_01);
cort_01.push(77);
cort_01.push('Oleg');
// cort_01.push(false);
console.log(cort_01);
// Необязательный элемент в кортеже
const cort_02 = ['Alex', 55];
console.log(cort_02);
console.log(cort_02[0]);
cort_02[0] = 'Sergey';
console.log(cort_02);
// Если количество єлементов в кортеже не определено
const cort_03 = [2222, 'Alex', 'Hi'];
console.log(cort_03);
//# sourceMappingURL=script.js.map