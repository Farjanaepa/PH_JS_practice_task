const addNumLs= () =>{
    const number = Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number', number)
}


const setObjects = () => {
    const customer = {name: 'rohim', product : 3, price: 78}
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer',customerJSON);
}

const readObjects = () => {
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON)
    console.log(customer)
}

const getNumLs = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number);
}