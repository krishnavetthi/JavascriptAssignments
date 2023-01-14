// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
const prompt=require("prompt-sync")();
const fileName = prompt("Enter the filename with extension:  ");

const splitArray = fileName.split('.');
console.log(`The file extension is: ${splitArray[1]}`);
