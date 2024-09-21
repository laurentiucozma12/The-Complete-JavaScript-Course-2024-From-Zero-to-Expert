'use strict';

const getRandomInt = () => Math.trunc(Math.random() * 20 + 1);
let randomNumber = getRandomInt();
let score = 20;

document.querySelector('.check').addEventListener('click', event => {
  console.log(Number(document.querySelector('.guess').value));
  if (
    Number(document.querySelector('.guess').value) > 0 &&
    Number(document.querySelector('.guess').value) < 21
  ) {
    if (Number(document.querySelector('.guess').value) === randomNumber) {
      document.querySelector('.number').textContent = Number(
        document.querySelector('.guess').value,
      );
      document.querySelector('.message').textContent = 'Correct Number!';
      if (score > Number(document.querySelector('.highscore').textContent)) {
        document.querySelector('.highscore').textContent = score;
        console.log('Update HighScore');
      }
      document
        .querySelector('body')
        .setAttribute('style', 'background-color:#60b347;');
      document.querySelector('.guess').setAttribute('disabled', '');
      document.querySelector('.check').setAttribute('disabled', '');
      document.querySelector('.check').classList.add('btn-disabled');
    } else if (Number(document.querySelector('.guess').value) >= randomNumber) {
      document.querySelector('.message').textContent = 'Too Big!';
      updateScore();
    } else if (Number(document.querySelector('.guess').value) <= randomNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
      updateScore();
    }
  }
});

function updateScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
}

document.querySelector('.again').addEventListener('click', event => {
  randomNumber = getRandomInt();
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:#222;');
  document.querySelector('.check').classList.remove('btn-disabled');
  document.querySelector('.guess').removeAttribute('disabled');
  document.querySelector('.check').removeAttribute('disabled');
});
