const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고싶을때 사용
// 이건 loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자.

function onLoginSubmit(event) {
    event.preventDefault();
    // 기본동작은 실행되지 않도록 막아주고
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // hidden이라는 class name을 더해줘서 form을 숨기고
    const username = loginInput.value;
    // 유저의 이름을 변수로 저장해주고 
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    // 그 이름은 h1에 넣어줄거야.
    // 위 두가지 방법 모두 똑같은 동작을 수행
    // 만약 변수와 string을 결합하고 싶다면 또는 변수를 string안에 넣고 싶다면
    // ${변수명} 이렇게 표현하면 끝이야.
    // ``백틱 기호 이걸 사용해야함.""쌍따옴표나 ''따옴표가 아님.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // hidden class를 지워서 보이게 하고싶어.
    // 그런데 hidden을 2번이나 사용했기때문에 따로 만들어줄거야.
    // "hidden"을 HIDDEN_CLASSNAME로 변경
}

loginForm.addEventListener("submit", onLoginSubmit);

// const HIDDEN_CLASSNAME = 'hidden';
// 관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

// 'hello!' + username + nice to meet you!; 는
// `hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.

// HTML의 어느 한 부분을 잡고 거기에 class 를 추가하거나 빼고 싶을 때는
// classList.add.('classname')
// classList.remove.('classname') 를 사용한다. 
// 클래스를 마음대로 붙였다 뗄 수 있게 해준다. 
// 위에서는 display:none;이 되어 있기 때문에 해당 html 태그(?)를 hide or show 할 수 있다.

// 이 강의에서 한 것.
// 1. 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
// 2. loginForm을 감추고(hidden)
// 3. hidden 됐던 A 문구가 나타나고(remove hidden)
// 4. A 문구와 username을 합쳐서 완전한 문구를 완성한다.

// -> 이렇게 동작을 하나하나 코딩해주는구나~ 재밌다~