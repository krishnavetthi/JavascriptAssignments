//17. Write a program which tells the number of days in a month.

const prompt=require("prompt-sync")();
const month = prompt("Want to know how many days are in a month in a year? Enter the month name :  ");
const monthLower = month.toLowerCase();
console.log(monthLower)
if(monthLower == "february"){
    console.log("28 days");
}else if(monthLower == "april" || monthLower == "june" || monthLower == "september" || monthLower == "november"){
    console.log("30 days");
}else if(monthLower == "january" || monthLower == "march" || monthLower == "may" || monthLower =="july" || monthLower =="august" || monthLower =="october" || monthLower =="december"){
    console.log("31 days");
}else{
    console.log("Wrong input!!");
}