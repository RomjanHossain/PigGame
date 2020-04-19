/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/// setting varibles for game
let scores, roundScore, activePlayer, dice, gameOn;
let imgDice = document.querySelector('.dice');

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameOn = true;

    //setting img display to none

    imgDice.style.display = 'none';
    console.log('skjdf');

    /// change score p1 p2

    // setting score to 0
    let currentScoreP1 = document.getElementById('current-0').textContent = '0';
    let currentScoreP2 = document.getElementById('current-1').textContent = '0';
    //seting score to 0
    let ScoreP0 = document.getElementById('score-0').textContent = '0';
    let ScoreP1 = document.getElementById('score-1').textContent = '0';
    // resign thire name
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    //rid of 2nd palyer active and get 1st player active
    document.querySelector('.player-0-panel').classList.remove('Winner');
    document.querySelector('.player-1-panel').classList.remove('Winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

init();



//swapPlayer function//
const swapPlayer = () => {
    if (activePlayer === 1) {
        activePlayer = 0;
    } else if (activePlayer == 0) {
        activePlayer = 1;
    }
    // imgDice.style.display = 'none';
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

    //changing their score
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};

// Who won??
const winGame = () => {
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        imgDice.style.display = 'none';
        gameOn = false;

    } else {
        swapPlayer();
    }
};


//////////dice roll method
let diceRoll = document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gameOn) {
        dice = Math.floor(Math.random() * 6) + 1;
        // console.log(dice);
        imgDice.style.display = 'block';

        imgDice.src = 'img/dice-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            swapPlayer();
        }
    }

});


// btn hold//
let btnhold = document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gameOn) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        winGame();
        // swapPlayer();
    }

});

let btnNew = document.querySelector('.btn-new').addEventListener('click', init);


/// Creating some new ruls for the game!
