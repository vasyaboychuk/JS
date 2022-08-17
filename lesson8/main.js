// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'vasya', 'boichuk', 'fhjfjf@gmail.com', 23455928);
let user2 = new User(2, 'kolya', 'qwerrt', 'ggggggg@gmail.com', 200222020);
let user3 = new User(3, 'petya', 'fgfdawdafs', 'fqfdsff@gmai.com', 2039203);
let user4 = new User(4, 'ivan', 'ffff', 'fffff@gmail.com', 1323131);
let user5 = new User(5, 'yudzhin', 'frrr', 'rrrr@gmail.com', 22222);
let user6 = new User(6, 'zenya', 'aaaaaa', 'aaaaa@gmail.com', 333333)
let user7 = new User(7, 'dima', 'ddddd', 'ddddd@gmail.com', 333333);
let user8 = new User(8, 'illia', 'aaaaa', 'faaaaa@gmail.com', 222222);
let user9 = new User(9, 'andrew', 'aaaddsds', 'ggggg@gmail.com', 888888);
let user10 = new User(10, 'vadim', 'hhhh', 'hhhhh@gmail.com', 7676767);
let arrayOfUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(arrayOfUsers)


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrayOfUsers.filter((user) => user.id % 2 === 0);
console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrayOfUsers.sort((user1,user2) => user2.id - user1.id);
console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}

let client1 = new Client(1, 'vasya', 'boichuk', 'email1@gmail.com', 111111, ['apple', 'juice', 'pear']);
let client2 = new Client(2, 'oleg', 'ooooo', 'email2@gmail.com', 22222, ['potatoe', 'juice']);
let client3 = new Client(3, 'ivan', 'iiiii', 'email3@gmail.com', 33333, ['carrot', 'milk', 'butter']);
let client4 = new Client(4, 'dima', 'ddddd', 'email4@gmail.com', 44444, ['bred', 'tomato']);
let client5 = new Client(5, 'nastya', 'nnnnn', 'email5@gmail.com', 55555, ['pepper', 'cola', 'candy']);
let client6 = new Client(6, 'anna', 'aaaaa', 'email6@gmail.com', 66666, ['toy']);
let client7 = new Client(7, 'rostyk', 'rrrrr', 'email7@gmail.com', 77777, ['meat', 'pork', 'lamb','beaf']);
let client8 = new Client(8, 'yurii', 'yyyyy', 'email8@gmail.com', 88888, ['broccoli', 'bear', 'cucumber']);
let client9 = new Client(9, 'roman', 'rrrrr', 'email9@gmail.com', 99999, ['bean', 'peas', 'water', 'juice']);
let client10 = new Client(10, 'halyna', 'hhhh', 'email10@gmail.com', 1010101, ['candy', 'chocolate', 'fuagra']);

let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort2 = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sort2);
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}на годину`);
    };
    this.info = function () {
        console.log(`
            model of car = ${model},
            producer =${producer},
            made in =${year},
            max speed = ${maxSpeed},
            volume = ${volume},
        `)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let bmw = new Car('bmw', 'germany', 2022, 300, 3, 0);
console.log(bmw);
bmw.changeYear(2023);
console.log(bmw);
bmw.addDriver({name:'vasya', age: 24});
console.log(bmw);
bmw.increaseMaxSpeed(350);
console.log(bmw);


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2{
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`
        model=${this.model},
        producer=${this.producer},
        year=${this.year},
        max speed=${this.maxSpeed},
        volume=${this.volume},
        `)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let porshe = new Car2('cayenne', 'germany', 2022, 320, 3, 4);
porshe.info();
porshe.drive()
porshe.increaseMaxSpeed(390);
console.log(porshe);
porshe.changeYear(2021);
console.log(porshe);

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
function Princess(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

// Створити масив з 10 попелюшок.
let arrOfGirls = [
        girl1 = new Princess('Nastya', 21, 38),
        girl2 = new Princess('Maria', 23, 39,
        girl3 = new Princess('Ira', 24, 37, 5),
        girl4 = new Princess('Yulia', 20, 38, 5),
        girl5 = new Princess('Halyna', 22,32),
        girl6 = new Princess('Anna', 21, 37),
        girl7 = new Princess('Lera', 28, 36),
        girl8 = new Princess('Olena', 18, 40),
        girl9 = new Princess('Khrystyna', 22, 34),
        girl10 = new Princess('Svitlana', 21, 42),)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;
}
let boy=new Prince('vasyl',24,38)
console.log(boy);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of arrOfGirls) {
    if (girl.footSize === boy.shoe) {
        console.log(`${boy.name} find his princes ${girl.name}`)
    }

}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findGirl=arrOfGirls.find((value) => value.footSize === boy.shoe);
console.log(findGirl);

