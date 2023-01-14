//23. Write a program to check that the number given by the user is a prime number or not.

const prompt=require("prompt-sync")();

let number = prompt("Check the number is prime or not, Enter the number:  ");
let count = 0;
for(let i = 1;i<=number;i++){
    if(number%i == 0){
        count = count+1;
    }
}

if(count == 2){
    console.log("Prime Number");
}else if(count>2){
    console.log("Composite Number");
}else{
    console.log("Neither Prime nor Composite Number");
}

