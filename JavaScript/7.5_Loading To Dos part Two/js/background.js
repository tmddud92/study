const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// 기본적으로 우리가 했던건 Array에서 랜덤하게 한가지 element를 골라내는 거였어.
// 이게 background.js랑 quotes.ks에서 사용하던 방식이야.

// 가장 중요한 부분은 숫자를 고르는 부분이야. 랜덤한 요소가 나오는 거니까.
// Math.random()은 랜덤한 숫자를 가져다줘
// 0과 어떤 수 사이의 랜덤 수를 가져오기위해서는 그 수를 곱하면된다.
// 우리는 우리가 가진 Array의 길이 만큼을 곱해줬다.
// Array는 내부에 item들을 가질 수 있고 
// 그 안에 몇개의 item이 있는지 알아낼 수 있다.

// 만약 5개의 item이 있다고 해도 우린 절대 5가 필요하지 않다.
// 실제로 필요한건 숫자 4이고 Array의 마지막 element에 접근할 수 있는 수.
// 5를 곱한다면 결과로 5를 볼수는 없다. 5가 최고치 숫자이기에.하지만 괜찮다.
// 길이가 5인 Array가 있다고 하면 이걸로 마지막 item을 가져올수있다.

// item이 5개 있는 Array에서 마지막 item을 가져오려면 필요한 숫자는 4.

// append는 가장 뒤에, prepend는 가장 뒤에 오게 하는것

// 1. Math 객체 기능
// Math.random() 0부터 1사이 무작위의 값을 반환해줌
// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림

// 2. JS에서 html 요소를 생성
// createElement(" ")
// 예를 들어,
// document.createElement("img")일 경우 html 내에 img 태그를 생성

// appendChild()
// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
// prepend()
// 반대로 앞에서 기입