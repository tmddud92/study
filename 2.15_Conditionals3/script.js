const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} else {
    console.log("You can't drink");
}

// else if : if가 false 일때 한가지 condition을 사용할 수 있게한다.
// else 는 위에 if와 else if가 false 여야 작동

// &&(and)의 역활은 앞의 조건과 뒤의 조건이 모두 true여야 true.
true && true === true
false && true === false
true && false === false
false && false === false

// ||(or)의 역활은 둘 중 하나만 true여도 true.
true || true === true
false || true === true
true || false === true
false || false === false
