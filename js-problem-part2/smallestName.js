// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function smallestName(names){

//     let nam=names[0];

//     for(const name of names){
//         if (name.length < nam.length) {
//             nam = name;
            
//         }
//     }
//     return nam;

// }
// const smallname= smallestName(heights2);
// console.log(smallname);

function smallName(names){

    let name = names[0];
    for(const nam of names){
        if(nam.length < name.length){
            name = nam;

        }
    }
    return name;

}
const namesmall= smallName(heights2);
console.log(namesmall);

// largest name

function largestName(names){
    let name = names[0];
    for(const nam of names){
        if(nam.length > name.length){
            name = nam;
        }
    }
    return name;

}
const largename= largestName(heights2);
console.log(largename);