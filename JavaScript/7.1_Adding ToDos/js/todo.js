const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    // toDo를 그리는 역활을 담당함.
    // handleToDoSubmit가 paintToDo를 사용하게 될거야.
    // newTodo 는 input의 value를 비우기 전의 값을 나타내는 string.
    console.log("i will paint", newToDo);
    // 다음 그 입력값을 paintToDo에 넣어서 호출하는것.
    const li = document.createElement("li");
    // 우리는 li(list item)를 만들어서 그 li를 ul(list)에 추가할것이다.
    // 변수의 이름을 li로 하지 않아도 된다. 지금은 이해하기 쉬우려고 같은 이름 사용
    const span = document.createElement("span");
    // li를 만들기보다는 span을 이용해서 li를 만들거야
    // 나중에 toDo를 삭제하는 button을 만들것이기때문
    // 때문에 li를 만들고 li 내부에 span도 만들것이다.
    li.appendChild(span);
    // 이 span은 li내부에 있지 않다.넣어주기위해 한것.
    // 이제 li는 span이라는 작식을 가지게 되었다.
    span.innerText = newTodo;
    // span의 텍스트는 handleToDoSubmit에서 온 newToDo텍스트가 되는것.
    toDoList.appendChild(li);
    // 이제 새로운 li를 list(toDoList)에 추가하는 것.
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// input에 required를 넣었기때문에 HTML에서 field를 보호하는중

// 0. 이전 영상에서 우린 hadle.ToDoSubmit() 함수를 만들어
// 1) event.preventDefault(); // 새로고침을 막고
// 2) const newTodo = toDoInput.value; // submit하는 텍스트를 저장하고
// 3) toDoInput.value = ""; // 텍스트상자 안의 텍스트를 초기화시켰다.

// 이제 우린 방금 전 입력한 텍스트가 페이지에서 보여지는 것을 원하기 때문에 그에 맞는 코드를 작성할 것이다.

// 1. html 돌아보기
// 우린 이미 html에 todo-list라는 id를 가진 ul태그를 작성해 놓았고, 새로운 텍스트가 입력 될 때마다 그 안에 li 태그를 생성하여 나열하고 싶다. 이것을 JS에서 관여할 수 있도록 코드를 짜는 것이 필요하다.

// 2. JavaScript - todo list를 웹페이지에서 시각화하기
// 1) const li = document.createElement("li"); // li를 입력했을 때 html에서 li태그를 생성하게 명령한다.
// 2) const span = document.createElement("span"); // span이 정확히 왜 필요한지는 아직 잘 모르겠지만, 니꼬의 말에서 유추해보면 나중에 리스트 삭제 시 필요한가보다. 아무튼 span이라는 const가 html 내에서 span태그를 만들게끔 한다.
// 3) li.appendChild(span); // li 태그 안에 자식을 span 태그로 하게끔 한다. 아직 span을 굳이 왜 만드는지는 정확히 이해 x


// 4) span.innerText = newTodo; // span이라는 태그 안의 텍스트가 앞에서 설정한 new Todo라는 객체가 되도록 한다. newTodo는 텍스트에 입력한 value값
// ex) 텍스트 상자 안에 "안녕하세요"라고 입력하면 newTodo는 "안녕하세요"이므로 span안의 텍스트는 "안녕하세요"가 될 것이다.
// 5) toDoList.appendChild(li); // html의 ul 태그 안에 li 를 속하게 한다. (span을 li에 속하게 한 것과 동일)

// 3. 함수 piantTodo(newTodo)를 함수 handleTodoSubmit()에 추가
// 우리가 텍스트를 기입하고 submit 할 때마다 원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
// 기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는 기능까지만 했다면, paintToDo(newTodo)추가 후에는 제출한 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고 span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.

// 4. 하지만 우리가 만든 todo list 는 아직 삭제를 하지 못하고, 새로고침시 초기화 되어 화면의 todo list가 날라가 버린다. 다음 영상에서는 니꼬가 이 부분에 대해 알려줄 것 같다. 아무래도 이전에 배웠던 조건문 if를 이용한 tag 삭제 or 생성 그리고 생성된 span value를 localStorage에 저장 하는 방식으로 진행하지 않을까 싶다.



// append()가 추가할 수 있는 종류가 더 많아요. append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있어요. :)
// li.append("추가해주세요") → (가능)
// li.appendChild("추가해주세요") → (불가능 - typeError)

// 그리고 console.log로 두 개를 찍어보면 append()하고 appendChild()가 다르게 나와요!