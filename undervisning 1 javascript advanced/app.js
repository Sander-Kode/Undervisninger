//CALLBACK FUNKSJONER




/*const logger = result => console.log(result);
const loggerV2 = result => console.log(`result: ${result}`);


// eksempler på matematiske funksjoner

const add = (a, b, callbackFn) => callbackFn(a+b);

add(1, 1, logger)
add(2, 2, loggerV2)*/



// forEach
const fruits = ['apple', 'strawberry', 'pear'];

fruits.forEach((fruit) => console.log(fruit));


//map

const names = ['Alice', 'Bob', 'Charlie', 'Dana'];

const nicknames = names.map( (name) => `The amazing ${name}`);
console.log(nicknames)


//some

const dungeonParty = ['Warrior', 'Mage', 'Rogue', 'Priest'];

const hasHealer = dungeonParty.some( (name) => name === 'Priest');

console.log(hasHealer)


//Game Shop

const gold = 5000;
const shop = [
    {
        name: 'Plot Armor',
        price: '9999'
    },
    {
        name: 'Dagger of dicy discussions',
        price: '4996'
    },
    {
        name: 'Crystal Bow',
        price: '8000'
    },
    {
        name: 'Apple',
        price: '8000'
    }

];

//Reduce

const totalPrice = shop.reduce((acc, currValue) => acc + currValue.price, 0);

console.log(totalPrice);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalNumbers = numbers.reduce((acc, currValue) => acc + currValue)

console.log(totalNumbers)


//Filter

const affordableItems = shop.filter(item => gold >= item.price);

console.log(affordableItems)


//sort

const sortedShopHigh = shop.sort((a,b) => b.price - a.price);
console.log(sortedShopHigh)


