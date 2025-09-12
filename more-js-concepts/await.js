
async function loadData() {
    

console.log('one');
console.log('two');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data=> console.log('data got'))

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('data got await',data[0])


console.log('three');
console.log('four');
console.log('five');
console.log('one');
}
// loadData();

// try {

// }
// catch(){

// }

const loadData2= async () => {
    console.log(2)
    try{
    console.log(2)
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log('got data', data.length)
    }
    catch(err){
        console.log('error happend');
    }
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
}
loadData2();