// console.log는 콘솔에 결과를 보녀주기위한 것
// 브라우저에서 결과를 보여주는 alert처럼 
// 하지만 plusResult를 확인해보고자 한다면 undefined(정의 안 됨)인것을 알수있다.
// function을 const, let, var 같은 variable(변수)에 할당하면
// 그 variable은 plus function의 결과 type를 가지게 된다.

// return 은 function의 외부에서 value를 얻는것.
// return을 하면 function은 작동을 멈추고 결과 값을 return하고 끝나버림
const calculator = {
    plus: function (a, b) {
        console.log("hello");
        return a + b;
        console.log("bye bye");
        // return 하는 순간 function이 종료되기 때문에 byebye 출력 안됨
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator2.plus(2, 3); 
const minusResult = calculator2.minus(plusResult, 10);
const timesResult = calculator2.times(10, minusResult);
const divideResult = calculator2.divide(timesResult, plusResult);
const powerResult = calculator2.power(divideResult,  minusResult);
// 대체하기(replacing)
// plusResult의 마지막에 저장되는 값을 알고 싶다면
// plue function을 보고 a, b를 2, 3으로 대체하고
// 나온 return 값을 통해 우리는 추측을 할 수 있다.
// function은 계속 남아있는게 아닌, 실행 후 사라지고 마지막엔 결과를 남김
