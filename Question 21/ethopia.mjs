//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

import countries from "../Question 19/countries.mjs";

const arrayCountries = countries.countries;
console.log("The countries array is:")
console.log(arrayCountries);

const ethiopiaCheck =(arr)=>{
    return arrayCountries.indexOf("Ethiopia")!= -1 ? console.log(ETHIOPIA):arrayCountries.push('Ethiopia');
};

ethiopiaCheck(arrayCountries);
console.log(arrayCountries);




