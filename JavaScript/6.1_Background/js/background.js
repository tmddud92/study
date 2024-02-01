const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// 우리는 항상 html을 먼저 작성하고 
// Javascript를 사용해서 작성한 html을 다뤄왔다.

// 한 번도 Javascript에서 뭔가를 생성해서 
// 그걸 html에 추가해 본적이 없었다.

// 이번에는 그걸 해볼것이다!
// 일단 목표부터 설정하자.
// 우리의 목표는 html에 images를 만드는 거다.
// 하지만 html에서는 할 수 없다. 이미지 추가를 위해선 Javascript가 필요
// 왜냐면 랜덤 이미지를 보여줄것이기에 1이 될수도 2가 될수도 있다.

// createElement를 사용해서 img라는 element를 생성
// 하지만 저렇게만 해서는 어디에도 존재하지 않는 img가 만들어진다.

// src는 img파일이 들어있는 폴더의 이름을 써준다.
// src = "img/" 이런식으로.
// 다음은 `img/${chosenImage}` 로 변경후 string을 만들자.

// 다음은 bgImage를 body 내부에 추가해주는것.
// appendChild()는 body에 html을 추가할 거야.