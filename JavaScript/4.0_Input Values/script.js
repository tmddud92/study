// 우리는 아직 정보를 기억하는 법을 모른다.
// JS에는 value를 기억하게 하는 쉬운 방법이있다.
// 우선 HTML을 작성한 다음에 거기있는 element들을 끌고 오는것

const loginForm = document.getElementById("login-form");
const loginInput1 = loginForm.querySelector("input");
const loginButton1 = loginForm.querySelector("button");
// HTML element 안을 바로 검색 가능하다.
// 우리는 우선 login-form이라는 id를 찾았고,
// 그 안에서 input과 button을 찾았다.

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// 더 짧게 코드를 작성하기 위해 우리가 할 수 있는 방법

// 이렇듯 document 또는 하나의 element를 통해서 검색 가능

function onLoginBtnClick() {
    console.dir(loginInput.value);
    // 입력받은 value가 알고싶고, 텍스트를 콘솔에 표시하고싶으면
    // input에 대한 정보들을 볼 수 있다. 그 중에서 value.
    // console.dir(loginInput);에 .value추가
    // 하나의 문제점은 console.dir("hello",loginInput.value);실행시
    // 콘솔에 hello와 value가 표시된다.
    // value가 없을경우 hello뒤에 아무것도 없이 표시된다.
    // 이 부분은 확인 작업이 필요하므로 문제.
    // user가 이름을 입력했을 때만 button을 클릭할 수있게 하고싶어서.
    
    console.log("click!!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);




// 모든 것은 HTML에서 시작되어야 함. HTML에서 작성하고 자바스크립트로 기능을 구현.
// 먼저, HTML 코드 작성하기
// 1. 사용자가 이름을 작성할 수 있도록 input 태그를 작성한다.

// 안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기
// 2. 그리고 옆에 버튼을 만든다.
// Log In
// 3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.
// 왜 div태그로 묶는지 확실히는 모르겠지만, 내 생각에는 둘을 묶은 다음, 저 id를 통해서
// 자바스크립트에서 내가 원하는 태그들을 쉽게 찾기 위해서 묶어주는 것 같음.

// input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까
// 자바스크립트로 그 기능 구현하기

// 그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기

// 1. const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기

// 2. 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능

// loginButton.addEventListener("click, onLoginBtnClick);

// 3. 함수 만들기
// function onLoginBtnClick(){
// console.log(loginInput.value);
// }

// input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.