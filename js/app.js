'use strict';

console.log('Hi! Welcome to my page!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}!`);

let score = 0;
function questionOne(){
  let question1 = prompt('Do I have kids?').toLowerCase();

  if (question1 === 'y' || question1 === 'yes') {
    // console.log(`${userName}'s guess is correct!`);
    score++;
    alert(`${userName}, you are correct. I have two kids!`);
  } else if (question1 === 'n' || question1 === 'no') {
    // console.log(`${userName}'s guess is wrong!`);
    alert(`${userName}, you are wrong! I am a mother of two!`);
  }

}
questionOne();


function questionTwo(){
  let question2 = prompt('Do I have a pet named Petra?').toLowerCase();

  if (question2 === 'y' || question2 === 'yes') {
    // console.log(`${userName}'s guess is wrong!`);
    alert(`${userName}, you are wrong! My pet's name is Raiss!`);
  } else if (question2 === 'n' || question2 === 'no') {
    // console.log(`${userName}'s guess is correct!`);
    score++;
    alert(`${userName}, you are correct! I don't have a pet name Petra!`);
  }

}
questionTwo();

function questionThree(){
  let question3 = prompt('Did I served in the military?').toLowerCase();

  if (question3 === 'y' || question3 === 'yes') {
    // console.log(`${userName}'s guess is correct!`);
    score++;
    alert(`${userName}, you are correct! I served 8 years Active Duty in the Navy!`);
  } else if (question3 === 'n' || question3 === 'no') {
    // console.log(`${userName}'s guess is wrong!`);
    alert(`${userName}, you are wrong! I was in ACtive Duty for 8 years!`);
  }
}

questionThree();

function questionFour(){
  let question4 = prompt('Did I work as a Yeoman in admin department?').toLowerCase();

  if (question4 === 'y' || question4 === 'yes') {
    // console.log(`${userName}'s guess is wrong!`);
    alert(`${userName}, you are wrong! I am a Logistic Specialist working in Supply department!`);
  } else if (question4 === 'n' || question4 === 'no') {
    // console.log(`${userName}'s guess is correct!`);
    score++;
    alert(`${userName}, you are correct! I work in supply department as a Logistic Specialist!`);
  }
}

questionFour();

function questionFive(){
  let question5 = prompt('Am I on my 30\'s?').toLowerCase();

  if (question5 === 'y' || question5 === 'yes') {
    // console.log(`${userName}'s guess is correct!`);
    score++;
    alert(`${userName}, you are correct! My age is no longer in the calendar!`);
  } else if (question5 === 'n' || question5 === 'no') {
    // console.log(`${userName}'s guess is wrong!`);
    alert(`${userName}, as much as I want you to be correct, you are wrong!`);

  }
}

questionFive();


// Question 6 added for Lab 03
let num = 8;

for (let i = 0; i < 4; i++) {
  // let count = 0;
  let question6 = Number(prompt('Guess a number from 1 - 20!'));
  if (question6 === num) {
    score++;
    // console.log(`${userName}'s guess is correct!`);
    alert('You are CORRECT!');
    // i = 4;
    break;
  } else if (question6 < num) {
    alert('Too low!');
    // count++;
  } else if (question6 > num) {
    alert('Too high!');
    // count++;
  }
}

alert(`The number I have is ${num}`);


// question 7 added for Lab 03
let arr = ['black', 'cyan', 'purple', 'magenta', 'fuchsia', 'lime', 'teal', 'navy', 'olive'];

let guess = false;

for (let i = 0; i < 6; i++) {
  let question7 = prompt(`${userName}, you only have 6 tries! Try to guess a color!`).toLowerCase();
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


alert(`Thank you ${userName} for playing this game with me. You got ${score} correct answers! Wooohoo! Have a great day!`);


/*

This part is for Lab05, still working on it to work properly inside the function,
and will be submitting soon

// question 6
let num = 8;
// let count = 0;

function questionSix(){
  for (let i = 0; i < 4; i++) {
    let question6 = Number(prompt('Guess a number from 1 - 20!'));
    if (question6 === num) {
      score++;
      // console.log(`${userName}'s guess is correct!`);
      alert('You are CORRECT!');
      // i = 4;
      break;
    } else if (question6 < num) {
      alert('Too low!');
      // count++;
    } else if (question6 > num) {
      alert('Too high!');
      // count++;
    }
    alert(`The number I have is ${num}`);
  }
}

questionSix();



// question 7
let arr = ['black', 'cyan', 'purple', 'magenta', 'fuchsia', 'lime', 'teal', 'navy', 'olive'];

let guess = false;

function questionSeven(){
  for (let i = 1; i < 6; i++) {
    let question7 = prompt(`${userName}, you only have 6 tries! Try to guess a color!`).toLowerCase();
    for (let j = 0; j < arr.length; j++) {
      if (question7 === arr[j]) {
        score++;
        // console.log(`${userName}'s guess is correct!`);
        alert(`Congrats ${userName}! You guessed it RIGHT!`);
        guess = true;
      }
    }
    if (guess) break;
    question7 = prompt(`Try agan! ${userName}, try to guess a color!`);
  }
}

questionSeven();

alert(`The colors I have picked are ${arr}`);

*/

