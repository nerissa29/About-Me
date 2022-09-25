'use strict';

console.log('Hi! Welcome to my page!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}!`);

let score = 0;
function questionOne() {
  let question1 = prompt('Do I have kids (y/n)?').toLowerCase();

  if (question1 === 'y' || question1 === 'yes') {
    score++;
    alert(`${userName}, you are correct. I have two kids!`);
  } else if (question1 === 'n' || question1 === 'no') {
    alert(`${userName}, you are wrong! I am a mother of two!`);
  }

}
questionOne();


function questionTwo() {
  let question2 = prompt('Do I have a pet named Petra (y/n)?').toLowerCase();

  if (question2 === 'y' || question2 === 'yes') {
    alert(`${userName}, you are wrong! My pet's name is Raiss!`);
  } else if (question2 === 'n' || question2 === 'no') {
    score++;
    alert(`${userName}, you are correct! I don't have a pet name Petra!`);
  }

}
questionTwo();

function questionThree() {
  let question3 = prompt('Did I served in the military (y/n)?').toLowerCase();

  if (question3 === 'y' || question3 === 'yes') {
    score++;
    alert(`${userName}, you are correct! I served 8 years Active Duty in the Navy!`);
  } else if (question3 === 'n' || question3 === 'no') {
    alert(`${userName}, you are wrong! I was in ACtive Duty for 8 years!`);
  }
}

questionThree();

function questionFour() {
  let question4 = prompt('Did I work as a Yeoman in admin department (y/n)?').toLowerCase();

  if (question4 === 'y' || question4 === 'yes') {
    alert(`${userName}, you are wrong! I am a Logistic Specialist working in Supply department!`);
  } else if (question4 === 'n' || question4 === 'no') {
    score++;
    alert(`${userName}, you are correct! I work in supply department as a Logistic Specialist!`);
  }
}

questionFour();

function questionFive() {
  let question5 = prompt('Am I on my 30\'s (y/n)?').toLowerCase();

  if (question5 === 'y' || question5 === 'yes') {
    score++;
    alert(`${userName}, you are correct! My age is no longer in the calendar!`);
  } else if (question5 === 'n' || question5 === 'no') {
    alert(`${userName}, as much as I want you to be correct, you are wrong!`);

  }
}

questionFive();

function questionSix() {
  let num = 8;
  for (let i = 0; i < 4; i++) {
    let question6 = Number(prompt('Guess a number from 1 - 20!'));
    if (question6 === num) {
      score++;
      alert('You are CORRECT!');
      break;
    } else if (question6 < num) {
      alert('Too low!');
    } else if (question6 > num) {
      alert('Too high!');
    }
  }
  alert(`The number I have is ${num}`);
}

questionSix();

let arr = ['black', 'cyan', 'purple', 'magenta', 'fuchsia', 'lime', 'teal', 'navy', 'olive'];

function questionSeven() {
  let guess = false;
  for (let i = 0; i < 6; i++) {
    let question7 = prompt(`${userName}, you only have 6 tries! Try to guess a color! Try # ${i+1}`).toLowerCase();
    for (let j = 0; j < arr.length; j++) {
      if (question7 === arr[j]) {
        score++;
        // console.log(`${userName}'s guess is correct!`);
        alert(`Congrats ${userName}! You guessed it RIGHT!`);
        guess = true;
      }
    }
    if (guess) break;
  }

  alert(`The colors I have picked are ${arr.join(', ')}`);
}

questionSeven();


alert(`Thank you ${userName} for playing this game with me. You got ${score} correct answers! Wooohoo! Have a great day!`);

