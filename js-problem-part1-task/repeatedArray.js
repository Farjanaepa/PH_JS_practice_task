// repeated array
const numbers = [5,6,11,12,98, 5]
function repeatedArray(number){
    let count = 0;
    for(const num of number){
        if (num === 5) {
            count ++;
        }
    }
    return count
}
const result = repeatedArray(numbers);
console.log(result);


//Task -2 : Write a function to count the number of vowels in a string.
const sentences = "I am a voulentier";
function vowelCheck(sentence){
    let v = 0;
    const vowel= ['a','e','i','o',' u'];
    for(const alph of sentence){
        if (vowel.includes(alph) ){
            v++;
            
        }
    }
    return v;
}
const count = vowelCheck(sentences);
console.log(count);

// task 5 : Random Number

console.log(Math.random()*(20 - 10)+10);

// task 4 : Write a function to find the longest word in a given string.
const input = "I am learning Programming to become a programmer."



function longestWord(word){
    const words= input.split(" ");
    let maxlength = '';
    for(const part of words){
        if (part.length > maxlength.length) {
           maxlength = part ;
        }

    }
    return maxlength;
}
const splittext= longestWord(input);
console.log(splittext);