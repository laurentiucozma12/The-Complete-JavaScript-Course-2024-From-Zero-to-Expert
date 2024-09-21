'use strict';

const body = document.querySelector('body');
const number = document.querySelector('.number');
const btnAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');

let scoreElement = document.querySelector('.score');
let score = 20;

const highscore = document.querySelector('.highscore');

// Random Number is Generated 1 - 20
const getRandomInt = () => Math.floor(Math.random() * 19 + 1);
let randomNumber = getRandomInt();

// Testing
console.log('Random Number first load: ' + randomNumber);

btnCheck.addEventListener('click', event => {
  console.log(Number(guess.value));
  if (Number(guess.value) > 0 && Number(guess.value) < 21) {
    // Testing
    console.log('Guess Number load:' + Number(guess.value));
    // prettier-ignore
    console.log('Guess Number === Random Number:' + Number(guess.value) === randomNumber);
    console.log('highscore ' + Number(highscore.textContent));

    if (Number(guess.value) === randomNumber) {
      updateTextContent(number, Number(guess.value));
      updateTextContent(message, 'Correct Number!');
      if (score > Number(highscore.textContent)) {
        updateTextContent(highscore, score);
        console.log('Update HighScore');
      }
      body.setAttribute('style', 'background-color:#60b347;');
      guess.setAttribute('disabled', '');
      btnCheck.setAttribute('disabled', '');
      btnCheck.classList.add('btn-disabled');
    } else if (Number(guess.value) >= randomNumber) {
      updateTextContent(message, 'Too Big!');
      updateScore();
    } else if (Number(guess.value) <= randomNumber) {
      updateTextContent(message, 'Too Low!');
      updateScore();
    }
  }
});

function updateScore() {
  //Test
  console.log('Score in updateScore(): ' + score);
  if (score > 0) {
    score--;
    scoreElement.textContent = score;
  }

  if (score === 0) {
    updateTextContent(message, 'You lost the game!');
  }
}

btnAgain.addEventListener('click', event => {
  randomNumber = getRandomInt();

  // Testing
  console.log('Random Number after Again: ' + randomNumber);
  //Test
  console.log('Score after Again: ' + score);

  scoreElement.textContent = 20;
  score = 20;
  guess.value = '';
  updateTextContent(number, '?');
  updateTextContent(message, 'Start guessing...');
  body.setAttribute('style', 'background-color:#222;');
  btnCheck.classList.remove('btn-disabled');
  guess.removeAttribute('disabled');
  btnCheck.removeAttribute('disabled');
});

function updateTextContent(element, value) {
  element.textContent = value;
}
