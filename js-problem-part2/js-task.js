// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 function lowestNum(numbers){
    let num = numbers[0];
    for(const number of numbers){
        if (number<num) {
            num= number;
            
        }
    }
    return num;

 }
 const lowest = lowestNum(heights2);
 console.log(lowest);

 const min = Math.min(...heights2);
 console.log(min);


//  Find the friend with the smallest name.


const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName (names) {
    let nam = names[0];
    for(const name of names){
        if (name.length < nam.length) {
            nam = name;
        }
    }
    return nam;

}
const smallname= smallestName(heights3);
console.log(smallname);

// Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(laptopqnt,tabletqnt,mobileqnt){
    const    laptop = 35000;
    const tablet = 15000 ;
    const mobile = 20000 ; 
    const budget = (laptop*laptopqnt) + (tablet * tabletqnt) + (mobile * mobileqnt);
    return budget;
}
const total=calculateElectronicsBudget(2,5,3);
console.log(total);