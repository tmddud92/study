const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// 우리가 지정한 리스트들이 새로고침 되었을 때 초기화되지 않으려면 저장을 하는 것이 중요해 

// 어디에 저장을 할거냐면 localStorage!

// web상에다가 우리의 데이터들을 저장할 수 있는거지

// 어떻게 저장할거냐면 localStorage.setItem("키", "값");

// 키에는 내가 저장하려고 하고 싶은 db 덤탱이에 이름을 정해주는 것

// 값에는 각각의 데이터 값들을 의미한다.

// 값에 여러개의 데이터를 넣고 싶은데 어떻게 해?

// 배열 형식으로 넣으면 돼 근데 배열형식으로 그냥은 안 넣어져

// 그래서 string 형식으로 바꿔줘야해

// 배열을 "값" 부분에 저장하고 싶으면 JSON.stringify

// 을 사용해서 string형식으로 바꿔준다

// 그럼 "["a","b","c"]" 요로케 된다.

// 근데 이러면 배열 형식을 사용할 수 없잖아.

// 그래서 JSON.parse()를 사용하는 것이다.

// 그럼 string이 아니라 우리가 원하는 배열의 모습이 될테니까!!!

// ["a","b","c"] 요로코롬 이뿌게

// 근데 배열로 하면 삭제를 할 때 중복된 내용의 데이터 값들이 들어있거나 그러면

// 값들을 찾기 어려워지니까 id값을 지정해줄 필요가 있다.

// 근데 배열에 id값을 어떻게 정해줘?

// 그래서 우린 객체로 바꿔준다.

// {text: "a", id= ""} 이런식으로

// id는 자동으로 중복되지 않게 만들어줘야 하는데 좋은 방법이 있다.

// 그것이 바로 Date.now()이다.

// 이걸 사용하면 중복될 일이 없음 이 아이디값을 li에 id값과 동일시해주고

// li의 id값을 선택해서 그 해당 데이터를 삭제한당