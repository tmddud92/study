const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    //const username = loginInput.value;
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    // alert("clicked!");
    // alert는 특이해서 모든 동작들을 막게 된다.
    // 그래서 이제 아무도 alert를 사용하지 않는다.
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
// 링크의 기본 동작은 클릭 시 다른 페이지로 이동하는것
// JS는 단순히 함수를 실행시키기만 하는게 아니라,
// JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.
// 그 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.



// addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
// addEventListener의 함수에서 object에 대한 자리만 할당해주면
// 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 
// preventDefault를 이용하여 막을 수 있다!