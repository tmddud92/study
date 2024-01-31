const inputForm = document.querySelector("#inputValue");
const inputValue = document.querySelector("#inputValue input");
const userValue = document.querySelector("#userValue input");
const firstComment = document.querySelector("#firstComment");
const secondComment = document.querySelector("#secondComment");

function inputSubmit(event) {
    event.preventDefault();
    const userNumber = parseInt(userValue.value);
    const answerNumber = Math.ceil(Math.random() * inputValue.value);
    firstComment.innerText = `You chose ${userNumber}, the machine chose ${answerNumber}.`;
    secondComment.innerText = `${
        userNumber === answerNumber ? "You win!" : "You lose!"
    }`;
}

inputForm.addEventListener("submit", inputSubmit);


//<button>태그를 클릭해 <input>태그의 내용을 submit(제출)하기 위해서는 <form>태그 내에 작성해야 합니다.
// (1)
// 먼저 html 요소들을 js에서 사용할 수 있도록 선언해 줍니다.
// e.preventDefault();
// 입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.
// (2)
// const select = selecteInput.value;
// const guess = guessInput.value;
// 사용자가 선택한 숫자를 입력하는 요소를 js에서 사용할 수 있게 선언해 줍니다.
// (3)
// selecteInput과 guessInput이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
// const select = selecteInput.value; //string
// const guess = gessInput.value; // string
// if (select === "" || guess ==="") {
//     resultMessage.innerText = "";
//     score.style.color = "red";
//     score.innerText = "<strong>Please select Number!</strong>";
//     return;
// }
// (4)
// const selectNumber = parseInt(select, 10);
// const guessNumber = parseInt(guess, 10);
// <input>과 <form>태그를 통해 제출된 값은 문자열형태로 저장됩니다. select과 guess의 타입은 현재 문자열입니다.
// 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
// parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.
// (5)
// const machineChose = Math.ceil(Math.random() * selectNumber);
// Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
// 필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
// 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.
// (6)
// 게임의 결과를 출력하기 위한 코드입니다. html에서 작성해 둔 span태그의 innerText, innerHTML프로퍼티를 사용해 출력할 내용을 작성해 줍니다.
// resultMessage.innerText = `You chose: ${guessNumber}, the machine chose: ${machineChose}.`;
// score.style.color = "black";
// guessNumber === machineChose
//     ?(score.innerText = "<strong>You won!</strong>")
//     :(score.innerText = "<strong>You lost!</strong>");
