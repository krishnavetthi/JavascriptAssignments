//05. Declare a varibale and assign string value to it and then split it into an array using split() method.

let stringVariable = "India;USA;Japan;China;Nepal;UK;Australia;Russia";
let splitArray = stringVariable.split(';');
console.log(`Spliting a string into array using split() method. \nstring --> ${stringVariable}<---\nusing ';' as delimitor to split the string we get`);
console.log(splitArray);
