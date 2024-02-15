const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();

// 집 만들기 🔨🏠

// - ctx.fillRect(200, 200, 50, 200); → 왼쪽 벽 만들기
// - ctx.fillRect(400, 200, 50, 200); → 오른쪽 벽 만들기
// - ctx.lineWidth = 2; → 선 굵기 조절
// - ctx.strokeRect(300, 300, 50, 100); → 문 만들기
// : strokeRect()는 선만 그려주고 채워주지 않는.
// - ctx.fillRect(200, 200, 200, 20); → 천장 만들기
// - ctx.moveTo(200, 200); → 지붕 만들기 위해 연필(좌표) 이동
// - ctx.lineTo(325, 100);
// - ctx.lineTo(450, 200);
// - ctx.fill();

// 다 채워진 게 보기 좋으니까, strokeRect를 fillRect로 변경해줌.
// - ctx.fillRect(300, 300, 50, 100);