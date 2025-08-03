/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(y = 1; y <= experience; y++){
    startingSalary=startingSalary + startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));