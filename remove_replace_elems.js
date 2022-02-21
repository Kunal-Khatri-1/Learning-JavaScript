let element = document.createElement("li");
let text = document.createTextNode("I am a text node.");

// Add a class name to the li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
// element.innerText = "Hello, this is created by Harry."

let ul = document.querySelector("ul.this");
element.appendChild(text);
ul.appendChild(element);

// console.log(element);

let elem2 = document.createElement("h3");
elem2.id = "elem2";2
elem2.className = "elem2";
let tnode = document.createTextNode("this is a created node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById("myul");
// replace RHS(should be a child) by LHS
myul.replaceChild(element, document.getElementById("fui"));
myul.removeChild(document.getElementById("lui"));
let pr = elem2.getAttribute("id");
let pr2 = elem2.hasAttribute("id");
elem2.removeAttribute("id");
// console.log(elem2, pr)
// console.log(elem2, pr2)

let a = document.createElement("a");
a.setAttribute("href", "https://www.codewithharry.com");
let b = document.createElement("h2");
let c = document.createTextNode("go to cwh");
b.appendChild(c);
a.appendChild(b);
let body = document.querySelector("body");
body.appendChild(a);

console.log(body);
console.log(a);
console.log(b);
console.log(c);
