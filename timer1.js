/*Implement an alarm clock / timer which will beep after a specified 
amount of time has passed. The user can specify an unlimited number 
of alarms using command line arguments */

//  Example Usage:

//node timer1.js 10 3 5 15 9 

// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds 



//Make a beeping sound:
//console.log("beep!")


const inputVal = process.argv.slice(2);
let newArr = inputVal.map((i) => Number(i));


for (let i = 0; i < newArr.length; i++){
  setTimeout(() => {
    console.log("beep!");
  }, newArr[i] * 1000);
};




//convert array into string of numbers
// set timer to "beep" each number