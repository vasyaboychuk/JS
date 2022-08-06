// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let areaOfrectangle = (a, b) => a * b;
// console.log(areaOfrectangle(10, 20));
//


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaOfcircle=(a)=>{
//     return 3.14 * (a * a);
// }
// console.log(areaOfcircle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let heightOfcylinder=(h,r)=>{
//     return (2 * 3.14 * r * h)+(2*3.14*(r*r));
// }
// console.log(heightOfcylinder(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array1 = [2, 3, 2, 4, 456, 234, 654, -87, 67, 23];
// function arrayBuilder(array){
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//
//     }
// }
// console.log(arrayBuilder(array1));
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function paragraphMaker(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraphMaker('hello okten school');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listPrinter(text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// listPrinter('hello okten');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listPrinter(text,count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// listPrinter('hello okten',10);
//


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array1 = [234, 244, true, false, 'hello', 'okten'];
//
// function arrayBuilder(array) {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//
//     }
//
//     document.write(`</ul>`)
// }
// arrayBuilder(array1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array1=[
//     {id:2345,name:'vasya',age:23},
//     {id:2435264,name:'kolya',age:26},
//     {id:5432,name:'petya',age:23},
//     {id:637,name:'oleg',age:22},
//     {id:63475,name:'yarik',age:24},
//     {id:623474,name:'maria',age:27},
//     {id:234984,name:'rostyk',age:23},
//     {id:678,name:'yurii',age:56},
//     {id:7896,name:'nastya',age:23},
//     {id:0096,name:'illia',age:22},
//
// ]
//
// function arrayPrinter(array) {
//    ;
//     for (let object of array) {
//         document.write(`<div>`);
//         for (const objectKey in object) {
//             document.write(` ${objectKey} - ${object[objectKey]}`);
//
//         }
//         document.write(`</div>`);
//     }
// }
//
// arrayPrinter(array1);
//



// - створити функцію яка повертає найменьше число з масиву
// let array1 = [12, 345, 21, 1, 567, 43, 23, 43, 765, 34];
//
// function minNumber(array) {
//     let min = array[0];
//     for (let i = 0; i < array1.length; i++) {
//         if (array[0] > array[i]) {
//             min=array[i]
//         }
//
//     }
//     return min;
//     }
//
//
//
// console.log(minNumber(array1));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array1 = [12, 345, 21, 1, 567, 43, 23, 43, 765, 34];
//
// function sumOfItems(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     return result
// }
//
// console.log(sumOfItems(array1));
//
//
