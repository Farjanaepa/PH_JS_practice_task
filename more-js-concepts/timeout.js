

console.log(1);
console.log(2);

const timeOutId = setTimeout(() => {
    console.log(3);
}, 5000);
console.log('timeoutId', timeOutId);

console.log(4);
console.log(5);
console.log(6);