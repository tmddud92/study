//console.log 하지 않기!
//console.log는 console에 무언가를 log 하는 것 (기록하여 보여줌).
//console.log는 console에 결과를 표시해주는데 결과를 가지고 아무것도 하지 않는다.
//우리가 원하는것은 결과를 (콘솔이 아닌)화면에 출력하거나,
//무언가를 변경하거나, data를 받아서 사용하기를 원한다.

//=> returns 사용하기
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

// 실제로 plus의 값은 undefined.
console.log(calculator.plus(1, 2));

// 나는 이 function을 작동시키면서 console에 표시하는 건 원치 않아.
// 나는 이 계산에 결과를 코드로 받고싶어.
// 함수가 그냥 어떤 기능을 수행하는 것이라고 생각하기보단
// 어떤 일을 수행하고 그 결과를 알려주는 것이라고 생각해
// 조용히 일을 수행할 뿐만 아니라 나에게 결과를 줘
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);


//결과는 98이 아닌
//function 안에서 무언가를 return 하면 누군가 function을 실행 할 떄 이것(calculateKrAge(age))을 대체할거야.
// 어떤 작업을 처리하고 그 결과를 return하기 위해 function을 사용할거야.
// 이게 function이 function의 밖과 소통하는 방법
// 무언가를 return하면 그 function이 return하는 값과 같아질거야.

const age1 = 96;
function calculateKrAge1(ageOfForeigner) {
    ageOfForeigner + 2;
    return "hello";
}

const krAge1 = calculateKrAge1(age);
console.log(krAge1);

//결과는 98이 아닌 "hello"

const calculator1 = {
    plus: function (a, b) {
        return a + b;
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
    powerof: function (a, b) {
        return a ** b;
    },
};

calculator1.plus(1, 2);
calculator1.minus(1, 2);
calculator1.times(1, 2);
calculator1.divide(1, 2);
calculator1.powerof(1, 2);
// return하는 것의 포인트는 console.log를 하는 것이 아니라 
// 궁극적으로 이 결과값을 화면에 보여줘야 함

const calculator2 = {
    plus: function (a, b) {
        return a + b;
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
// function이 무언가를 return 하기때문에 이 function을 호출하는 코드가 그 function의 반환 값이 된다.
const plusResult = calculator2.plus(2, 3); 
const minusResult = calculator2.minus(plusResult, 10);
const timesResult = calculator2.times(10, minusResult);
const divideResult = calculator2.divide(timesResult, plusResult);
const powerResult = calculator2.power(divideResult,  minusResult);
// return으로 값을 받아와서 '상호 의존적'이 가능
// function 내부에서 console.log 하는 것과는 큰 차이가 있다.
// function의 외부에서 값을 얻은 뒤에 그 값으로 원하는 모든 것을 할 수 있다.
