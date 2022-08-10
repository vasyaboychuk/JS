// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let string = 'hello world';
// console.log(string.length);
// let string2 = 'lorem ipsum';
// console.log(string2.length);
// let string3 = 'javascript is cool';
// console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let string = 'hello world';
// console.log(string.toUpperCase());
// let string2 = 'lorem ipsum';
// console.log(string2.toUpperCase());
// let string3 = 'javascript is cool';
// console.log(string3.toUpperCase());
//

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string = 'HELLO WORLD';
// let toLowerCase = string.toLowerCase();
// console.log(toLowerCase);
//
// let string2 = 'LOREM IPSUM';
// let toLowerCase2 = string2.toLowerCase();
// console.log(toLowerCase2);
//
// let string3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = string3.toLowerCase();
// console.log(toLowerCase3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let clean = str.trim();
// console.log(clean);
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let array = str.split(' ');
// console.log(array);
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let map = array.map(element => (element + ''));
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         console.log(array.sort((num1, num2) => num1 - num2));
//     }
//     if (direction === 'descending') {
//         console.log(array.sort((num1, num2) => num2 - num1));
//     }
//     };
//
// sortNums(nums, 'ascending');


//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//1.
// let monthDuration = coursesAndDurationArray.sort((value1, value2) => {
//     if (value1.monthDuration < value2.monthDuration) {
//         return 1;
//     }
//     if (value1.monthDuration > value2.monthDuration) {
//         return -1
//     }
//     if (value1.monthDuration === value2.monthDuration) {
//         return 0;
//     }
// });
// console.log(monthDuration);
// console.log(coursesAndDurationArray)
//2.
// console.log(coursesAndDurationArray.sort((value1, value2) => value1.monthDuration - value2.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// 1.
// let longCourses = coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5) {
//         return coursesAndDurationArray;
//     }
// });
// console.log(longCourses);
//2.
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

//
// описати колоду карт
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];
// - знайти піковий туз
// console.log(cards.find(card => card.cardSuit === 'spades' && card.value === 'Ace'));
//
// - всі шістки
// console.log(cards.filter(card => card.value === 6));
//
// - всі червоні карти
// console.log(cards.filter(card => card.color === 'red'));
//
// - всі буби
// console.log(cards.filter(card => card.cardSuit === 'diamonds'));
//
// - всі трефи від 9 та більше

//
// 1.
// let newClubs=cards.map((cards,index)=>({...cards, id: index + 1}))
// console.log(newClubs.filter(newClubs => newClubs.cardSuit === 'clubs' && newClubs.id >= 9));
//2.
// console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value >8+'' ));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce = cards.reduce( (accumulator, card) =>{
//     if (card.cardSuit === 'spades') {
//         accumulator.spades.push(card);
//     }else if (card.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(card);
//     }else if (card.cardSuit === 'hearts') {
//         accumulator.hearts.push(card);
//     }else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(cards);
//     }
//     return accumulator;
//
// },{spades:[],diamonds:[],hearts:[],clubs:[]});
// console.log(reduce);