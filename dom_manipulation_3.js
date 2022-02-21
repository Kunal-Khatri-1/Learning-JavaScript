// DOM selectors

/*
1.  Single Element Selector
2.  Multi-Element Selector
 */

// 1. Single Element Selector
let element = document.getElementById("myfirst");
// element = element.className

// it gives a list
// element = element.childNodes
// element = element.childNodes[0]
// element = element.parentNode
element.style.color = "red";
element.innerText = "Harry is a good boy"
element.innerHTML = "<b>Harry is a good boy 2</b>"
// console.log(element.innerHTML / element.innerText)
// console.log(element);


let sel = document.querySelector("#myfirst");
// gives the first element with the class of child
sel = document.querySelector(".child");
// You can also give a tag name
sel = document.querySelector("b");
sel = document.querySelector("h1");
sel = document.querySelector("div"); // gives only first div
sel.style.color = "green";
// console.log(sel);


// 2.  Multi-Element Selector
// gives an HTMLCollection
let elems = document.getElementsByClassName("child");
// elems = elems[0];
elems = document.getElementsByClassName("container");
elems = elems[0].getElementsByClassName("child");

elems = document.getElementsByTagName("div");

// however for loops work for HTML collection
Array.from(elems).forEach(element => {
    element.style.color = "blue";
})

console.log(elems);