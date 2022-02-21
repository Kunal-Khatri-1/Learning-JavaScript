let a = document;
// typeof document a => object
// DOM has a tree like structure, child ke child
// a = document.all  is deprecated, gives HTML collection
// document.queryselectorAll("*") can be used instead of document.all
// querySelectorAll is giving a list therefore I am able to use forEach loop

// Array.from(<HTML colllection>) returns an array from that HTML collection
// a = document.querySelectorAll("*");
// a.forEach(element => {
//     console.log(element);
// });

// a = document.body;
// a = document.forms; // document.forms[0]

// gives an HTML collection
// a = document.links
// a = document.links[0].href

// a = document.images document.scripts
a = document.images // gives an HTML collection
a = document.scripts

console.log(a);