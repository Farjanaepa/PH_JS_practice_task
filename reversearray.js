const numbers =[1,2,3,4,5,6,7];

const reversed=[];
// method 1 for loop

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
//     reversed.unshift(numbers[i]);
// }

// method 2

// for(let j=numbers.length-1; j>=0; j--){
//     reversed.push(numbers[j]);
// }

// method 3 for of

// for(const num of numbers){
//     reversed.unshift(num);
// }

// method 4
numbers.reverse();
console.log(numbers);
// console.log(reversed);