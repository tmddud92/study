const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
    console.log("title wsa clicked!");
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
// window가 resize(화면크기가 바뀜)될 경우 document를 호출하고
// document가 body에 접근할 수 있게 해준다.
// document에서 body,head,title 은 중요해서 언제든
// ex) document.body 로 가져올수있지만
// div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
// ex) document.querySelector(“h1”);
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All GOOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// addEventListener()를 통해서 event들을 listen 할 수도 있고,
// oneventname property에 event listener를 할당함으로써 event를 listen할 수 있다.

// event 를 사용하는 두가지 방법
// 1) title.addEventListener()를 해주고 click을 넘겨주는 것
// 2) title.onClick = 이런식으로 가능

// addEventListener를 더 선호하는 이유
// removeEventListener를 통해 event listener를 제거할 수 있다. 

// document가 JavaScript에서 기본적으로 제공되듯이 window도 기본적으로 제공
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
