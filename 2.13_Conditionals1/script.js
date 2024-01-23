const age = prompt("How old are you?");
//prompt는 사용자에세 창을 띄울 수 있도록 해준다.
//prompt를 안쓰는 이유는 답을 할때까지 코드의 실행을 멈추고, message가 별로 안 예쁘고 css적용불가
console.log(typeof age);
//typeof : variable의 type을 보는 방법
//prompt();에서 숫자를 입력해도 string이라고 뜬다. 
//string이 디폴트이기 때문이다.

//type 변경하는 방법
//parseInt() string => number
console.log(typeof "15", typeof parseInt("15"));

console.log(age, parseInt(age)); //앞 age = string, 뒤 age = number
// 콘솔에서 그냥 숫자를 적어넣으면 string이다.
// number로 바꾸면 그 숫자가 어떤 수보다 큰지 작은지 알 수 있게된다.

const age1 = parseInt(prompt("How old are you?"));
// function 은 내부에서 외부로 실행
// prompt로 나이를 받아온다.prompt("How old are you?")
// 받아온 나이를 parseInt로 number로 변경
console.log(age1);