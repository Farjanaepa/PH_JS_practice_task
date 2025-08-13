// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function  
// named calculateElectronicsBudget that takes in the 
// number of laptop, tablets, and mobile and returns the 
// total money required.

function calculateElectronicsBudget(laptopQnt,tabletQnt,mobileQnt){

    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptoptotal= laptopQnt * laptop;
    const tablettotal = tabletQnt * tablet;
    const mobiletotal = mobileQnt * mobile;

    const totalmoney = laptoptotal + tablettotal + mobiletotal;

    return totalmoney;

}
const budget = calculateElectronicsBudget(1,1,1);
console.log(budget);