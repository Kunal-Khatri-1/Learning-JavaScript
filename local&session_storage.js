let impArray = ["adrak", "pyaz", "bhindi"];

localStorage.setItem("Name", "Harry");
localStorage.setItem("Name2", "Rohan");
localStorage.setItem("Name2", "Rohan2");
localStorage.setItem("sabzi", impArray);    // this statement first converts the array into string and then stores it in the localstorage
localStorage.setItem("sabzi2", JSON.stringify(impArray))

let naame = localStorage.getItem("Name")
naame = JSON.parse(localStorage.getItem("sabzi2"))
// let naame = localStorage.getItem("<does not exists>")    // gives null
console.log(naame);

// clears the entire local storage
// localStorage.clear();

// clear particular key-value pair
localStorage.removeItem("Name")

console.log(localStorage);  // typeof window.localstorage is function