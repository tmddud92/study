//const는 constant(상수)라는 것이고, constant는 값이 바뀔 수 없다.
//let은 생성할 때 사용하는것
//많은 사람들은 const를 기본적으로 사용.
//만약 variable을 업데이트 하고 싶다면 let을 사용
//기본적으로 const를 쓰고 필요할 때만 let을 쓰되,var은 쓰지 말 것.
const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hell " + myName);

//앞에 let을 빼고 업데이트 내용작성, const는 업데이트 불가
myName = "nicolas";

console.log("your new name is " + myName);