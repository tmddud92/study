const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);


//localStorage.setItem("username",username);
// localStorage.setItem(key, value);
// - 로컬 저장소에 해당 키와 값을 저장함.
// localStorage.getItem(key);
// - 로컬 저장소에 해당 키에 해당되는 값을 불러옴.
// localStorage.removeItem(key);
// - 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.

// (TMI) Local storage, Session storage, Cookie 항목이 있어서 각 항목의 차이점을 간단히 조사했습니다.
// - Cookie: 만료일자를 지정하게 되어 있어서 영구적이지 않습니다. 또한 용량 제한이 있습니다.
// - Web storage: 크게 Local storage 와 Session storage 가 있습니다.
// 1. Local storage: 저장한 데이터를 직접 지우지 않는 한 데이터가 영구적으로 저장됩니다.
// 2. Session storage: 브라우저 종료 시 데이터가 사라집니다.