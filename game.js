/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/// setting varibles for game
let scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;


//setting img display to none

let imgDice = document.querySelector('.dice');
imgDice.style.display = 'none';


/// change score p1 p2
let currentScoreP1 = document.getElementById('current-0').textContent = '0';
let currentScoreP2 = document.getElementById('current-1').textContent = '0';
let ScoreP0 = document.getElementById('score-0').textContent = '0';
let ScoreP1 = document.getElementById('score-1').textContent = '0';

//swapPlayer function//
const swapPlayer = () => {
    imgDice.style.display = 'none';
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // activebtn.classList.remove('active');

    if (activePlayer === 1) {
      activePlayer = 0;
    } else if (activePlayer == 0) {
      activePlayer = 1;
    }

  };

//////////dice roll method
let diceRoll = document.querySelector('.btn-roll').addEventListener('click', () => {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    imgDice.style.display = 'block';

    //this all if else statement can be done as simple method
    imgDice.src = 'img/dice-' + dice + '.png';
    // if (dice === 1) {
    //   imgDice.src = 'img/dice-1.png';
    // } else if (dice === 2) {
    //   imgDice.src = 'img/dice-2.png';
    // } else if (dice === 3) {
    //   imgDice.src = 'img/dice-3.png';
    // } else if (dice === 4) {
    //   imgDice.src = 'img/dice-4.png';
    // } else if (dice === 5) {
    //   imgDice.src = 'img/dice-5.png';
    // } else if (dice === 6) {
    //   imgDice.src = 'img/dice-6.png';
    // } else {
    //   imgDice.style.display = 'none';
    // }

    if (dice !== 1) {
      //add score
      roundScore += dice;
      // scores[activePlayer] += dice;
      // console.log(roundScore);
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      swapPlayer();

    }
  });


// btn hold//
let btnhold = document.querySelector('.btn-hold').addEventListener('click', () => {
    // console.log('ho');
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    swapPlayer();
  });
// score of players
