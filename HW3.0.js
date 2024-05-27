//1

const str = () => {
    return 'Привіт, світ!'
}

console.log(str())

//2

const timet = () => {
    setTimeout(() => {
        console.log('Привіт, світ!')
    }, 5000)
}

timet()

// 3

const agent = (a) => {
    a.age = 40
    console.log(a)
    }

agent({
    name: 'James',
    surname: 'Bond',
    favoriteNumber: '007'
})


//4

const functMass = (mass) => {
    for (let i = 0; i < mass.length; i++) {
        if (typeof mass[i] === 'number') {
            mass[i] = mass[i].toString()
        }
    }
}

functMass([5, false, 'Hello'])


//5

function myFn () {
    console.log('hello from myFn')
}

setTimeout(() => {
    myFn()
}, 2000)

myFn()

//6

let mass = [{
    carBrand: 'BMW', price: 50000, isAvailableForSale: true
}, {
    carBrand: 'Audi', price: 20000, isAvailableForSale: true
}, {
    carBrand: 'Mercedes', price: 70000, isAvailableForSale: true
}]

const getCar = (a) => {
    a.push(a[1])
    console.log(mass)
}

getCar(mass)

//7

function objFn(a) {
    for (let i = 1; i < Object.keys(a).length; i++)
    {
        if (Object.keys(a)[i] == 'key3' || Object.keys(a)[i] == 'key10') {
            let j = Object.keys(a)[i]
            console.log(a[j])
        }
    }
}

objFn(myObject)

//8
function findProductById (id, prod) {
    for (let i = 0; i < prod.length; i++ ) {
        if (prod[i].productId == id) {
            console.log(`postId: ${prod[i].productId}, name: ${prod[i].name}`)
            return prod[i].name
        }
    }
    console.log('undefined')
}
findProductById(6134, products)