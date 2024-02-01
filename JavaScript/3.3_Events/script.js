//script.js가 있기 때문에 JavaScript를 통해 HTML의 내용을 가져올수있다
//script.js를 import하지 않았다면, document는 여기 존재할 수 없다.
//포인트는 document가 HTML이 script.js를 load하기때문에 존재하는것
//그 다음에 browser가 우리가 document에 접근할 수 있게 해준다

const title1 = document.querySelector(".hello h1");
title1.innerText = "hello";
// 이 두줄의 코드로 hello라는 class 내부의 h1을 가지고 오는것

const title = document.querySelector("div.hello:first-child h1");
// class hello를 가진 div 내부의 first-child인 h1을 찾아오는것
console.dir(title);
// 만약 element의 내부를 보고싶다면 dir를 사용하면된다.

// JavaScript object 내부에 있는 property들의 값들을 변경할수 있다고 배워왔다.
// 특정 property들은 변경할 수가 없다.

// style은 object 내부에 있는 object
// JavaScript 형식으로 작성되어있다.

// JavaScript에서 style변경이 가능하다
// 하지만 JavaScript에서 대부분 작업할 일은, event를 listen하는것
// 클릭,입력,enter 등등 이 event
// 모든 event들을 JavaScript는 listen할 수 있다.

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title wsa clicked!");
}
// 이 function을 addEventListener function의 두번째 argument(인수)로 전달
title.addEventListener("click", handleTitleClick);

// JavaScript에 무슨 event를 listen하고 싶은지 알려줘야 함
// 모든 event 알고싶은게 아닌 하나의 event가 알고싶기때문
