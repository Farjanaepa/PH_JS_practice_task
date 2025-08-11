// temperature check
function temperature(celcious){
    const faren = celcious * 9/5 +32;
    return faren;

}

// Task -1 : farenheight to celcious
function temperature2(farenheight){
    const celcious = (farenheight - 32) * 5/9;
    return celcious;
}
const checkTemp=temperature(15);
const checkTemp2=temperature2(15);
console.log("Celcious to Farenheight : " ,checkTemp);
console.log(" Farenheight to Celcious  : " ,checkTemp2);