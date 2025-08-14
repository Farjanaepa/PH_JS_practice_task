// ticket fine calculate

function totalFine( fare ) {
          // You have to write your code here
          if (typeof fare ===  "number" && fare > 0) {
           const fine = fare + fare*(20/100) + 30;
            return fine ; 
          }
          else if(typeof fare !== "number" || fare <= 0){
            return "Invalid";
          }          

}


const fine=totalFine("gorib tai ticket kati nai");
console.log(fine);
