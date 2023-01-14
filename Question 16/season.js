//16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

const prompt=require("prompt-sync")();
let month = prompt("Want to check if the season is Autumn, Winter, Spring or Summer? Enter the month name here:  ");
let monthLower = month.toLowerCase();
const result = monthLower.charAt(0).toUpperCase()+monthLower.slice(1);

if(monthLower == "september" || monthLower =="october" ||monthLower =="november"){
    console.log(`${result} is Autumn season`);
}else if(monthLower == "december" || monthLower =="january" || monthLower =="february"){
    console.log(`${result} is Winter season`);
}else if(monthLower == "march" ||monthLower =="april" ||monthLower == "may"){
    console.log(`${result} is Spring season`);
}else if(monthLower == "june" || monthLower =="july" || monthLower =="august"){
    console.log(`${result} is Summer season`);
}else{
    console.log("Wrong input!!");
}
