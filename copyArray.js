// copy array elements to another array

// primitive - different diffrent change
// non primitive - if one change then all change also same time in array

let price = 25;
let com_price = price;

// price = 10;
com_price = 15;

console.log(price);
console.log(com_price);   /* primitive */

const product = [25,45,47,87];
const com_product = product;

com_product[0] = 15;
product[1] = 25;

console.log(product);
console.log(com_product); /* non primitive */

// for loop

const products = [15,35,25];
const com_products = [];
for(const pro of products ){
    com_products.push(pro);
}

com_products[0]=65;
products[1] = 55;

console.log(products);
console.log(com_products);

// Shallow copy vs deep copy

const number=[1,2,3,4];
const new_number=Array.from(number);
// Or const new_number = [].concat(numbers)
// or const new_number = [...number]

new_number.push(8);

console.log(number);
console.log(new_number);