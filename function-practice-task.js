// Task - 1: Take four parameters. Multiply the four numbers and then return the result

// function numbers(a,b,c,d){
//     const multiply = a*b*c*d;
//     console.log(multiply);
//     return multiply
// }
// numbers(5,6,2,3);

// Task - 2 : Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrOdd(num){
    if (num % 2 !== 0) {
        const multi = num * 2;
        return multi
    }else{
        const divide = num / 2;
        return divide
    }
}
const result=evenOrOdd(24);
console.log(result);

// Task - 3 : Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
   for(const num of numbers){
    sum = sum+num;
   }
   let average = sum / numbers.length;
   return average;
}

const numbers = [15,18,23,36];
const average = make_avg(numbers);
console.log(average);


// Task-4 : Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
    let count = 0;
    for(let bin of binary){
        if (bin === '0') {
            count++;
        }
    }
    return count
}

let binary = '0101010';
console.log(count_zero(binary));

// Task-5 : Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if (number % 2 === 0) {
        return "Even"
    }else{
        return "Odd"
    }
}
const results = odd_even(15);
console.log(results);