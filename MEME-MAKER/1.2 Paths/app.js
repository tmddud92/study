const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();

// 사실 사각형을 그리려면 기본적인 단계들을 하나씩 거쳐야 함
// - 사각형 선 그리기: ctx.rect(x, y, w, h);
// - 선의 색이 적용되지 않아서 보이지 않는다
// -> 다음 줄에 ctx.stroke() / ctx.fill() 해서 테두리만 그리거나 채울 수 있음
// - 끊어가기를 원하는 곳 맨 앞에 ctx.beginPath();추가해 새 경로 만들기.

// *요약
// - canvas에서 그림을 그릴 때는 단계별로 진행 필요
// - 그린 그림들의 경로를 나눌 수 있음
// -> 새 경로 시작하기: beginPath()

// CanvasRenderingContext2D.rect()
// 너비와 높이로 결정되는 크기로 (x, y) 위치에 사각형의 경로를 만듭니다.

// CanvasRenderingContext2D.fillStyle
// 도형 내부에 사용할 색상 또는 스타일. 기본 #000(검은색).

// CanvasRenderingContext2D.beginPath()
// 하위 경로 목록을 비워 새 경로를 시작합니다. 새 경로를 만들려면 이 메서드를 호출하세요.

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D