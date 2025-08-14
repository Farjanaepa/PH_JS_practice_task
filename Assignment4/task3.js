function  bestTeam( player1, player2 ) {
      // You have to write your code here
   
     
    if(typeof player1 !== "object" || player1 === null || typeof player2 !== "object" || player2 === null) {
        return "invalid"
    }
    
     
    const player1_total=player1.foul + player1.cardY + player1.cardR;
    const player2_total=player2.foul + player2.cardY + player2.cardR;
    
    if (player1_total<player2_total) {
        return player1.name;
        
    }else if(player1_total>player2_total){
        return player2.name;

    } else if(player1_total === player2_total) {
        return "tie"
    } 

}
const result=bestTeam({ name: "Germany", foul: 1, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
);
console.log(result);
