const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    if (h1.className === "clicked"){
        // h1.className 은 getter이면서 setter이다.
        h1.className = "";
    } else {
        h1.className = "clicked";
    }
}
// 에러를 줄이기위해 const로 선언
function handleTitleClick() {
    const clickedClass = "clicked sexy-font";
    if (h1.className === clickedClass){
        // h1.className 은 getter이면서 setter이다.
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);



// style작업에 적합한 도구는 CSS다!!
// animation에 적합한 도구는 JS다!!
// html 파일은 CSS문서와 JS문서를 import하고 있다.

// 에러를 줄이기 위해 raw string을 쓰는 대신, const를 생성하기!
// raw string은 개발자가 이렇게 적겠다 선택한 이름
// JS로 모든 class name을 변경하지는 않는다.