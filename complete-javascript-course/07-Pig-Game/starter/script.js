'use strict';

const dice = document.querySelector('.dice');

let sum = 0;
let player = 1;

document.querySelector('.btn--roll').addEventListener('click', event => {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  sum += randomNumber;
  console.log(randomNumber);

  if (randomNumber === 1) {
    changePlayerTurn();
  }

  if (player === 1) {
    document.querySelector('#current--0').textContent = `${sum}`;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  } else {
    document.querySelector('#current--1').textContent = `${sum}`;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  }
});

const changePlayerTurn = function () {
  player++;
  if (player === 2) {
    player = 0;
  }
  return player;
};
