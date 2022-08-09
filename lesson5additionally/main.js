// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (number1, number2, number3) => {
//     if (number1 < number2 && number1 < number3) {
//         console.log(number1);
//     }else if (number2<number1&&number2<number3) {
//         console.log(number2);
//     }else if (number3 < number1 && number3 < number2) {
//         console.log(number3);
//     } else {
//         console.log('wrong');
//     }
// }
// minNumber(2, 5, 43);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (number1, number2, number3) => {
//     if (number1 > number2 && number1 > number3) {
//         document.write(`${number1}`);
//     }else if (number2 > number1 && number2 >number3) {
//         document.write(`${number2}`);
//     }else if (number3 > number1 && number3 > number2) {
//         document.write(`${number3}`);
//     } else {
//         document.write(`${'something wrong'}`);
//     }
// };
// maxNumber(34, 762, 76112);
// - створити функцію яка повертає найбільше число з масиву
// let array = [231, 433, 53, 3, 12, 553, 34, 32, 76, 5, 65];
// let maxNumber = (array) => {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//
//     }
//     return max;
// };
// console.log(maxNumber(array));
// - створити функцію яка повертає найменьше число з масиву
// let array = [231, 433, 53, 3, 12, 553, 34, 32, 76, 5, 65];
// let minNumber = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min=array[i]
//         }
//
//     }
//     return min;
// };
// console.log(minNumber(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [231, 433, 53, 3, 12, 553, 34, 32, 76, 5, 65];
// let sumNumbers = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// };
// console.log(sumNumbers(array));
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// let numb = (number) => {
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//     }
//
// };
// numb(29);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let twoNumber = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <=b; i++) {
//             console.log(i);
//         }
//     }else if (a > b) {
//         for (let i =a; i >= b; i--) {
//             console.log(i);
//         }
//     }else{
//         console.log('wrong');
//     }
// };
// twoNumber(13, 7);
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let array =[3,2,1,3];
// let change = (array, i) => {
//     let arr=array[i]
//         array[i] = array[i + 1];
//         array[i + 1] = arr;
//        return array
//
//
//     }
//
//
// console.log(change(array, 1));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [1, 0, 6, 0, 3];
// let array2 = [];
// let count = 0;
// let index = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         count++;
//     } else {
//         array2[index++] = array[i];
//     }
// }
//
// let zeroCount = array2.length;
// for (let i = 0; i < count; i++) {
//     array2[zeroCount++] = 0;
// }
// console.log(array2);