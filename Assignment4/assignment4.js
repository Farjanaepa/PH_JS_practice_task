

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




function  onlyCharacter( str ) {
 
    // You have to write your code here
  
     if (typeof str === 'string') {
        const character = str.split(' ').join('').toUpperCase();
       
        return character;
        
    } else {
        return "Invalid";
    }
   
  


}




function  bestTeam( player1, player2 ) {
      // You have to write your code here
   
     
    if(typeof player1 !== "object" || player1 === null || typeof player2 !== "object" || player2 === null) {
        return "Invalid";
    }
    
     
    const player1_total=player1.foul + player1.cardY + player1.cardR;
    const player2_total=player2.foul + player2.cardY + player2.cardR;
    
    if (player1_total < player2_total) {
        return player1.name;
        
    }else if(player1_total > player2_total){
        return player2.name;

    } else if(player1_total === player2_total) {
        return "Tie";
    } 
    else {
        return "Invalid";
    }

}




function  isSame(arr1 , arr2 ) {
     // You have to write your code here
     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
     }else if (arr1.length !== arr2.length) {
        return false;
     }

     for(let i = 0; i<arr1.length; i++){
        if(arr1[i] !==  arr2[i]){
            return false;
        } 
     }
     return true;
}




function  resultReport( marks ) {
      // You have to write your code here

    if (!Array.isArray(marks)) {
        return "Invalid";
    } else if (marks.length === 0 ){
        return { finalScore:0, pass:0, fail:0 };

    }
    let pass=0;
    let fail=0;
    let totalMark = 0;
    for(let i = 0; i < marks.length; i++){
        totalMark = totalMark + marks[i];
        if (marks[i] >= 40) {
            pass++;
        } else {
            fail++;
        }

    }
    const finalScore = Math.round(totalMark/marks.length);
    return { finalScore, pass, fail };


}