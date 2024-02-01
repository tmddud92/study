// Function은 계속 반복해서 사용할 수 있는 코드 조각
// function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해줌

// Function이 없다면 복붙을 많이 하게 된다.
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Shigatsu");
console.log("Hello my name is Flynn");

// 전체 코드에서 바뀌는 부분은 이 끝의 이름들 뿐이다.
// 코드의 반복을 최소한으로 줄이고 싶어서 function을 만들었다.

// function 안에 실행하게될 코드 블록을 작성
// sayHello를 실행할 떄마다 안에 있는 코드 블록이 실행
// () 이 괄호 두 개가 function을 실행하는 방법
// function 선언 : function 함수명() {실행코드}
function sayHello() {
    console.log("Hello my name is ");
}

// function 실행 : 함수명();
sayHello("nico");
sayHello("dal");
sayHello("lynn");

// 인사 뒤에 이름이 들어가게 실행해야한다.
// 그걸 위해서는 argument(인수)라는 것을 보내야 한다.
// argument는 function을 실행하는 동안 어떤 정보를 function에 보내는 방법

