const numbers = [12,3,5,7];
const double = numbers.map(x => x*2);
const fiveTimes = numbers.map(num => num * 5 );
console.log(fiveTimes);


const friends =['zaved','pavel','novel'];

const nameLength = friends.map(name=>name.length);
const firstLetter = friends.map(name=>name[0]);
console.log(firstLetter);

const result =numbers.map((num,index) => {
    console.log(num*index)
    return index
})
console.log(result);