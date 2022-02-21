let div = document.createElement("div");
document.body.appendChild(div);

div.innerText = "Click here to change text.";

const changeText = () => {
    div.contentEditable = true;
}

let counter = 0;

const storeVal = (e) => {
    console.log("storeVal")
    let val = div.innerText;
    
    localStorage.setItem(`${counter}`, `${val}`);
    ++counter;
}

div.addEventListener("click", changeText);
div.addEventListener("blur", storeVal)