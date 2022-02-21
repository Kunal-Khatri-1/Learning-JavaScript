var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i


var str1="JavaScript"
var str2=str1.concat(" is","awesome")
console.log(str2);
//Output: JavaScript is awesome


//indexOf(char/substring)
//indexOf(substr, [start_from])
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1
var str2 = str1.indexOf("a"); // 8 
str1.indexOf("a", 9); // 16


// lastIndexOf(substr, [start_from])
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11


var text="programming"
var mystr= text.slice(0,4)
console.log(mystr)
//Output:- "prog"


var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
var txt = "1,2,3,4,5,5,5,6";
txt.split(",", 3)        // ['1', '2', '3']


//substring(from, [to])
// there is also a slice(from, [to]);
var myString = 'javascript Programming';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript


//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript


//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT


var str = "Welcome to programming World!!";
var pos = str.search("programming");    // 11
var pos = str.search("programmig");     // -1
p.search("i")   // 11   // p defined below



var p = "Kunal Khatri is the best in the world";
p.includes("K")     // true
p.includes("Kha")   // true