

    const name = "Epa";
    const address = "mirpur";
    const college = "national";
    const fan = "Ahad Raja Mir";
    const drama ="meem se mohabbat";
    const hobby = "Travelling";
    console.log(name);
    console.log(address);
    console.log(college);
    console.log(fan);
    console.log(drama);
    console.log(hobby);

    // math operation

    const income = 100;
    const expense = 40;
    console.log(income - expense);

    const pensil=10;
    const peruse=2;
    const use=pensil/peruse;
    console.log(use);

    const have = 62;
    const perus = 15;
    
    console.log(have % perus);
    console.log(have / perus);

    const rice = 480;
    const perday= 4;
    const dayspent=480/4;
    console.log(dayspent/30);
    console.log(dayspent);

    let age = 20;
    age = 27;

    console.log(age);

    let playtime= 3 ;
    playtime = 0;
    console.log(playtime);

    const money ="20";
    const mmoney = parseInt(money);
    console.log(mmoney + 10);

    const r = "3.1413";
    const value=parseInt(r);
    console.log(value);

    const nam= "PremikBoy";
    const update = parseFloat(nam);
    console.log(update);

    const add = 3.456;
    const ad=2.789;
    const result=add+ad;
    const res=parseFloat(result.toFixed(2));
    console.log(res);

    const a=parseInt("56.78");
    const b=parseInt("12.78");
    console.log(a+b);

    const number1=parseFloat("10.5678");
    const number2=parseFloat("5.4321");
    const fixed1=number1.toFixed(1);
    const fixed2=number2.toFixed(1);
    console.log(fixed1,fixed2);

    let number=parseFloat("42.45679754");
    let round= number.toFixed(3);
    console.log(round);

    // comparison practice

    let ami=7;
    let vai= 5;

    console.log(ami>vai);

    let class1=45;
    let class2=50;
    console.log(class2>class1);

    let me=75;
    let you=75;
    console.log(me==you);

    let fixed=100;
    let save=95;
    console.log(fixed<=save);

    console.log(10!=7);

    console.log(20<=15);

    console.log(45>97);

    let vai1=10;
    let me1=15;
    console.log(vai1<=me1);

    let pass=33;
    let mes=45;
    console.log(33>=45);
    let jambura=20;
    let kodbel=30;
    console.log(jambura<kodbel);

    let book=10;
    let fbook=10;
    console.log(book=fbook);
    let mbiskt=15;
    let fbiskt=20;
    console.log(mbiskt<fbiskt);

    let remadrid=2;
    let bersa=3;
    console.log(remadrid<bersa);

    let mname="Rahim";
    let fname="Karim";
    console.log(mname==fname);

    let read=true;
    let fread=false;
    console.log(read=fread);

    console.log(50=="50");
    console.log(50==="50");

    console.log("javascript"=='javascript');
    console.log("javascript"==='javascript');

    console.log(25=="25");/*output true asbe cz sudhu man compare kori;*/

    console.log(25==="25");/*output false asbe cz data type compare kori;*/
    console.log("apple"=="apple");
    console.log("apple"==="apple");

    console.log("test"=="TEST");
    console.log("test"==="TEST");

    let variableX=15;
    let variableY="20";
    console.log(variableX!=variableY);
    console.log(variableX!==variableY);

    let variableA= "hello";
    let variableB="HELLO";
    console.log(variableA==variableB);
    console.log(variableA===variableB);

    // condition practice

    let home=6;
    if (home<=6){
        console.log("nasta dibe");
    }else{
        console.log("jharu bari dibe");
    }

    let login=true;
    if (login) {
        console.log("Welcome");
    }else{
        console.log("kick out")
    }

    let run=5;
    if (run>=5) {
        console.log("cocolate");
    }else {
        console.log("mota vuri hobe");
    }

    let mynumber = 85;
    if (mynumber>=80) {
        console.log("bike pabo");
    }else{
        console.log("bike pabo na");
    }
let movie = 8;
    if (movie<9) {
        console.log("movie dekhbo");
    }else{
        console.log("nake tel diye ghumabo");
    }
