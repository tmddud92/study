const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

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
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // forEach는 function을 실행하게 해주는데 array에 있는 각각의 item에 대해서 실행
}
// 1. toDos = [];
// 앞으로 저장될 항목들이 array 형식을 취하도록 괄호를 명명

// 2. ```function saveToDos() {
// localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }```

// localStorage.setItem의 작성방법을 되돌아보면 이해가 됨
// ```localStorage.setItem('keyName','keyValue')```
// ```localStorage.setItem('userName','Nico')```
// 이게 어플리케이션 스토레이지에서 확인해보면
// userName, Nico 로 표기되니까.

// 즉, JSON.stringify 를 이용해서 'keyValue' 의 '' 를 만들어주었고,
// 그 안에 []; 를 넣어준거임.
// 결국 function saveToDos를 풀어쓰면 ```localStorage.setItem('todos', '[]')``` .

// 3.```function handleToDoSubmit(event) {
// event.preventDefault();
// const newTodo = toDoInput.value;
// toDoInput.value = "";
// toDos.push(newTodo); // [] 안에 value 값을 계속 넣어줌.
// paintToDo(newTodo);
// saveToDos(); // toDos가 [] 모양을 취하니까 결국 어플리케이션 상에서 배열(array)과 같은 형태를 취함.
// }```


// 1. To-Do-List 작성시 localStorage 에 저장이 됩니다.
// 2. 근데 저장이 될때 string data type 으로 저장이 되요. (예: "[a,b,c,d,e]")
// 3. 그래서 JSON.parse()를 통해 string data type을 object로 바꾼거에요. 근데 이 Object는 Array 같이 바뀌었어요. 즉 index를 통해 value를 access할수 있어요
// 예: "[a,b,c,d]" (string) => [a, b, c, d] (array);
// array[0] = a; array[1] = b; array[2] = c; array[3] = d
// 5. array 형태가 된 값을 parsedToDos 라는 const variable 에다가 넣어놨어요.
// 6. 이 상태에서 parsedToDos 는 array 형태라고 가정했을때 .foreach() 라는 function 을 사용할수 있는데 이건 mdn 웹사이트 가면 나오지만 그냥 단순히 array 에 들어있는 모든 값을 iterate (순찰(?)) 할수 있는 function 입니다.
// 7. 즉 index 0 부터 마지막 index 까지 한바뀌 도는건데 돌면서 그 값들을 item 라는 곳 또는 element에 (이름은 정하기 나름) 저장이 되는거에요.
// ex)
// Array = [ a, b, c, d]
// Array.foreach( (item) => console.log(item))
// // output:
// a
// b
// c
// d
// 여기서 부터 설명이 좀 어려운데 밑에 있는 웹사이트 가서 editor로 좀 놀아보시면 .foreach()가 이해 되실거에요. for loop 이나 while loop 으로 할수 있는 기능을 더 짧은 코드로 할수 있게 만든것 같아요 ^^
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach