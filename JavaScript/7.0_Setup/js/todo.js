const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newRoDo = toDoInput.value;
    // input의 현재 value를 새로운 변수에 복사하는것.
    // 이후에 우리가 무엇을 하든 newToDo변수와는 아무 상관이 없다.
    // 입력후 해당 칸을 비워둘것이기에 사라지게 하기전 값을 저장
    toDoInput.value = "";
    // Enter를 누르면 입력값이 사라지게 하기위해.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 1. html
// 1) Todo-list 를 만들기를 원하니 html 에 form 태그로 구조를 만들어 준다. 나중에 JavaScript에서 만지기 쉽게 id는 todo-form으로 설정
// 2) form 자체는 submit이라는 기본 기능을 내장하는 하나의 묶음 밖에 되지 않는다. 우리는 이용자가 todo-list 에 무언가 기입하는 것을 원하기 때문에 form 태그 안에 input 태그를 넣어 'text'를 타이핑할 수 있는 기능을 추가한다.
// 3) 그 밑에 ul 태그를 생성하여 todo-list에 작성 된 text가 저장 및 나열될 수 있게 한다.

// 2. JavaScript
// 1) 앞에 html에서 만든 구조 3가지 ('todo-form', 'todo-form 안의 input', 'todo-list') 에 접속하기 위해 항상 길게 타이핑하는 것은 비효율적이므로 단축을 위해 각각 변수로 설정한다.
// 2) 이전 greeting 강의에서 form 태그에서의 event는 submit를 발생시키고, 브라우저는 기본값으로 설정되어 있는 새로고침을 하게 된다. 우리는 todo-list를 작성한다고 새로고침 되는 것을 원치 않기 때문에(todo-list를 1,000번 작성한다고 가정한다면 불필요한 새로고침이 1,000번 발생하고 1,000번의 랜덤한 이미지가 로드될 것이다. -> 데이터적으로 비효율적, 시각적으로 불편)
// event.preventDefault() 로 기본값을 없애준다.
// 3) text 상자 안에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해 toDoInput.value = ""; 을 통해 value를 빈 텍스트로 한다.
// 4) text 상자를 비게 하는 것은 좋은데 그 전에 이용자가 입력한 텍스트를 저장해야 나중에 ul태그 안에 사용할 수 있기 때문에 toDoInput.value = ""; 로 기입한 텍스트가 사라지기 이전에
// const newTodo = toDoInput.value; 를 정의하여 기입한 텍스트가 newTodo라는 값에 저장되게 한다.
// 5) 앞의 세 가지 동작(기본값방지, 텍스트 저장, text상자비우기)는 한번에 이루어지는 세트이기때문에 효율성 및 편의를 위해 함수로 묶어준다.
// function handleTodoSubmit() {
// event.preventDefault();
// const newTodo = toDoInput.value;
// toDoInput.value = "";
// }
// 6) todo-form 안에서 submit이 발생하는 특정 상황에서 함수handleTodoSubmmit을 실행 시키기 위해
// toDoform.addEventListner("submit", handleTodoSubmit); 을 기입한다.
// (함수 handleTodoSubmit이 항상 실행되고 있는 상태라면 text 창은 항상 비어있는 상태 일 것이기 때문에)