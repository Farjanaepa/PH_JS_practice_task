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
    
