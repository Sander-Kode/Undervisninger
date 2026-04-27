const logger = (result) => console.log(result);
const loggerButCooler = (result) => console.log(`Logging: ${result}`);

const fruits = ['apple', 'strawberry', 'pear'];

fruits.forEach(fruit => console.log(fruit));

//map
const names = ['Alice', 'Bob', 'Charlie', 'Dana'];
const nicknames = names.map(name => `The Amazing ${name}`);
console.log(nicknames)

//some
const dungeonParty = ['healer', 'tank', 'dps', 'dps', 'dps'];
const hasHealer = dungeonParty.some(role => role === 'healer');
console.log(hasHealer)

const add = (a,b, callbackFn) => {
    callbackFn(a + b);

}

add (1, 1, logger);
add (2, 2, loggerButCooler);

/*SHOP EXAMPLE */

const gold = 999;


// sort, reduce, filter
const shop = [
    {
        name:"Plot Armor",
        price: 1000000
    },
    {
        name:"Platemail",
        price: 4
    },
    {
        name:"Databrus",
        price: 200
    },
]

//reduce

const totalShopPrice = shop.reduce((acc, currVal) => acc + currVal.price, 0)
console.log(totalShopPrice);

//filter

const affordableItems = shop.filter(item => item.price <= gold);
console.log(affordableItems);

//sort

const sortedShopAsc = shop.sort((a,b) => a.price - b.price)
console.log(sortedShopAsc);