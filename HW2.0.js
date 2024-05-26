// 1. Зробив двома способами

function friend(humb, free) {
    if (humb > 3) {
        if (free > 0) {
            console.log('Ми поїли')
        } else {
            console.log('Ми йдемо в інше кафе')
        }
    } else {
        console.log('Ми йдемо в інше кафе')
    }
}


friend(4, 1)


function friend1 (gumb, free) {
    if (gumb > 3 && free > 0) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }
}

friend1(1, 2)

//2

function lim (price) {
    if (price >= 1000 && price <= 1900) {
        console.log('true');
    } else {
        console.log('false');
    }
}

lim (900)

//3

const fun1 = () => {
    let price = 1000
    let res = (price >= 1000 && price <= 1900)
    console.log(res)
    if (res != true) {
        console.log('не в діапазоні')
    } else {
        console.log('в діапазоні')
    }
}


const fun2 = (price) => {
    if (!(price >= 1000 && price <= 1900)) {
        console.log('ціна не в діапазоні')
    } else {
        console.log('ціна в діапазоні')
    }
}

fun2(400)


//4
function seas (season) {
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
}

seas(1)


//5

const midl = (a, b, c) => {
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
}

midl (3, 5, 7)

//6
function days (day) {
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
}

days(1)


//7

const math = (a, b, c) => {
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
}

math(2, 4, '+')


//8

// let arr = [];
const arr = () => {
    let arr = [];
    for (let i = 1; i < 6; i++) {
        arr.push(i)
    }
    console.log(arr);
}

arr()

//9

const arr2 = () => {
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
}

arr2()

//10

const tot = (total) => {
    const myArr = [2, 3, 4, 5, 6];

    for (i = 0; i < myArr.length; i++) {
        total = total + myArr[i]
    }
    console.log(total)
}

tot(0)

//11

const arr3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

arr3 ([[1, 2], [3, 4], [5, 6]])

//12

// let product = 1;
// const arr = [[1, 2], [3, 4], [5, 6, 7]]
const func3 = (a, b) => {
    const arr = b
    let product = a
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j]
    }
}
console.log(product)
}

func3(1, [[1, 2], [3, 4], [5, 6, 7]])