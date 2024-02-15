const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();

// ctx.arc()를 하게 되면 현재 path의 마지막 좌표와 생성될 arc의 첫 번째 
// 좌표 사이에 ctx.lineTo()가 작동되어서 의도치 않은 선이 생긴다.

// 두 번째 눈을 그리기 전에 ctx.moveTo
// (두 번째 눈의 x 좌표 + 두번째 눈의 반지름, 두 번째 눈의 y 좌표) 
// 를 해서 문제 해결함

// CanvasRenderingContext2D.arc()
// 현재 경로에 원형 호를 추가합니다.

// Math.PI
// Math.PI 정적 데이터 속성은 원주와 지름의 비율을 약 3.14159로 나타냅니다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI