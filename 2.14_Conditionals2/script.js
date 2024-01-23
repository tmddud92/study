const age = parseInt(prompt("How old are you?"));
console.log(isNaN);
//isNaN : 이 function은 argument(인자)를 알려주면 boolean으로 알려준다.
// isNaN은 boolean으로 return(반환)해
// conditional(조건문)을 사용할때 유용

if(condition){
    // condition === true
} else {
    // condition === false
}
// condition은 boolean으로 판별 가능해야함

if (isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}

const age1 = NaN;

if(true) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}