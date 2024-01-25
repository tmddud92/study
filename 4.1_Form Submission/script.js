// 이번 강의에서는 username의 유효성을 검사할거야.
// 우선 username이 비어있으면 안되고, 너무길어도 안된다.
// form안에서 엔터를 누르고 input이 더 존재하지 않는다면
// 자동으로 submit된다는 규칙
// form 안에 있는 버튼을 눌렀을때, form이 자동으로 submit된다.
// 더이상 click에 신경 쓸 필요가 없다.
// 이제 우리의 관심사는 form을 submit 하는것.
// 브라우저가 새로고침 하지않고 user정보를 저장하게 하고싶다.
// HTML의 도움을 활용하려면 input을 form 안에 위치시켜야 한다.
// 그리고 input을 form안에 넣었을 경우 우리가 엔터를 누를때마다
// form은 자동으로 submit되고있다. 이건 우리가 원하는게 아님.
// form이 submit 될 때마다 페이지는 새로고침된다.
// 웹사이트 전체를 매번 새로고침 하고 싶지 않다.

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length < 15) {
    //     alert("Your name is too long.");
    // }
    // JS로만 작업 시에는 해야한 하는 작업이지만
    // 브라우저 자체의 기능을 사용할 수도 있다.
    console.log(username);
    // username을 아직 받는다는 걸 확인하기 위해서 
    // console.log(username)만 남겨둔다.
}

loginButton.addEventListener("click", onLoginBtnClick);

// required: 필수입력 항목으로 만들어 줄 수 있다.
// maxlength : 자체적으로 최대 글자구를 15로 조절할 수 있다.
// 문제는 Log In 클릭시 HTML에서 확인 작업을 안한다는 것
// 이유는 form이 아니기때문 (div)
// input의 유효성 검사를 작동시키기 위해서 input이 form 안에 있어야 한다.
// 버튼 클릭시 마다 페이지가 새로고침되고있다.
// 이유는 form이 submit되고 있기 때문.
// input안에 있는 button을 누르거나 type이 submit인 input을 클릭시
// 내가 작성한 form이 submit된다.
// 그럼 js쪽에서의 click은 무용지물, 신경쓸 필요가 없어진다.
// 입력 후에 엔터를 눌러도 form은 submit되고 있다.


// form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.
// input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.
// 문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

// 15.but form이 submit될때마다 새로고침이 되기때문에 이것은 우리가 원하는게 아니다. 그러한 문제 때문에 form이 submit 되는걸 막아줄것임
// 14.*규칙 form안에 input을 쓰고 엔터나 submit을 누르면 자동으로 제출됨. click이 필요없고 form을 submit하는것이 중요.->브라우저가 새로고침 하지 않고 user정보를 저장하도록 하고싶은것
// 13.12처럼 html요소에 submit을 넣었기때문에 더이상 addEventListner가 필요하지 않다. 입력후에 클릭이 아닌 엔터를 눌러도 form은 submit이 되기때문 *반드시 form안에 input을 넣어야함
// 12.html에가서 button을 없애고 input type을 submit value값에 login을넣는다
// 11.현재 필드값을 입력하지 않으면 요청이 들어오고 문자는 15자 이상을 쓸수 없게됨. 그리고 입력을하고 버튼을 누르면 새로고침이 실행되고 값이 사라짐.
// 10.if else 문은 선호하는 방식이 아니라서 지우고 html에 input 창에 requird를 적고 maxlength="15"를 적는다. if else 문 없에고 username에 대한 값을 console.log에 넣는다 아직 username을 받는단걸 확인 하기 위해
// 9.username.length를 통해서 string의 길이를 구한다. > 15를 통해서 username의 길이가 15보다 길다면이라는 조건설정을 해준다.
// 8.문자를 입력하지 않았을때 please wirte your name 이라 하고 문자를 입력했는데 15글자를 넘어서면 안됨 그렇담 string의 길이를 어떻게 알 수 있을까? ->
// 7.console.log를 유저가 볼 수 있게 alert로 바꾸자
// 6.console.log("hello",loginInput.value)를 const value = loginInput.value로 변수에 할당 해준다. + if 문을 통해서 value값이 없을떄 다음과같이 행동.
// 5.username의 유효성 검사 뜻 -> 조건에 유효한지 검사 비어서도 안되고 너무 길어서도 안되는 문자를 만든다.
// 4.("hello",loginInput.value)를 통해서 (hello loginInput.value값을 얻는다) ->단 hello를 한후 값을 입력안하면 아무것도 뜨지 않음 이것을 if else를통해 해결해보자
// 3.클릭했을때 함수를 쓰고 loginInput에 대한 value값을 얻는다. value값이란 input창에 다다다다적으면 다다다다라는 값이 나옴. console.log(loginInput.value)
// 2.dir을 통해서 loginInput의 내부를 보여준다
// 1.클릭 이벤트를 통해서 클릭에 대한 작동이 됨
// console.dir(loginInput) ->console.log(loginInput.value)

// 모르는 지식
// 태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시합니다.
// required 속성이 제대로 동작하는 요소의 type 속성값은 다음과 같습니다.
// - checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url
// required 속성은 불리언(boolean) 속성입니다.
// 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 됩니다.