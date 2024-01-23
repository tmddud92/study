const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100){
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} else {
    console.log("You can't drink");
}

// if문을 쓰떄 주의할것.
// 코드는 위에서 아래로 실행되는것 생각하기
// 위에서부터 if문이 false일경우 아래에 있는 다음 if문으로 이동
// 코드 실행을 위해 순서 잘생각하면서 작성

// 한 개의 =는 value를 할당
// 두 개의 ==는 값만을 비교
// 세 개의 ===는 유형도 비교, 주로 사용

if((a && b) || (c && dd)){

}
// 우선 (c && d)부터 계산된다. true나 false가 된다.
// (a && b)계산 후 true 혹은 false가 결정된다.
// 나온 결과를 보고 true, false를 가려낸다.
