function  onlyCharacter( str ) {
 
    // You have to write your code here
  
     if (typeof str === 'string') {
        const charecter = str.split(' ').join('').toUpperCase();
       
        return charecter;
        
    } else {
        return "Invalid"
    }
   
  


}
const result = onlyCharacter({});
console.log(result);