let temparature=30
    if (temparature>=30) {
        console.log("air condition start");
    }else{
        console.log("kombol muri diye gumabo");
    }

    // multiple condition practice

    let age1 = 18;
    let height= 60;
    if (age1>18 && height>60) {
        console.log("gari thelbe");
    }else{
        console.log("garite bose thakbe");
    }

    let math=80;
    let eng= 85;
    if (math>80 || eng>85) {
        console.log('vorti hote parbe');
    }else{
        console.log("biye diye dibo");
    }

    let gpa=5;
    let income2=10000;
    if (gpa==5 && income2<10000) {
        console.log("scholarship");
    }else{
        console.log("beton diye porte hobe");
    }

    let age2 = 30;
    let experience = 2;
    if (age2<30 && experience>2) {
        console.log("exam dite parbe");
    }else{
        console.log("exam dite parbe na");
    }

    let dim=12;
    let hen=true;
    if (dim>12 || hen==true) {
        console.log("dim er korma");
    }else{
        console.log("ruti paruti")
    }

    let tempr=100;
    let cough=true;
    if (tempr>100 || cough==true) {
        console.log("doctor er kase jbe")
    }else{
        console.log("katha muri diye sue thakbo");
    }

    let attendance=80;
    let homeworksubmit=true;
    if (attendance>80 && homeworksubmit==true) {
        console.log("exam dite parbe");
    }else {
        console.log("auto fail");
    }

    let current=false;
    let phncrg=false;
    if(current==false && phncrg==false){
        console.log("porte bosbe");
    }else{
        console.log("game khelbe");
    }

    let shirtprice=1000;
    let cupon=true;
    if (shirtprice>1000 && cupon==true) {
        console.log("you will get 20% off");
    }else{
        console.log("No discount");
    }
// else if condition practice

    let price=5000;
    if (price>=5000) {
        let discount=price/100*10;
        let pay=price-discount;
        console.log(pay);
    }else{
        console.log(price);
    }
///////
    let price1=4000;
    if (price1>=5000) {
        let discount=price1/100*10;
        let pay=price1-discount;
        console.log(pay);
    }else if (price1>=2500) {
        let discount=price1/100*5;
        let pay=price1-discount;
        console.log(pay);
    }else{
        console.log(price1)
    }
   ////
   let prc=4500;
   if (prc>3000) {
        let discount=prc/100*5;
        let pay=prc-discount;
        console.log(pay);
   } else if(prc>6000) {
    let discount=prc/100*15;
        let pay=prc-discount;
        console.log(pay);
   } else{
    console.log(prc);
   }

   //////
  
   let age3 =11;
   let food=500;
   if (age3<12 ) {
        console.log("its free");
   } else if(age3>60) {
    let discount=food/100*50;
    let pay=food-discount;
    console.log(pay);
   }else{
    console.log(food);
   }

   ///////

   let tk=1000;
   if (tk<1000) {
    console.log("deposit koro");
   } else if(tk<=5000) {
    console.log("enjoy life");
   }else{
    console.log("marry me");
   }
   ///////////
let mark=80;
   if (mark<50) {
    console.log("Fail");
   } else if(mark<=80) {
    console.log("Pass");
   }else{
    console.log("A+");
   }
   /////////

   let page=501;

   if (page<100) {
    console.log("small book");
   } else if(page<=500) {
    console.log("Midsize book");
   }else{
    console.log("Heart attack size book")
   }

   /////

   let temp=-1;

   if (temp<0) {
    console.log("Ice");
   } else if(temp<=20) {
    console.log("Cool Cool");
   }else{
    console.log("Hot Hot");
   }
   ///////

   let player=20;

   if (player<10) {
    console.log("novice");
   } else if(player<=50) {
    console.log("Expert");
   }else{
    console.log("Progamer");
   }

   ///nested if else prctice

   let invite=true;
   let pocket= 1000;
   if (invite==true) {
    console.log("I will go");
    if (pocket>=1000) {
        console.log("Bring Gift");
    } else {
        console.log("empty hand");
    }
   } else {
    console.log("i wont go");
   }

   //////
   let guesttea=true;
   let buiskut= false;
   if (guesttea) {
    console.log("Sathe Buiskut khabe")
    if (buiskut) {
        console.log("Bring it");
    } else {
        console.log("Only cha ready")
    }
   } else {
    console.log("bose bose star jolsha dekhen");
   }

   ///////
   let appuser=true;
   let subcription = "premium";
   if (appuser) {
    if (subcription == "premium") {
        console.log("Premium feature");
    } else {
       console.log("free version"); 
    }
   } else {
    console.log("no user");
   }

   ///////
   let fridgeekhabar=false;
   let fooddeliveryapp=true;

   if (fridgeekhabar) {
    console.log("khabar gorom korbo");
   } else {
    if (fooddeliveryapp) {
        console.log("Order korbo");
    } else {
       console.log("ami roja"); 
    }
   }
//////////

let guest = 120;
let gift=true;

