document.getElementById("heading").addEventListener("click", function (e) {
  console.log("You have clicked the heading.");
  // location.href = "https://www.google.com"
  let variable = e;
  variable = e.target;
  variable = e.target.id;
  variable = e.target.classList;
  variable.forEach((element) => {
    console.log(element);
  });

// this is relative to the element
  variable = e.offsetX;
  variable = e.offsetY;

// client is relative to the browser window
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
});
