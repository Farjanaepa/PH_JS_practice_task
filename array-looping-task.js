// 1. Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversed=[];

// for(const reverse of colors){
//     reversed.unshift(reverse);
// }
// console.log(reversed);

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
    reversed.unshift(colors[i]);
}
console.log(reversed);


// for(let i=colors.length-1; i>=0; i--){
//     console.log(colors[i]);
//     reversed.push(colors[i]);
// }
// console.log(reversed);


// 2.Write a JavaScript code to get the even numbers from an array using any looping technique.
const number = [12,13,3,5,8,14,19,21]
for(let i=0; i < number.length; i++){
        if (number[i] %2 !== 0) {
            console.log(number[i]);
        } else {
            continue;
        }
}

// 3. Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var numline='';
for(var num of numbers){
    numline += num;
    
}
console.log(numline);

// 4. Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const word = statement.split(' ').reverse().join(' ');
// const revers = word.reverse();
// const sentence = revers.join(' ');


console.log(word);

// 5.Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const input= [1, 2, 3];
const com_input=[];

for(const num of input){
    com_input.push(num);
}
com_input[0]=99;

console.log(input);
console.log(com_input);


// 6. Given an array of student objects, print each student’s name and marks.

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for(const student of students){
    console.log(student.name, 'score',student.marks);
}

// 7. Given a 2D array, update the value at second row first item to 99 and print the updated array.

const classes=[
  [1, 2],
  [3, 4],
  [5, 6]
]
classes[1][0]=99;
console.log(classes);