if (guest>100) {
    if (gift) {
        console.log("lets party all night");
    } else {
       console.log("i will party with myself"); 
    }
} else {
    console.log("No pary");
}

//////
// Logical not /ternary operator practice
let totalpurchase = 3000;
let cashback = (totalpurchase>3000)?500:0;
console.log(cashback);

/////
let aging=16;
aging>15 ? console.log("teenager"):console.log("Child");

/////
let isLogin=true;
isLogin ? console.log("Wecome Back") : console.log("please login");
//////

let teltank="full";
teltank=="full" ? console.log("Ready to go") : console.log("Fill the tank");
///////
let exampass=true;
exampass ? console.log("Party time") : console.log("next semester e serious hobo");
/////
let sunny=false;
!sunny ? console.log("Stay home") : null;
//////
let expensive=false;
!expensive ? console.log("I will busy this time") : null;
///////
// Array problem practice////

let array=[71,71,73,74,75,76,77,78,79];

///////
let fruits=["apple","banana","orange","mango","guava"];
///////

let veg=["Alu",'peyaj','begun','sosha','korola','dheros','potol'];
console.log(veg.length);
/////
let movie1=["sanam teri kasam",'jawan','hum apke hain koun'];
/////
let odd=[11,13,15,17,19,21,23,25,27,29];
/////
let color=['red','green','blue','purple','white','black'];
console.log(color.length);

//Array Index Practice

let friend=['sad','bishal','dristy','fatema','ayesha'];
console.log(friend[3]);

////

let bookarray=['java','css','html','laravel','react','vuejs'];

console.log(bookarray[5]);

/////

let numb=[1,2,3,4,5,6,7,8,9,10];
 numb[7]= 30;

 console.log(numb);

 ////
 let game=['free fire','pubg','candy crush','Temple run'];
 game[2]='subway surfer';
 console.log(game);
 ////
 let family=['abbu','ammu','soikot','Lopa'];
 console.log(family[3]);
 ////
 let desh=['london','paris','madina','makkah','dubai','swtzerland'];
 console.log(desh[4]);
 ////
 let havetable=['lamp','books','pen','bag']
 console.log(havetable[7]);
 ////
 //Push pop method Practice

 let arr=[10,20,30,40,50];
 arr.push(60);
 console.log(arr);
 ///
 let somename=['sojib','sagor','sohel'];
 somename.push('sumon');
 console.log(somename);
 ////
 let gameremove=['pubg','candy crush','bubble'];
 gameremove.pop();
 console.log(gameremove);
 ////
 let upadan=[24,36,48,60];
 upadan.unshift(12);
 console.log(upadan);
 ////
 let boi=['java','css','react'];
 boi.shift();
 console.log(boi);

 //////Include and Indexof method Practice

 let jhuri=['apple','orange','kola','am','lichu'];
 if (jhuri.includes('am')) {
    console.log('am ache');
 } else {
console.log('am nei ,gache uthh');
 }

 //////

 let namarray=['babul','alif','choton'];
 console.log(namarray.indexOf('babul'));

 //////

 let bondhu=['rimon','rifat','rajib'];
 console.log(bondhu.indexOf('rifat'));

 /////

 let cities=['Dhaka','Chittagong','Sylet'];
 cities.push('rajshahi');
 console.log(cities);
 console.log(cities.includes('Rajshahi'));
 /////
 let check=['dighi','megh','bristy','borsha'];
 if (check.includes('bristy')) {
    console.log('i need umbrella');
 } else {
    console.log('No Rain no Pain');
 }
 //////
 let khela=['football','cricket','vollyball'];
 console.log(khela.includes('badminton'));
/////
// LOOP PRACTICE
const books=['math','bangla','english','java','css'];
for (const book of books) {
    console.log(book);
}
const foodsname=['biriani','mangso','burger','pizza'];
for (const food of foodsname) {
    console.log(food);
}
////

const ageall=[1998,1968,1975,2000,2005];
for (const age of ageall) {
    console.log(age);
}
/////

const exam=[19,15,23,28];
for(const ex of exam){
    console.log(ex);
}

/////

// while loop practice

let programming=0;
while (programming<10) {
    console.log('minumum 3 hour programming');
    programming++;
}


let num = 0;
while (num < 5) {
console.log("Bamboo Eating High School");
num++;
}

///////

let sonkha=1;
while (sonkha<=20) {
  console.log(sonkha);
  sonkha++;  
}
 let sonkha2=50;
 while (sonkha2<=100) {
    console.log(sonkha2);
    sonkha2++;
 }

 //////


 let sonkha3=1;
 while (sonkha3<=10) {
    console.log(sonkha3 * 3);
    sonkha3++;
 }

 ////////

 let loop=111;
 while (loop>=110) {
    console.log(loop * 2);
    loop--;
 }

 ////////

