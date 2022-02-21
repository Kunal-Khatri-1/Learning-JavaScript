let x = 3;
let y = 6;

let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;
z = x % y;

// Exploring the math Object
z = Math;

z = Math.PI;
z = Math.E;

z = Math.ceil(5.8);     // gives 6
z = Math.ceil(5.5);     // gives 6
z = Math.ceil(6.5)      // gives 7

z = Math.round(5.5);    // gives 6
z = Math.round(6.5);    // gives 7

z = Math.floor(5.5);    // gives 5
z = Math.floor(6.5);    // gives 6

z = Math.abs(-6.333);
z = Math.abs(6.333);

z = Math.sqrt(0.888);
// z = Math.sqrt(-1);      // gives NAN

z = Math.pow(2, 256);

// do not pass as array or object
z = Math.min(2,3,4,5,6,7,8,8,5,55,5,5,5,5,5,5,5,55555);
z = Math.max(2,3,4,5,6,7,8,8,5,55,5,5,5,5,5,5,5,55555);

z = Math.random();
z = 100 * Math.random();        // Number between 0 to 100
z = 10 + Math.random() * 90     // Number between 10 and 100
z = Math.trunc(10 + Math.random() * 90)     // Number between 10 and 100



console.log(z);