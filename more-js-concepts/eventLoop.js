
function one(){
    two()
    console.log(1);
}

function two(){
    three()
    console.log(2);
}

function three(){
    setTimeout(() => {
        console.log('inside three timeout',0)
    })
    four()
    console.log(3);
}

function four(){
    five()
    console.log(4);
}

function five(){
    setTimeout(() => {
        console.log('inside five time')
    },0)
    six ()
    console.log(4);
}

function six(){
    
    console.log(6);
}

one()
