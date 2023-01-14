// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3    ------> true
// 4 >= 3   ------> true
// 4 < 3    ------> false
// 4 <= 3   ------> false
// 4 == 4   ------> true
// 4 === 4  ------> true
// 4 != 4   ------> false
// 4 !== 4  ------> false
// 4 != '4' ------> false
// 4 == '4' ------> true
// 4 === '4' ------> false

console.log("Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()")
console.log("The below are the expressions, with my answers:\n\n4 > 3    ------> true\n4 >= 3   ------> true\n4 < 3    ------> false\n4 <= 3   ------> false\n4 == 4   ------> true\n4 === 4  ------> true\n4 != 4   ------> false\n4 !== 4  ------> false\n4 != '4' ------> false\n4 == '4' ------> true\n4 === '4' ------> false\n");

console.log("The below are consol.log results");
console.log(4 > 3?"4 > 3 ------> true":"4 > 3 ------> false");
console.log(4 >= 3?"4 >= 3 ------> true":"4 >= 3 ------> false");
console.log(4 < 3?"4 < 3 ------> true":"4 < 3 ------> false");
console.log(4 <= 3?"4 <= 3 ------> true":"4 <= 3 ------> false");
console.log(4 == 4?"4 == 4 ------> true":"4 == 4 ------> false");
console.log(4 === 4?"4 === 4 ------> true":"4 === 4 ------> false");
console.log(4 != 4?"4 != 4 ------> true":"4 != 4 ------> false");
console.log(4 !== 4?"4 !== 4 ------> true":"4 !== 4 ------> false");
console.log(4 != '4'?"4 != '4' ------> true":"4 != '4' ------> false");
console.log(4 == '4'?"4 == '4' ------> true":"4 == '4' ------> false");
console.log(4 === '4'?"4 === '4' ------> true":"4 === '4' ------> false");

// Find the length of python and jargon and make a falsy comparison statement.
let python = 'python';
let jargon = "jargon";

if(python.length != jargon.length){
    console.log("The condition python.length != jargon.length, is true.");
}else{
    console.log("The condition python.length != jargon.length, is a falsy comparison statement.");
}
