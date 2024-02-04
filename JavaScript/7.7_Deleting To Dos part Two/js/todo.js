const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = [];
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    //span.innerText = newTodo;
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
    // toDos.push(newTodo);
    // paintToDo(newTodo);
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
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// boolean(참 거짓)을 이용한 함수sexyfilter를 만듦

// 그 안에 !== (not) 을 활용해서 우리가 삭제하고픈 애를 뺀 나머지만 return 하게 한다.

// ```
// const life = ["희망", "불안", "행복", "비꼬는 마음"]
// function goodLife(item){return item !== "비꼬는 마음"}
// //life = ["희망", "불안", "행복"]
// ```