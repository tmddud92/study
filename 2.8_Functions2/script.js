// function에게 정보를 보내는 법
// 인수를 받기 위해서 함수를 선언할 때 function 함수명(variable명) { } 를 작성
// 데이터를 받는 방법은 ()에 데이터를 추가하는 것
// 첫번째 argument로 어떤 데이터가 들어오면 
// nameOfPerson이라는 variable 이름을 쓰게 된다.
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 25);
sayHello("lynn", 21);

// sayHello function은 2개의 argument를 받고 있다.
// 첫번째는 string이 되고 두번째는 age가 된다. 
// nameOfPerson과 age는 function의 body에만 존재

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
// console.log(firstNumber); 는 에러가 난다.
// firstNumber는 이 블록 밖에서 존재할 수 없기때문

function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
};
console.log(player.name);
player.sayHello("lynn");