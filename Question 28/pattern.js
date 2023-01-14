// 28. Write a program to print the given patterns using the loops-

const prompt=require("prompt-sync")();
const patterNumber = prompt("Enter a number to get patterns:  ");

// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
console.log("\nTriangle pattern:");
let trianglePattern="";
for(let i=1; i<=patterNumber; i++){
    trianglePattern = "*"+trianglePattern;
    console.log(trianglePattern);
}

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***
console.log("\nSquare pattern:");
for(let i=1; i<=patterNumber; i++){
    let squarePattern="";
    for(let j=1;j<=patterNumber;j++){
    squarePattern = "*"+squarePattern;
    }
    console.log(squarePattern);
}

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	      *
//	     ***
// 	    *****

console.log("\nPyramid pattern:");
let pyramidPattern="*";
let n = patterNumber;
for(let i=1; i<=patterNumber; i++){
    let space = " ";
    n--;
    for(let j=n;j>0;j--){
        space=space+" ";
    }
    console.log(space+pyramidPattern);
    pyramidPattern ="*"+"*"+pyramidPattern;
}
