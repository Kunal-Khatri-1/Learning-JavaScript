let cont = document.querySelector(".container");
let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[3].nodeType;
// Node types
// 1 =  Element
// 2 =  attribute
// 3 =  Text Node
// 8 =  Comment
// 9 =  document
// 10 =  docType
// console.log(nodeName);
// console.log(nodeType);
// console.log(cont);
// console.log(cont.childNodes);   // shows comments and enter space also
// console.log(cont.children);     // shows only HTML elements


let container = document.querySelector(".container");
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);   // count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
