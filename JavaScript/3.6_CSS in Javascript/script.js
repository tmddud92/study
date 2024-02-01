const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    if(h1.style.color === "blue") {
    // h1의 color값이 blue와 일치하는지 확인
        h1.style.color = "tomato";
        // h1의 color를 tomato로 변경해준다.
    } else {
        h1.style.color = "blue";
    }
}

h1.addEventListener("click", handleTitleClick);
// 위의 코드에서는 h1.style.color를 계속 호출하고있다.

function handleTitleClick() {
    const currentColor = h1.style.color
    // 간단하게 사용하기위해 먼저 color현재 상태를 저장한다.
    let newColor; 
    // 비어있는 let 변수
    if(currentColor === "blue") {
        h1.style.color = "tomato";
        // 여기에서 h1.style.color를 newColor라고 변경해도
        // h1의 color엔 아무 영향도 미치지 못한다.
    } else {
        h1.style.color = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

// element의 style을 JavaScript에서 변경하는것을 안 좋아한다.
// 다른 언어들을 섞는걸 별로 선호하지 않기때문



// 1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
// 2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
// 3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
// 4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

// 이를 토대로 코드를 순차적으로 이해하면,

// 1) click event 발생 및 함수 실행
// 2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
// 3) newColor 변수 선언
// 4) currentColor 현재 값 확인
// 5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
// 6) 마지막으로 h1.style.color에 newColor값 대입 (setter)