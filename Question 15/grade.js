//15. Write a program which can give grades to students according to theirs scores:

const prompt=require("prompt-sync")();
let totalmarks = prompt("Want to find out your grade? Enter your total marks out of 100:  ");

if(totalmarks >= 80 && totalmarks<=100){
    // - 80-100, A
    console.log("Grade A");
}else if(totalmarks >= 70 && totalmarks<=79){
    // - 70-79, B
    console.log("Grade B");
}else if(totalmarks >= 60 && totalmarks<=69){
    // - 60-69, C
    console.log("Grade C");
}else if(totalmarks >= 50 && totalmarks<=59){
    // - 50-59, D
    console.log("Grade D");
}else if(totalmarks >= 0 && totalmarks<=49){
    // - 0-49, F
    console.log("FAIL");
}else{
    console.log("Negative marks is Fail");
}

