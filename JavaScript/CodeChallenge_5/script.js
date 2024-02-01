const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
];
const btn = document.querySelector("button");

function getRandomColor() {
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor = `linear-gradient(0.25turn, ${randomColor1}, ${randomColor2})`;
    document.body.style.background = randomColor;
    // body.style.backgroundImage = `linear-gradient(0.25turn, ${randomColor1}, ${randomColor2})`;
}

btn.addEventListener("click", getRandomColor);

// const create = document.createElement("background");
// create.src = `linear-gradient(0.25turn, ${randomColor}, ${randomColor})`;
// document.body.appendChild(create);

// btn.addEventListener("click", function () {
//   const randomColor = getRandomColor();
//   document.body.style.background = `linear-gradient(0.25turn, ${randomColor}, ${randomColor})`;
//   color.textContent = randomColor;
// });
//background: linear-gradient(0.25turn, ${randomColor}, ${randomColor});
