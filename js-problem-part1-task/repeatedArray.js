// repeated array
const numbers = [5,6,11,12,98, 5]
function repeatedArray(number){
    let count = 0;
    for(const num of number){
        if (num === 5) {
            count ++;
        }
    }
    return count
}
const result = repeatedArray(numbers);
console.log(result);