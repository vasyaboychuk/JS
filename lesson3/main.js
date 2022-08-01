// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x = +prompt('your number?');
if (x!==0){
    console.log('Вірно');
}else{
    console.log('невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;
if(time>0&&time<=15){
    console.log('Перша частина');
}else if(time>15&&time<=30){
    console.log('Друга частина');
}else if(time>30&&time<=45){
    console.log('Третя частина');
}else if (time>45&&time<=59){
    console.log('Четверта частина');
}else{
    console.log('error');
}






// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 25;
if (day>=1&&day<10){
    console.log('Перша декада');
}else if (day>=10&&day<20){
    console.log('Друга декада');
}else if (day>=10&&day<30){
    console.log('Третя декада');
}else{
    console.log('error');
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let day2 = +prompt('text your day of week');
switch (day2){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturda');
        break;
    case 7:
        console.log('sunday');
        break;

}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('enter first number');
let number2 = +prompt('enter second number');
if (number1>number2){
    console.log(number1);
}else if (number2>number1){
    console.log(number2);
}else if (number1===number2){
    console.log(number1);

}else{
    console.log('error');
}




//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x3 = 'hello'||'default';
console.log(x3);


