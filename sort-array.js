const numbers = [1,2,5,3,8,4];

numbers.sort();
console.log(numbers);

// ascending

const ages = [1,5,100,15,12,8,2];
const sorted_ages = ages.sort(function(a,b)
{return a-b })
console.log(sorted_ages);

// descending

const sort_age = ages.sort(function(a,b)
{return b-a})
console.log(sort_age);
