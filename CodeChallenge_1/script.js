const title = document.querySelector("div.hello:first-child h1");

function handleMouseEnter() {
    title.style.color = "green";
    title.innerText = "The mouse is here!";
}

function handleMouseLeave() {
    title.style.color = "blue";
    title.innerText = "The mouse is gone!";
}

function handleResize() {
    title.style.color = "purple";
    title.innerText = "You just resized!";
}

function handleMouseRightClick() {
    title.style.color = "red";
    title.innerText = "That was a right click!";
}


title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleResize);
window.addEventListener("contextmenu", handleMouseRightClick);