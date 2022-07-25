'use strict';

const dice = document.querySelector("img");
const rollDiceBtn = document.querySelector(".roll-dice-btn");
const holdBtn = document.querySelector(".hold-btn");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const current1 = document.querySelector(".current1 span");
const current2 = document.querySelector(".current2 span");
const newGameBtn = document.querySelector(".new-game-btn");

let dices = [
    "dices/dice-1.png",
    "dices/dice-2.png",
    "dices/dice-3.png",
    "dices/dice-4.png",
    "dices/dice-5.png",
    "dices/dice-6.png",
];
let player1Score = 0;
let player2Score = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;

rollDiceBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * dices.length);
    dice.src = dices[random];
    let number = parseInt(dices[random].split('').slice(-5)[0]);
    
    if(number === 1){
        if(player1.classList.contains("active")){
            player1.classList.remove("active");
            player2.classList.add("active");
            player1CurrentScore = 0;
            current1.textContent = player1CurrentScore;
        }else if(player2.classList.contains("active")){
            player2.classList.remove("active");
            player1.classList.add("active");
            player2CurrentScore = 0;
            current2.textContent = player2CurrentScore;
        }
        return;
    }
    if(player1.classList.contains("active")){
        player1CurrentScore += number;
        current1.textContent = player1CurrentScore;
    }else if(player2.classList.contains("active")){
        player2CurrentScore += number;
        current2.textContent = player2CurrentScore;
    }
});

holdBtn.addEventListener("click", () => {
    if(player1.classList.contains("active")){
        current1.textContent = 0;
        player1Score += player1CurrentScore;
        score1.textContent = player1Score;
        if(player1Score >= 100){
            player1.classList.add("winner");
            return;
        }
        player1CurrentScore = 0;
        player1.classList.remove("active");
        player2.classList.add("active");
    }else if(player2.classList.contains("active")){
        current2.textContent = 0;
        player2Score += player2CurrentScore;
        score2.textContent = player2Score;
        if(player2Score >= 100){
            player2.classList.add("winner");
            return;
        }
        player2CurrentScore = 0;
        player1.classList.add("active");
        player2.classList.remove("active");
    }
});

newGameBtn.addEventListener("click", () => {
    dice.src = "";
    player1Score = 0;
    player2Score = 0;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    score1.textContent = player1Score;
    score2.textContent = player1Score;
    current1.textContent = player1CurrentScore;
    current2.textContent = player2CurrentScore;
    player1.classList.remove("winner");
    player2.classList.remove("winner");
    player1.classList.add("active");
    player2.classList.remove("active");
});