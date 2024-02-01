const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        //classList가 clicked를 포함하고 있는지 확인
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

// class name을 바꾸는 다른 방법은 classList를 사용하는 방법
// classList는 말 그대로, class들의 목록으로 작업할 수있게 허용해줌
// classList는 element의 class내용물을 조작하는 것을 허용한다.
// className은 모든걸 교체해버림,이전에 class상관하지 않고
// classList의 function중에는 contains라는게 있다
// contains는 우리가 명시한 class가 HTML element의 class에 포함되어있는지 알려줌

// toggle function은 class name이 존재하는지 확인
// 만약 class name이 존재한다면 toggle은 class name을 제거
// 만약 class name이 존재하지 않는다면 toggle은 class name을 추가
function handleTitleClick() {
    h1.classList.toggle("clicked");
    //이 경우 clicked를 한 번만 사용하기 때문에 const는 사용안함
}