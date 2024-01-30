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
