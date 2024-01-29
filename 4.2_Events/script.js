const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    // 어떤 정보를 브라우저가 주고 있는지 보여줌
    // 여기에서 내가 한건 preventDefault라는 function을 호출한것뿐
    // preventDefault가 하는 일은 어떤 event의 기본 행동이 발생되지 않도록 막는것
    //const username = loginInput.value;
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
onLoginSubmit({information})
// onLoginSubmit 함수의 첫번째 argument로 발생한 일에 대해 네가 필요로 할만한 정보를 주는 것

// submit은 엔터를 누르거나 버튼을 클릭할 때 발생
// form을 submit 할 때 입력값을 받아냈다.
// 새로고침이 일어나는건 form submit의 기본 동작
// 브라우저는 우선 onLoginSubmit function을 호출하고
// 브라우저가 function을 실행시키고 있기는 하지만
// ()이 안에서 너에게 정보를 주고 있어
// 첫번째 argument로써 추가적인 정보를 가진 채로 호출하게 될거야.

// 우리가 지금 하고 있는 건 onLoginSubmit 이라는 function릏 만들고
// 이 function이 하나의 argument를 받도록 하고 그걸 JS에 넘겨주고 있어.
// 누군가 form을 submit하면 JS가 이 function을 호출하도록 하고 있어.
// 모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 된다.


// function onLoginSubmit(event){
//     event.preventDefault(); 
//     브라우저가 기본 동작을 실행하지 못하게 막기 
//     event object는 preventDefault함수를 기본적으로 갖고 있음
// console.log(event);
// }
// loginForm.addEventListener("submit", onLoginSubmit); 
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함.
// 해당 인자는 event object를 담은 정보들
    
// ★ 중요 ★
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
    
// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 
// 첫 argument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. 
// ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음