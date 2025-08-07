const numbers = [1,2,4,5,6];
const tournament_runs = [[],[],[]];

const exam_marks = [
    [98,95,76,54],
    [65,78,23,45],
    [45,89,90,65]
]

console.log(exam_marks[1]);
console.log(exam_marks[1][3]);
// or 
 const marks =exam_marks[1]
console.log(marks[3]);

// marks change
console.log(exam_marks[0]);
exam_marks [0][1] = 66;

console.log(exam_marks[0]);

// last remove
console.log(exam_marks[1]);
exam_marks [1].pop()
console.log(exam_marks[1]);
exam_marks [1].push(75)
console.log(exam_marks[1]);

// loop

for(const marks of exam_marks){
    console.log(marks);
}