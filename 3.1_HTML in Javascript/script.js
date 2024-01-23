// HTML에서 항목들을 가지고 와서, JavaScript를 통해 항목들을 변경☆
// JavaScript로 정보를 가지고 오는 방법은 
// document객체와 element를 가져오는 함수 이용
// document에서 항목들을 가지고 오는 것, document 항목들을 변경하는것

//document는 우리가 JavaScript에서 HTML에 접근할 수 있는 방법
//element를 더 자세하게 보여주는 console.dir()

const title = document.getElementById("title");
//"title"(element)는 getElementById란 함수로 가져왔다.
//getElementById는 HTML에서 id를 통해 element를 찾아준다.
//그 앞은 document의 함수이고 document는 HTML(JavaScript관점의HTML)을 뜻한다.
//JavaScript에서 title이란 항목을 가져오고 있다.
//JavaScript에서 h1의 className을 확인 할 수 있다.


console.log(title);

//autofocus: false

//우리가 하는건 HTML에서 가져오는거지만 JavaScript에서 하는것
//JavaScript는 HTML element를 가져오지만 HTML자체를 보여주지는 않는다.
//JavaScript는 object를 보여준다.

title.innerText = "Got you!";