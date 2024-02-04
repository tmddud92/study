const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event){
    li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    console.log("i will paint", newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}


// 학습목표 : localstorage.setItem('keyName','keyValue')
// 우리는 로컬저장소의 keyValue를 배열로 만드는 방법을 이해하고 이를 활용할 수 있다.

// keyName 에는 하나의 keyValue만 저장된다.
// 하지만 keyValue 를 'toDos'라고 하고, toDos = [] 라고 하여 우리는 그 안에 하나 이상의 정보를 넣을 수 있게 한다.
// 👉🏻```function saveToDos() {
// localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }
// === localstorage.setItem('todos','[]')
// ```

// toDos.push(newTodo)로 이 하나의 keyValue라는 상자 안에 하나 이상의 정보를 담아버리기~~

// 그리고 다시 저장된 것을 가져올 때에는
// ```
// const savedToDos = localStorage.getItem(TODOS_KEY);
// //getItem으로 호출하면 'value' 형태로 호출된다. '' 가 붙은 상태로 호출된다는 말.
// if (savedToDos !== null) {
// const parseToDos = JSON.parse(savedToDos); //getItem의 '' 를 parse 로 삭제.
// toDos = parseToDos; //[] = ['a','b','c']
// parseToDos.forEach(paintToDo);
// }
// ```