const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);


const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreElement.innerText = `score: ${score}`;

questionElement.innerText = `What is ${num1} + ${num2}?`
const answer = num1 + num2;

formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value // The + gets the user value and  converts it into a number
    if (userAnswer === answer) {
        score++;
        updatelocalStorage();
    } else {
        score--;
        updatelocalStorage();
    }
})

function updatelocalStorage() {
    localStorage.getItem("score", JSON.stringify(score))
}

