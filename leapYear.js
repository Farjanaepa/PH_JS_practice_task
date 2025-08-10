// simple logic
//year will be a leap year if year is divided by 4

function isLeapyear(year){
    if (year % 4 === 0) {
        return "Leap year"
    } else{
        return "Year is not Leap year"
    }
}
const leap= isLeapyear(2025);
console.log(leap);

// those year  that is not divisible by 100 and if the year divisible by 4 then it will be leap year
// 2. if the year is divisible by 400 then it is a leap year
function isLeapyear2(year){
    if (year % 4 === 0 && year % 100 !== 0) {
        return "|| Leap year ||"
    } else if(year % 100 === 0 && year % 400 === 0){
         return " || This year is Leap year ||"
    }
    
    else {
        return "||Year is not Leap year||"
    }
}
const leapyear= isLeapyear2(2025);

const leapyear2= isLeapyear2(2020);
const leapyear3= isLeapyear2(2022);
const leapyear4= isLeapyear2(2023);
const leapyear5= isLeapyear2(2024);
console.log(leapyear,leapyear2,leapyear3,leapyear4,leapyear5);