//  while loop practice

let variab=5;
let sum=0;

while (variab<=15) {
    console.log(variab);
    sum=sum+variab;
    variab++;

}
console.log(sum);

let student=1;

while (student<=50) {
    console.log(student);
    sum=sum+student;
    student++;

}
console.log(sum);


let student2=21;
let som=0;
while (student2<=50) {
   
    som=som+student2;
     console.log(student2 + som);
    student2++;

}

////

let jogfol=20;
let jsum=0;
while (jogfol<=40) {
    jsum=jsum+jogfol;
    
    jogfol++;
}

console.log(jsum);

//////

// of loop practice

for(let i=150;i<=170;i++){
    console.log(i);
}
////
let sum3=0;
for (let i=31;i<=58;i++) {
    sum3=sum3+i;
}
console.log(sum3);

//////

let sum4=0;
for (let i=25;i<=75;i++) {
    sum4=sum4+i;
}
console.log(sum4);

/////

// jor bijor looop

for (let i=20; i<=50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}
////

for (let i=40; i<=80; i++) {
    if (i % 7 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
let sum5=0;
for (let i=1; i<=40; i++) {
    if (i % 7 == 13) {
        
    }
    sum5=sum5+i;

}
console.log(sum5);

////
for(let i=1; i<=50; i+=4){
    console.log(i);
}

///////


for (let i=0; i<=100; i++) {
    if (i % 9 == 0 && i % 6 == 0) {
        console.log(i);
    }
}

//////
let sum6=0;
for (let i = 1; i<=50; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        
    }
    sum6= sum6+i;
}

console.log(sum6);

////


// Break and Continue statement practice

for(let i=1; i<=30; i++){
   console.log(i);
    if (i==15) {
        break;
    }
     
}

for(let i=1; i<=40; i++){
   
    if (i % 7 === 0) {
        continue;
    }
     console.log(i);
}

////

for(let i=1; i<=15; i++){
   
    if (i==9) {
        continue;
    }
     console.log(i);
}
/////

for(let i=1; i<=20; i++){
   
    if (i==12) {
        continue;
    }
     console.log(i);
}

/////


for(i=1; i<=25; i++){
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
//////

for(i=91; i<=120; i++){
    if (i % 10 === 0) {
        break;
    }
    console.log(i);

}
let output='';
for( i=1; i<=10; i++){
    if (i % 2 == 1) {
        console.log('');
    }
    else{
        console.log('white');
    }
}


////////// Object Practice/////////

const teacher={
    name:'jahidul islam',
    subject:'Math',
    age:30,
    address:'near post office'

}

///////////////////


const Tree={
    name:'belitree',
    height:8,
    age:10,
    fruit:false
}

///////////////////

const father={
    name:'Emdad khan',
    height:6,
    age:60,
    children:3
}

//////

const bird={
    name:'moyna',
    leg:2,
    baby:3
}

//////object property Practice/////////

const players={
    name:'soikot',
    age:20,
    sports:'football',
    team:'A'
}
console.log(players.team);

//////////////////

const laptop={
    brand:'Lenovo',
    price:45000,
    harddisk:8,
    ram:16,
    screen:15
}
console.log(laptop.screen);
/////////////

const favplc={
    name:"Cox's bazar",
    distance:'400km',
    popularity:'high'
}

console.log(favplc['popularity']);
//////////////

const phone={
    brand:"Nokia",
    color:'black',
    price:5000
}

console.log(phone['price']);


/////


const library={
    name:'public library',
    location:'Dhaka',
    books:500
}
console.log(library.location);

//////////////

const movies={
    title:'Inception',
    director:'nolan',
    rating:9

}
console.log(movies['rating']);

//////////////

const colleges={
        name:'NDC',
        established:1949,
        groups:['science','arts','commerce']
}
console.log(colleges.groups[1]);

////////////////

const familys={
    father:{
        name:'emdad khan',
        age:60,
        profession:'job'
    },
    mother:{
        name:'Parul',
        age:40,
        profession:'housewife'

    }

}

console.log(familys.father.age + familys.mother.age);



// object keys and values practice

const bo = {
    name:"sritigondha",
    writer:"sadat hossain",
    price:500
};
for (const key in bo) {
    const value = bo[key];
console.log(key,value);
    
}

//////////

const article = {
    title:"Learning Js",
    category:'programming'
};
// if (author) {
    
// }





