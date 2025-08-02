// Free drinks
let burger = 600;
if (burger > 500) {
    console.log("Free coke");
} else {
    console.log('coke : 30 tk');
}

// BMI calculation

let w = 35;
let h = 1.52;
let bmi = w / ( h * h );

if ( bmi < 30 ) {
    if ( bmi < 18.5 ){

        console.log('You are Underweight');

    }else if ( bmi >= 18.5 && bmi <= 24.9) {

        console.log('you are normal');

    } else if( bmi >= 25 && bmi <= 29.9 ){
        
        console.log('you are overweight');
    }

} else {

    console.log('you are obese');
}


// grade calculator

let number = 80;

if (number >= 90) {
    console.log('Grade - A');

}else if (number >=80){

        console.log("grade - B");
}else if (number >=70){

        console.log("grade - C");
}else if (number >=60){

        console.log("grade - D");
}else{

        console.log("You are fail");
    }


    // Nested friend

    let mymark = 80;
    let friendmark = 70;

    if (mymark >= 80) {
        if (friendmark >= 80) {
            console.log("Go for lunch");
        } else if (friendmark >= 60) {
            console.log("Better luck next time");
            
        }else if(friendmark < 60 && friendmark >= 40){
            console.log("Messsage unseen");

        } else if (friendmark < 40){
            console.log("Block him");
            
        }
    } else {
        console.log("go to home and sleep and act sad");
    }

    // ternary numbers

    let num1 = 54;
    let num2 = 12;

    let result ;

    if (num1 > num2 ) {
        result = num1 * 2;
    } else {
       result = num1 + num2; 
    }

    console.log("Result :" , result);

    // ternary
    let nub1 = 54;
    let nub2 = 12;

    let results = (nub1 > nub2) ? nub1*2 : nub1 + nub2;
    console.log("Results :" ,results); 
    
// bus ticket calculation
let busfare = 500;
let age = 25;
let isStudent = true;

if (age<10) {
    busfare = 0;
} else if(age >= 60){
    busfare = busfare * 85 /100;
}
else if (isStudent) {
    busfare = busfare * 50 /100;
}

console.log("Ticket :", busfare);


// ternary

let busfaree = 500;
let agee = 65;
let isStudents = true;

let busfar = (agee < 10) ? 0 
: (age >= 60) ?busfaree * 85 /100
    : (isStudent === true) ? busfaree * 50 /100 
    :busfaree;

    console.log(" fare :" , busfar);


    
// Loop task start 
// for loop while loop

// while loop

let i = 1;
while (i <=60 ) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}

// subtask 1 odd number

let j = 61;
while (j <= 100 ) {
    if (j % 2 !== 0 ) {
       console.log("Odd number :" + j); 
    }
    
    j++;
}

// subtask 2 even number
let e = 78;
while (e <= 98 ) {
    if (e % 2 == 0) {
        console.log("even number :" + e);
      
    }
      e++;
}

// sum of all odd numbers

let odd=81;
let sum =0;
while (odd<=131) {
    if (odd % 2 !== 0) {
        sum += odd;  
    }
        odd++;
}
   console.log("sum of odd :" , sum);

//    sum of even number

let even=206;
let evensum=0;
while (even <= 311) {
    if (even % 2 == 0) {
        console.log(even);
        sum += even;
        
    }
    even++;
    
}
console.log("Sum of even Number :" , sum);


// multiplication table

let m=1;
while (m <= 10) {
    console.log("5 X " + m + "=" + (5*m));
    m++;
}

// count down

let count = 25;
while (count >= 15) {
    console.log(count);
    count--;
}


// for loop

// commitment


for(let invest=1; invest <= 60;invest++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}

// odd
for(let odd=61; odd<=100; odd ++){
     if (odd % 2 !== 0) {
   console.log("odd numbers :" + odd );
  }
    
}

// even

for (let even = 78; even <= 98; even ++){
    if (even % 2 == 0) {
       console.log("even number :" + even);  
    }
   
}

// sum odd
let sumodd = 0;
for(let odd=61; odd<=100; odd ++){
     if (odd % 2 !== 0) {
        sumodd += odd;
  }
    
}
 console.log("sum of odd numbers :" + sumodd );

//  sum even
let sumeven = 0;
for (let even = 78; even <= 98; even ++){
    if (even % 2 == 0) {
      sumeven += even;
    }
   
}
 console.log(" sum of even number :" + sum);
 
//  multiplication table

for(let multiplication = 1; multiplication <= 10; multiplication++){
    console.log("5 x " + multiplication + "=" + (5* multiplication));
}

// count down
for(let count=81; count >= 65; count--){
    console.log(count);
}

// continue in even


for (let even = 1; even <= 40; even ++){
    if (even % 2 !== 0) {
      continue;
    }
     console.log("even number :" + even);  
   
}

// odd devisible by 5

for(let odd = 55; odd <= 85; odd++){
    if(odd % 5 == 0){
        continue;
    }
    console.log(odd);
}

// break

for(let i=1; i<200; i++){
    if (i == 100) {
        break;
    }
    console.log(i);
}

// sum break
let num = 1;
let summ = 0;

while (num <= 100) {
    summ += num;
    if(summ >= 100){
        break;
    }
    num++;
}
console.log(summ);
console.log(num);


// 1st square number

for(let i = 1; i<=100; i++){
    if (i === 4 || i=== 9 || i === 16 || i === 25) {
        console.log("first square found :" + i);
        break;
        
    }
    console.log(i);
}


// array task
// no1

let fruits = ["banana", "apple", "orange", "amla","lichi"];
console.log("3rd elements :" + fruits[3]);
fruits[2] = "jambura";
console.log("final array :" + fruits);

// remove elements

let spot =["cox-bazar","sundarban","kuakata"];
spot.push("bandarban");
spot.push("saintmartin","shitakundo");
spot.pop();
console.log("Final spot :" + spot);

// array membership with includes
let books = ["html","css","javascript"];
if (books.includes('javascript')) {
    console.log("javasript")
} else {
    console.log("not in the book list");
    
}

// 4 checking if its an array

let classes =['one','two' ,'three'];
let sub = "['java','css']";
let name = 'safoan';

console.log(Array.isArray(classes));
console.log(Array.isArray(sub));
console.log(Array.isArray(name));


// 5 combining Array

let names = ['rafia','tuhin','shahin'];
let morenames = ['raju','shakil','fahmida'];

console.log(names.concat(morenames));