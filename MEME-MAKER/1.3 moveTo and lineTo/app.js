const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();


// 사실 rect 조차 shortcut function이었다는 점..(빠밤)
// 더 작게 나눠진 function을 써보자! -> moveTo / lineTo

// - moveTo(x, y); -> 브러쉬의 좌표를 움직여줌
// - lineTo(x, y) -> 라인을 그려줌

// *수평인 직선을 그리려면 두 y값이 같아야 한다
// *라인이 끝난 점이 다음에 시작하는 브러쉬 좌표이다
// * 정리하자면 fillRect = fill+Rect = fill + (moveTo+lineTo)

// + (연습) 선으로 사각형 그리기

// ctx.moveTo(50, 50);
// ctx.lineTo(100, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(50, 100);
// ctx.lineTo(50, 50);
// ctx.fill();