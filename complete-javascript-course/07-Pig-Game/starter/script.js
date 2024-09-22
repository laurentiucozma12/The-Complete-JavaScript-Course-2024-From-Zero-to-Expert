'use strict';

const dice = document.querySelector('.dice');

let sumPlayer1 = 0;
let sumPlayer2 = 0;
let sumScorePlayer1 = 0;
let sumScorePlayer2 = 0;
let player = 1;

const playerStyle1 = document.querySelector('.player--0');
const playerStyle2 = document.querySelector('.player--1');

const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');

const changePlayerTurn = function () {
  player++;

  if (player === 2) {
    player = 0;
    playerStyle1.classList.remove('player--active');
    playerStyle2.classList.add('player--active');
  } else {
    playerStyle2.classList.remove('player--active');
    playerStyle1.classList.add('player--active');
  }

  return player;
};

document.querySelector('.btn--roll').addEventListener('click', event => {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log('Random number: ' + randomNumber);

  // BUG: When randomNumber becomes 1, swaps the player, but it adds to the sum 1
  // it should be 0
  if (randomNumber === 1) {
    if (player === 1) {
      sumPlayer1 = 0;
      currentScorePlayer1.textContent = 0;
    } else {
      sumPlayer2 = 0;
      currentScorePlayer2.textContent = 0;
    }
    randomNumber = 0;
    console.log(randomNumber);

    changePlayerTurn();
  }

  if (player === 1) {
    sumPlayer1 += randomNumber;
    currentScorePlayer1.textContent = `${sumPlayer1}`;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  } else {
    sumPlayer2 += randomNumber;
    currentScorePlayer2.textContent = `${sumPlayer2}`;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  }
});

document.querySelector('.btn--hold').addEventListener('click', event => {
  if (player === 1) {
    sumScorePlayer1 += sumPlayer1;
    scorePlayer1.textContent = sumScorePlayer1;
    currentScorePlayer1.textContent = 0;
    // console.log('scorePlayer1: ' + scorePlayer1);
    // console.log('sumPlayer1: ' + sumPlayer1);
    sumPlayer1 = 0;
  } else {
    sumScorePlayer2 += sumPlayer2;
    scorePlayer2.textContent = sumScorePlayer2;
    currentScorePlayer2.textContent = 0;
    // console.log('scorePlayer2: ' + scorePlayer2);
    // console.log('sumPlayer2: ' + sumPlayer2);
    sumPlayer2 = 0;
  }

  changePlayerTurn();
});
