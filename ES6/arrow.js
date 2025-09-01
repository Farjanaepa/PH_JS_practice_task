// arrow function
// 20% discount 
// 20/100*100 
const getTax = (amount,taxrate) => amount*taxrate/100;
console.log(getTax(1200,20));

const firstElement = num1 => num1[0];
console.log(firstElement([29,26,34]))