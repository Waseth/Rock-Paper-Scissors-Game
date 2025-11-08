let rounds = document.getElementById("rounds");
let playerOneButtons = document.querySelectorAll('.player-one button');
let playerTwoButtons = document.querySelectorAll('.player-two button');
let winner = document.getElementById('winner');
let playerOneScore = document.getElementById('player-one-score');
let playerTwoScore = document.getElementById('player-two-score');
let finalWinner = document.getElementById('final-winner');
let restartBtn = document.getElementById('restart-btn');

let ScoreOne = 0;
let ScoreTwo = 0;
let currentRound = 0;
const maxRounds = 10;

playerOneButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerOneButtons.forEach(btn =>{
            btn.style.border = '';
        })
        button.style.border = '4px solid blue'


        const player1Choice = button.dataset.choice;
        const choices = ["rock", "paper", "scissors"];
        const player2Choice = choices[Math.floor(Math.random() * 3)];
        playerTwoButtons.forEach(button => {
            button.style.border = "";
            if (button.dataset.choice === player2Choice) {
                button.style.border = '4px solid red'
            }
        })

        if (player1Choice === player2Choice) {
            winner.innerHTML = 'DRAW';
        }
        else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            winner.innerHTML = 'YOU WIN';
            ScoreOne++;
        } else {
            winner.innerHTML = 'AI WINS';
            ScoreTwo++;
        }
        currentRound++;

        rounds.textContent = `Round ${currentRound}`;
        if(currentRound > maxRounds){
            rounds.textContent = 'Rounds'
            winner.textContent = 'GAME OVER!';
            winner.style.fontSize = '30px';
            winner.style.color = 'red';
            playerOneButtons.forEach(btn =>btn.disabled = true);
            playerTwoButtons.forEach(btn => btn.disabled = true);


            if(ScoreOne > ScoreTwo){
                finalWinner.textContent = 'YOU WIN';
            }else if(ScoreTwo > ScoreOne){
                finalWinner.textContent = 'AI WINS';
            }else{
                finalWinner.textContent = 'DRAW'
            }

        }
        playerOneScore.textContent = ScoreOne;
        playerTwoScore.textContent = ScoreTwo;
    })


})

restartBtn.addEventListener('click', ()=>{
    ScoreOne = 0;
    ScoreTwo = 0;
    currentRound = 1;
    playerOneScore.textContent = ScoreOne;
    playerTwoScore.textContent = ScoreTwo;
    rounds.textContent = `Round ${currentRound}`;

    playerOneButtons.forEach(btn =>{
        btn.style.border = '';
    })
    playerTwoButtons.forEach(btn =>{
        btn.style.border = '';
    })

    finalWinner.textContent = '';
    winner.textContent = 'WINNER';

    playerOneButtons.forEach(btn =>{
        btn.disabled = false;
    })
    playerTwoButtons.forEach(btn =>{
        btn.disabled = false;
    })
    winner.style.color = "#1cfa07";
    winner.style.fontWeight = '900';
    winner.style.fontSize = '15px';
})