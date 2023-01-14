//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let sampleArray = ['LCO', 'pw skills', 'udemy', 'pw sills', 'ineuron', 'pwskills', 'udacity', 'coursera', 'geeksforgeeks','pw skills'];
let reverseIndex = sampleArray.length - 1;
console.log("Using lastIndexOf() method to determine the position of the first and last occurrence of a word 'pw skills'");
console.log(`First Index of pw skills is ${sampleArray.lastIndexOf('pw skills',-reverseIndex)} and last index is ${sampleArray.lastIndexOf('pw skills')}`);