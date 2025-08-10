//  average of odd numbers in an array

function oddAverage (number){
    const odd = [];
    for(const num of number){
        if (num % 2 === 1) {
            odd.push(num);
        }
    }
//    console.log(odd);
let sum = 0;
for(const num of odd){
    sum = sum+num;
   
}
 const lengt= odd.length;
 const avrg = sum /lengt;
 return avrg;
 

}
const numbers =[12,16,2,3,6,18,25,7];
const avg = oddAverage(numbers);
console.log('average of odd number :', avg);