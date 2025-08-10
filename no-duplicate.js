

// Remove duplicate items from array

const birianikhor = ['abul','kabul','babul','abul','kabul','babul'];
const numbers =[1,3,5,6,8,4,5,3,24,46,24,8,5,3];

// function noDuplicate(array){
//     const unique =[];
//     for(const name of array){
//         if (unique.includes(name)=== false) {
//                 unique.push(name);
            
//         }
//     }
//     return unique;
// }
// const uniquearray = noDuplicate(birianikhor);
// const uniquearray2 = noDuplicate(numbers);
// console.log(uniquearray,uniquearray2);


function noDuplicate(array){
    const uniqueitem=[];
    for(const item of array){
        if (uniqueitem.includes(item) === false) {
            uniqueitem.push(item);
            
        }
    }
    return uniqueitem;
}
const uniqueresult= noDuplicate(numbers);
console.log(uniqueresult);