// document object is the part of window object
// window is the global object

let a = window;
a = window.document
// alert("Hello Harry");
// // assign whatever value we pass in prompt to a
// a = prompt("This will destroy your computer");
// // assigns a boolean value true/ false, if clicked ok then true otherwise cancel means false
// a = confirm("Are you sure you wanna delete this page")
a = window.innerWidth   // similarly we have innerHeight
a = outerHeight
a = innerHeight
// gives how much we have scrolled in x and y direction
a = scrollX
a = scrollY
scrollBy(100, -150); // scrool 100 px in x direction and -150 px in y direction
scrollTo(0, 10) // scroll to leftmost point in x direction, scroll to topmost point + 10 px in y direction
// we can also do something like this
scrollTo({
    top: 200,
    left: 100,
    behavior: "smooth"
})

scrollBy({
    top: 200,
    left: 100,
    behavior: "smooth"
})
a = location;
// location.reload()
a = location.href
// location.href = "//facebook.com"
a = location.toString() // gives href in string
a = history
// these are equivalent to clicking the back arrow or forward arrow
history.back()
// clicking back two times
history.go(-2)
// clicking forward two times
history.go(1)
console.log(a);