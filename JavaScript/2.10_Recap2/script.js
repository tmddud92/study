// list 쓰면 항목들에 공통된 맥락이 있다는점이 좋다.
// ex) const days = ["mon", "tue", "wed"]
// 이것들은 같은 종류, 즉 한 주의 요일들이란 것을 알 수 있다.

// 하지만 의미가 있는 property를 저장할때 문제 발생
// object는 연관되어 있는 property들을 그룹으로 묶어서 저장할때
// player라는 object의 property를 작성할 수 있다.
// player라는 variable 안에 name이라는 일종의 variable을 만든 것
// 정식 명칭은 variable이 아니라 property
const player = {
    name:'Nico',
    age: 98,
};
console.log(player, console); // console도 object
// object 중 한개의 element를 가져올 수 있다.
console.log(player.name);
// array처럼 update도 할 수 있다.
player.name = "nicolas";
console.log(player);
// object 안에 새로운 item을 만드는것도 가능
player.sexy = "soon";
console.log(player);

// function은 어떤 코드를 캡슐화해서 반복 사용 가능하게 해줌
// 특정 input을 기반으로, 같은 행동을 실행
function plus() {
    console.log(2 + 2);
}
plus();
// function 안에 미리 data를 넣어두는 것보다 밖에서 data를 넣을 수 있게 하는것이 좋다.
// function의 목적은 여러가지 일을 같은 코드로 하기 위함이기 때문
// 예를 들어 위 function의 목적은 두 개의 수를 더하는것
// 우리가 할 것은 function으로 data를 보내고 
// function이 그 data를 받아서 그것들로 무언가를 할 수 있도록 하는것
alert("lalalala");
//alert function으로 data를 보내는 예시

// function 안에서 data를 받는 방법은 ()안에 무언가를 적는 것
// 예를 들어 두가지의 숫자를 받고싶다면
// 이 경우 이름을 꼭 a와 b로 써야하는것은 아님
// data를 받으면 대체되는 place holder(자리 표시자)일 뿐
function plus1(potato, salad) {
    console.log(2 + 2);
}
plus1(5, 10);
plus1(5, 10);

// 지금 이 plus1 function은 place holder로 data를 받을 준비만 되었있고 사용하지는 않음
// 그래서 적힌 숫자들을 place holder로 대체
function plus2(potato, salad) {
    console.log(potato + salad);
}
plus2(5, 10);
plus2(50, 100);
plus2(500, 1000);

// 아주 많은 argument를 보내더라도 문제되지 않음
function minusFive(potato) {
    console.log(potato - 5);
}
minusFive(5, 10, 15, 20, 25);

// potato는 function의 body에서만 사용가능
// function의 body는 {}로 줄러진 부분
// potato는 이 function 밖에서는 접근불가.정의(define)되지 않았기때문
// console.log(potato);

const calculator1 = {
    add: function (a, b) {
        console.log(a, b);
    },
};
// object(calculator)와 무언가(add)와 argument(5, 1)가 있는 우리만의 object를 만들었어.
calculator1.add(5, 1);
console.log();

//a+b, a-b, a/b, a**b 기능을 가진 function 만들어 보기.
const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    times: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    powerof: function (a, b) {
        console.log(a ** b);
    },
};

calculator.plus(1, 2);
calculator.minus(1, 2);
calculator.times(1, 2);
calculator.divide(1, 2);
calculator.powerof(1, 2);