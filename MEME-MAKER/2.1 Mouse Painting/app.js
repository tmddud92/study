const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.fill();
    return;
}
ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
isPainting = true;
}
function cancelPainting() {
isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

// function onMove 에서
// if문과 ctx.moveTo(event.offsetX, event.offsetY); 중
// if문을 먼저 작성하는 이유

// if문으로 return하고 나면 ctx.moveTo 함수가 불필요하게 실행되지 않아서 인 것 같아요.
// 실상 우리눈에는 보여지는게 없지만 if문으로 return먼저하지않으면 moveTo가 항상 동작하는거라서요.

// 좀 찾아보니 'break는 해당 if문만 종료시키지만, return은 해당 메소드가 호출된 곳까지 종료시킨다. 즉, if문을 포함한 메소드 자체를 종료시킨다.'라고 하네요!

// if문 이하를 실행시키지 않고 메소드를 종료시키는게 맞는거 같습니다.