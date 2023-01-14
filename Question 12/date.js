// 12. Create a human readable time format using the Date time object

const today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

let hours = today.getHours();
let minutes = today.getMinutes();

console.log("Creating a human readable time format using the Date time object");

//     - YYYY-MM-DD HH:mm
console.log(`Format YYYY-MM-DD HH:mm -- > ${year}-${month}-${date} ${hours}:${minutes}`);

//     - DD-MM-YYYY HH:mm
console.log(`Format DD-MM-YYYY HH:mm -- > ${date}-${month}-${year} ${hours}:${minutes}`);

//     - DD/MM/YYYY HH:mm
console.log(`Format DD/MM/YYYY HH:mm -- > ${date}/${month}/${year} ${hours}:${minutes}`);
