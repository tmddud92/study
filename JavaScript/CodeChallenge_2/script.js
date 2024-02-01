const title = document.querySelector("div.hello:first-child h1");
function changeColor() {
    const body = document.body;
    title.style.color = "white";
    if (
        window.innerWidth < 450 &&
        window.matchMedia("(max-width: 450px)").matches
    ) {
        body.style.backgroundColor = "#3498db";
    } else if (
        window.innerWidth > 450 &&
        window.matchMedia("(max-width: 750px)").matches
    ) {
        body.style.backgroundColor = "#9b59b6";
    } else {
        body.style.backgroundColor = "#f39c12";
    }
}

window.addEventListener("resize", changeColor);

//https://codesandbox.io/p/sandbox/empty-blueprint-forked-klpq4x
    // Call the function on page load and when the window is resized window.onload = changeColor; window.onresize = changeColor;

//첫 조건이 width > 1000 인데 
//두번째 조건이 width <= 1140 && width >= 700 인 이유가 무엇인가요? 
//width <= 1000 && width >= 700 으로 해야 범위가 맞는 것 아닌가요?