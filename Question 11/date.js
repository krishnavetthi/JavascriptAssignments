// 11. Use the Date object to do the following activities
const today = new Date();
console.log(today.toString());

//What is the year today?
console.log(`What is the year today?\n${today.getFullYear()}`);

// What is the month today as a number?
console.log(`What is the month today as a number?\n${today.getMonth()}`);

// What is the date today?
console.log(`What is the date today?\n${today.getUTCDate()}`);

// What is the day today as a number?
console.log(`What is the day today as a number?\n${today.getDay()}`);

// What is the hours now?
console.log(`What is the hours now?\n${today.getHours()}`);

// What is the minutes now?
console.log(`What is the minutes now?\n${today.getMinutes()}`);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
var start = new Date(1970,0,1);
var elapsed = (today - start)/1000; // time in milliseconds
console.log(elapsed);
