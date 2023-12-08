// - Знайти та вивести довжину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'


let arrayStr = ['hello world', 'lorem ipsum', 'javascript is cool'];

arrayStr.map((resultF) => console.log(resultF.length));

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let arrayStr2 = ['hello world', 'lorem ipsum', 'javascript is cool'];

arrayStr.map((item) => console.log(item.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arrayStr3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

arrayStr.map((item) => console.log(item.toLowerCase()));


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let arrr = 'Ревуть воли як ясла повні';

let arr = arrr.split(' ');
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrayNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let newNUmbers = arrayNumbers.map((item) => item + " ");

console.log(newNUmbers);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.slice().sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.slice().sort((a, b) => b - a);
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


// ==========================
// - є масив
//  -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];


let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sort1 = coursesAndDurationArray.filter((a) => a.monthDuration > 5);
console.log(sort1);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let sort2 = coursesAndDurationArray.map((pack, index) => ({ id: index + 1, ...pack }));
console.log(sort2);

// //  =========================
// //  описати колоду карт (від 6 до туза без джокерів)
const cards = [
        { cardSuit: 'spade', value: '6', color: 'black' },
        { cardSuit: 'spade', value: '7', color: 'black' },
        { cardSuit: 'spade', value: '8', color: 'black' },
        { cardSuit: 'spade', value: '9', color: 'black' },
        { cardSuit: 'spade', value: '10', color: 'black' },
        { cardSuit: 'spade', value: 'ace', color: 'black' },
        { cardSuit: 'spade', value: 'jack', color: 'black' },
        { cardSuit: 'spade', value: 'queen', color: 'black' },
        { cardSuit: 'spade', value: 'king', color: 'black' },
        { cardSuit: 'clubs', value: '6', color: 'black' },
        { cardSuit: 'clubs', value: '7', color: 'black' },
        { cardSuit: 'clubs', value: '8', color: 'black' },
        { cardSuit: 'clubs', value: '9', color: 'black' },
        { cardSuit: 'clubs', value: '10', color: 'black' },
        { cardSuit: 'clubs', value: 'ace', color: 'black' },
        { cardSuit: 'clubs', value: 'jack', color: 'black' },
        { cardSuit: 'clubs', value: 'queen', color: 'black' },
        { cardSuit: 'clubs', value: 'king', color: 'black' },
        { cardSuit: 'heart', value: '6', color: 'red' },
        { cardSuit: 'heart', value: '7', color: 'red' },
        { cardSuit: 'heart', value: '8', color: 'red' },
        { cardSuit: 'heart', value: '9', color: 'red' },
        { cardSuit: 'heart', value: '10', color: 'red' },
        { cardSuit: 'heart', value: 'ace', color: 'red' },
        { cardSuit: 'heart', value: 'jack', color: 'red' },
        { cardSuit: 'heart', value: 'queen', color: 'red' },
        { cardSuit: 'heart', value: 'king', color: 'red' },
        { cardSuit: 'diamonds', value: '6', color: 'red' },
        { cardSuit: 'diamonds', value: '7', color: 'red' },
        { cardSuit: 'diamonds', value: '8', color: 'red' },
        { cardSuit: 'diamonds', value: '9', color: 'red' },
        { cardSuit: 'diamonds', value: '10', color: 'red' },
        { cardSuit: 'diamonds', value: 'ace', color: 'red' },
        { cardSuit: 'diamonds', value: 'jack', color: 'red' },
        { cardSuit: 'diamonds', value: 'queen', color: 'red' },
        { cardSuit: 'diamonds', value: 'king', color: 'red' },
    ]
    //     //  - знайти піковий туз

let findCard = (cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
console.log(findCard);

//  - всі шістки
let findCard2 = (cards.filter((card) => card.value === '6'));
console.log(findCard2);

//  - всі червоні карти

let findCard3 = (cards.filter((card) => card.color === 'red'));
console.log(findCard3);

//  - всі буби

let findCard4 = (cards.filter((card) => card.cardSuit === 'diamond'));
console.log(findCard4);

//  - всі трефи від 9 та більше

let findCard5 = (cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));
console.log(findCard5);

// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let objCards = { //--accumulator
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
};

let result = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else {
        acc.diamonds.push(card);
    }
    return acc;
}, objCards);

console.log(result);


let objCards2 = { //--accumulator
    red: [],
    black: []
};

let result2 = cards.reduce((acc, card) => {
    if (card.color === 'red') {
        acc.red.push(card);
    } else {
        acc.black.push(card);
    }
    return acc;
}, objCards2);

console.log(result2);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [{
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'
        ]
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced'
        ]
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'
        ]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

let objMod = coursesArray.filter((item) => item.modules.includes("sass"));
console.log(objMod);

// --написати пошук всіх об'єктів, в який в modules є docker
let objMod2 = coursesArray.filter((item) => item.modules.includes("docker"));
console.log(objMod);
