const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000);

// interval : 매번 일어나야 하는 무언가
// 매 2초마다 주식시장을 확인한다거나,5초에 한번씩 알어나야하는 작업 등 
//기능을 제공하는 tool이 setInterval()이야.
// setInterval(function, function 간격을 몇 milliseconds로 할지)

