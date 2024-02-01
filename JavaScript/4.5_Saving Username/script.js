// 브라우저의 기본 동작을 막는다.(submit 할때 동작을 X)
// 기본 동작을 멈추고 우리가 원하는 대로 할 수 있게 됨
// form에 hidden이라는 class 추가
// 이때 form과 h1 모두 hidden이라는 같은 class을 지니게 됨
// 우리는 loginInput의 값을 변수에 저장하고
// 기본적으로 비어있는 h1인 greeting을 가져다가
// "hello username"이라는 텍스트를 넣어줌
// 이때 `${}`를 활용해서 string 안에 변수값을 넣고
// h1에서 hidden이라는 class를 삭제해줌
// 그러면 hidden class명을 갖고 있는건 form 뿐

// value를 저장하는 방법(user에게 매번 질문하기 번거로워서)
// 데이터를 저장해주는 API는 local storage.(나중에 가져다 쓸 수 있다)
// local storage에 뭐가 들어있는지 보고싶다면 개발자도구를 이용하면됨
// application으로 가서, local storage로 이동.

// setItem을 이용하면 local storage에 정보를 저장할 수 있다.
// localStorage.setItem("key", "value");

// getItem을 이용해서 정보를 불러올 수 있다.
// localStorage.getItem("key"); -> "value"

// 필요한 경우 저장된 값을 지울 수도 있다.
// localStorage.removeItem("key");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
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