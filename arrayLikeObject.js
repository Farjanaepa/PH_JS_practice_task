// Array like object:

//  function add(num1,num2){
//     console.log(num1,num2);
//     console.log(arguments);
//     console.log(arguments[4]);
// }
// add(12,13,34,56,35,78);

// Find the matching product by searching product
let numbers = [13,23,45];
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// short form For of loop
for(const number of numbers){
    console.log(number);
}

const products = [
    {id:1, name:'xiaomi phone', price : 19000},
    {id:2, name:'lenovo laptop', price : 56000},
    {id:3, name:'Samsung a25 Phone', price : 99000},
    {id:4, name:'Apple Iphone', price : 190000},
    {id:5, name:'z-book laptop', price : 80000},
    {id:6, name:'Huwaei p30 phone', price : 56000},
    {id:7, name:'Sony Bravia tv', price : 67000},
    {id:8, name:'One plus Phone', price : 100000},
    {id:9, name:'Oppo phone', price : 20000},
]

function matchedProducts(products,search){

    let matched = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
            
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);
