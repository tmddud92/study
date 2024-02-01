const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
setTimeout(sayHello, 5000);
//setTimeout(실행할 함수, 얼마나 기다릴지 ms);
setInterval(getClock, 1000);
//a 뭔가를 계속해서 실행하고 싶기에 interval로 수정
getClock();
//website가 load되자마자 getClock을 실행하고 또 매초마다 다시 실행되도록
setInterval(getClock, 1000);
