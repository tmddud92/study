// 원하는 event를 찾는 방법
// Mozilla Developer Network인 MDN에 검색
// Web APIs라는 문장이 포함된 페이지를 찾는다.
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
// property 이름 앞에 on이 붙어있다면, 그게 event listener.
// 이 event를 사용할 때에는 on을 빼고 사용해야한다.

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title wsa clicked!");
}

function handleMouseEnter() {
    title.innerText = "mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);