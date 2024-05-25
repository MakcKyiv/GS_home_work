// 1. Зробив двома способами
if (humb > 3) {
    if (free > 0) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }
} else {
    console.log('Ми йдемо в інше кафе')
}

if (gumb > 3 && free > 0) {
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

//2
let price = 999;
if (price >= 1000 && price <= 1900) {
    console.log('true');
} else {
    console.log('false');
}

//3
let price = 1000
let res = (price >= 1000 && price <= 1900)
console.log(res)
if (res != true) {
    console.log('не в діапазоні')
} else {
    console.log('в діапазоні')
}

let res = (price >= 1000 && price <= 1900)
console.log(res)
if (res == true) {
    console.log('в діапазоні')
} else {
    console.log('не в діапазоні')
}


if (!(price >= 1000 && price <= 1900)) {
    console.log('ціна не в діапазоні')
} else {
    console.log('ціна в діапазоні')
}


//4

let season = 7

if (season === 1) {
    console.log('season is winter')
} else if (season === 2) {
    console.log('season is spring')
} else if (season === 3) {
    console.log('season is summer')
} else if (season === 4) {
    console.log('season is autumn')
} else {
    console.log('it is not season')
}

//5

if (a > b && a > c) {
    if (b > c) {
        console.log('b is middle')
    } else {
        console.log('c is middle')
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log('a is middle')
    } else {
        console.log('c is middle')
    }
} else {
    if (a > b) {
        console.log('a is middle')
    } else {
        console.log('b is middle')
    }
}

//6

let day = 4;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Not a day');
        break;
}

//7
let a = 5;
let b = 7;
let c = '+'

switch (c) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('error');
        break
}


//8

let arr = [];

for (let i = 1; i < 6; i++) {
    arr.push(i)
}
console.log(arr);


//9

let myArray = [];

for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        myArray.push(i)
    }
}
for (let j = 1; j < 10; j++) {
    if (j % 2 != 0) {
        myArray.push(j)
    }
}

console.log(myArray)

//9

let total = 0;
const myArr = [2, 3, 4, 5, 6];

for (i = 0; i < myArr.length; i++) {
    total = total + myArr[i]
}

console.log(total)

//11
const arr = [ [1, 2], [3, 4], [5, 6] ];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}


//12

let product = 1;
const arr = [[1, 2], [3, 4], [5, 6, 7]]

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j]
    }
}
console.log(product)