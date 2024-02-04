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


// 1. 배열의 각각을 구분해주기 위해서 text와 id 값으로 저장할 필요가 있음.
// ex) [{text: hi, id:1651114465024}]
// 현재는 [a,b,c,d,e] 이런 식으로 저장되어 있는 형태임.

// 2. toDos에 newToDo(문자)를 push 하는 게 아니라 newTodoObj라는 객체를 push 할 것임.
// newTodoObj는 text와 id 값을 가지고 있음.
// const newTodoObj = {
// text: newToDo,
// id: Date.now(),
// };
// 그리고 painToDo(newTodoObj)를 해줌.

// 3. 이때 paintToDo를 하는 과정에서 화면에 object가 출력되는 문제가 생김.
// 화면에 object가 아닌 text를 출력하기 위해서 span.innerText = newToDo.text로 바꿔줘야 함.

// 4. li에는 id 값을 넣어줌으로써 각각을 구분할 수 있게 해준다.
// li.id = newToDo.id;