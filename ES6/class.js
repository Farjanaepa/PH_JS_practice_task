

class Player{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = "bangladesh";
        console.log('calling the constructor',name)
    }
    goal(){
        console.log('score a goal')
    }
    getName(){
        return'borsha'
    }
}
const player1= new Player('Farjana')
const player2= new Player('saleh',29)

console.log(player1)
console.log(player2)
// player1.goal()
// console.log(player1);