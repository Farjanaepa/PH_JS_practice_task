// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137,5,500];

// function lowestNumber(numbers){

//     let num = numbers[0];
//     for(const number of numbers){
//         if (number < num) {
//             num = number;
//         }
//     }
//     return num;

// }
// const lowest=lowestNumber(heights2);
// console.log(lowest);

function minimumNum(numbers){
    let digit = numbers[0];
    for(const num of numbers){
        if (num < digit) {
            digit = num;
        }
    }
    return digit


}
const minimum = minimumNum(heights2);
console.log(minimum);

// heighest number

function highestNum(numbers){
    let number = numbers[0];
    for(const num of numbers){
        if (num > number) {
            number = num;
            
        }
    }
    return number
}
const highest = highestNum(heights2);
console.log(highest);