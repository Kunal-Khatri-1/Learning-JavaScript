let today = new Date();
today = typeof today;
// console.log(today);

let otherDate = new Date("8-4-2003 04:54:08");
otherDate = new Date("June 13 1976");
otherDate = new Date("13/06/1976");     // Invalid Date
otherDate = new Date("12/31/2000");     // mm/dd/yyyy
// console.log(otherDate);

let a;
a = new Date()
a = otherDate.getDay();
console.log(a);