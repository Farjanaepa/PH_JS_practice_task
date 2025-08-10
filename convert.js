// convert inch to feet
// 12 inch 1 feet

function inchToFeet(number){
    const feet = number / 12 ;
    return feet;
}
const result = inchToFeet(75);
console.log(result);
function inchToFeet2(num){
    const feet = parseInt(num / 12); 
    const inch = num % 12;
    const result = feet + ' ft ' + inch + ' inch';
    return result
}
const call = inchToFeet2(75); 
console.log(call);

// miles to km 1 miles = 1.60934km

function milesToKm(mile){
    const kilo = mile * 1.60934 ;
    return kilo;
}
const results = milesToKm(20);
console.log(results + ' Km');

function milesToKm2(mile){
    const km = mile * 1.60934;
    const kilo = parseInt(mile * 1.60934);
    const miles = ((km - kilo)*1000).toFixed(0) ;
    const result = kilo + ' km ' + miles + ' meter';
    return result
}
const miles = milesToKm2(20);
console.log(miles);

// kilomiter to miles 

function kmToMiles(km){
    const miles = km * 0.621371;
    return miles
}
const mile=kmToMiles(15);
console.log(mile + ' miles');


// function kmToMiles2(km){