// different ways to make an object in Javascript

// using constructor function
function ObjMaker(yName, yNumber) {
    this.name = yName;
    this.number = yNumber;
}

let obj1 = new ObjMaker("Kunal", 1)
ObjMaker.prototype.getName = function (){
    return this.name;
}
console.log(obj1);