'use strict';

let SecretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No Input or 0 Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  //When Player wins the game
  else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    else {
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  else if (guess != SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > SecretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost the Game !!';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
    //guess is high
    else if (guess > SecretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'To High';
        score--;
        document.querySelector('.score').textContent = score;
      }
      else {
        document.querySelector('.message').textContent = 'You lost the Game !!';
        document.querySelector('.score').textContent = 0;
      }
    }
  
    //guess is low
    else if (guess < SecretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'To Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
      else {
        document.querySelector('.message').textContent = 'You lost the Game !!';
        document.querySelector('.score').textContent = 0;
      }
    }
  */

});

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  SecretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});


