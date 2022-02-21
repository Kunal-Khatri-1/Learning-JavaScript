let btn = document.getElementById("btn");
btn.addEventListener("click", func1);

// eventListners
// 1. Double click = "dblckick"
// 2. "mousedown"
// 3. "mouseenter"
// 4. "mouseleave"
// 5. "mousemove"

function func1(e) {
    console.log("thanks", e);
    e.preventDefault();
}