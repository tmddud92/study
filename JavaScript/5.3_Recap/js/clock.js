const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// setInterval()은 정한 시간마다 function을 실행시키게 해줘
// 여기선 getClock을 어떤 시간 간격이든 ms단위로 설정

//setInterval()을 쓰지 않으면 딱 한번만 실행하고 한번만 화면에 표시하고 끝난다.


// 왜 Date라는 객체를 바로 안쓰고 new로 새로운 객체를 만드는건가요?

// console에 typeof Date;
// 를 입력해보시면 function 이라고 알려줍니다.
// JavaScript에는 생성자 함수라는 것이 있는데요.
// new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
// 이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다.
// 생성자 함수는 arguments를 받을 수 있습니다.
// console 에 const date = new Date();
// 를 입력하여 date 변수를 선언하시고, typeof date;
// 를 입력해보시면 object를 반환하는 것을 볼 수 있습니다.
// 이렇게 생성한 date 객체를 우리는 이전시간에 배웠던대로
// object.property 와 같은 형식으로 사용할 수 있습니다.