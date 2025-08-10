
// who is the tallest

const heights = [12,16,30,45,5,67,89,23,45,67,3];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        
        if (num > max) {
            max = num;
            
        }
    }
    return max;
}
const maximum = getMax(heights);
console.log(maximum);

// hw min number

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if (num<min) {
            min=num;
        }
    }
    return min
}
const minimum = getMin(heights);
console.log('Minimum Heights :',minimum);