//09. Boolean value is either true or false.
let number1 = 100, number2 = 200;
console.log("Let us take 2 numbers, number1=100, number2=200 to show the conditions return truth and false values.\n")
// - Write three JavaScript statement example which provide truthy value.

if(number2>number1){
    console.log("number2>number1 results true value, hence this statement is printed");
}
 
if(number1){
    console.log("number1 holds a value, Condition returns true, hence this statement is printed");
}

if(number2!=null){
    console.log("number2!=null, returns true as number2 holds a value, hence this statement is printed\n");
}

// - Write three JavaScript statement example which provide falsy value.

if(number1>number2){
    console.log("False value condition, doesn't enter if loop");
}else{
    console.log("Condition number1>number2 is false, hence doesn't enter if loop, goes to else loop");
}

if(number1==null){
    console.log("False value condition, doesn't enter if loop");
}else{
    console.log("Condition number1==null is false, hence doesn't enter if loop, goes to else loop");
}

if(!number1){
    console.log("False value condition, doesn't enter if loop");
}else{
    console.log("Condition !number1 is false, hence doesn't enter if loop, goes to else loop\n");
}