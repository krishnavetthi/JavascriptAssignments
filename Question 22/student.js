//22. The following is an array of 10 students ages:
//=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log("Array of 10 student ages:");
console.log(ages);
// - Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(`The min age in the array is ${ages.shift()} and max age is ${ages.pop()}`);
// - Find the median age(one middle item or two middle items divided by two)
const median = (arr)=>{
    const middle = Math.floor(ages.length/2);
    return ages.length%2!=0? ages[middle]:(ages[middle]+ ages[middle-1])/2;
}
console.log("The median of the ages in the array is:  "+median(ages));
// - Find the average age(all items divided by number of items)
const average = (arr) =>{
    let sum = 0;
    for(let element of ages){
        sum = sum+element;
    }
    let result = sum/ages.length;
    return result;
}
console.log(`The average of the ages in the array is ${average(ages)}`);
// - Find the range of the ages(max minus min)
const range = ages.pop() - ages.shift();
console.log(`Range of the ages ${range}`);


// - Compare the value of (min - average) and (max - average), use abs() method

const min_avg = Math.abs(ages.shift()-average(ages));
const max_avg = Math.abs(ages.pop()-average(ages));

if(min_avg > max_avg){
    console.log("The difference of min and avg is greater than max and avg difference");
}else if(min_avg < max_avg){
    console.log("The difference of min and avg is less than max and avg difference");
}else{
    console.log("The difference of min and avgis equal to max and avg difference");
}