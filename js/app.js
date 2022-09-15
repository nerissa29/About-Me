'use strict';

// console.log('Hi! Welcome to my page!');


let userName = prompt('What is your name?');

// alert(`Welcome to my site ${userName}!`);

let score = 0;
// let question1 = prompt('Do I have kids?').toLowerCase();

// if (question1 === 'y' || question1 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
//   score++; 
//   alert(`${userName}, you are correct. I have two kids!`);
// } else if (question1 === 'n' || question1 === 'no') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, you are wrong! I am a mother of two!`);
// }

// let question2 = prompt('Do I have a pet named Petra?').toLowerCase();

// if (question2 === 'y' || question2 === 'yes') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, you are wrong! My pet's name is Raiss!`);
// } else if (question2 === 'n' || question2 === 'no') {
//   // console.log(`${userName}'s guess is correct!`);
//   score++;
//   alert(`${userName}, you are correct! I don't have a pet name Petra!`);
// }

// let question3 = prompt('Did I served in the military?').toLowerCase();

// if (question3 === 'y' || question3 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
//   score++;
//   alert(`${userName}, you are correct! I served 8 years Active Duty in the Navy!`);
// } else if (question3 === 'n' || question3 === 'no') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, you are wrong! I was in ACtive Duty for 8 years!`);
// }

// let question4 = prompt('Did I work as a Yeoman in admin department?').toLowerCase();

// if (question4 === 'y' || question4 === 'yes') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, you are wrong! I am a Logistic Specialist working in Supply department!`);
// } else if (question4 === 'n' || question4 === 'no') {
//   // console.log(`${userName}'s guess is correct!`);
//   score++;
//   alert(`${userName}, you are correct! I work in supply department as a Logistic Specialist!`);
// }

// let question5 = prompt('Am I on my 30\'s?').toLowerCase();

// if (question5 === 'y' || question5 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
//   score++;
//   alert(`${userName}, you are correct! My age is no longer in the calendar!`);
// } else if (question5 === 'n' || question5 === 'no') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, as much as I want you to be correct, you are wrong!`);

// }

let question6 = Number(prompt('Guess a number from 1 - 20!'));

let num = 8;
let count = 1;

for (let i = count; i < 4; i++) {
  if (question6 === num) {
    score++;
    // console.log(`${userName}'s guess is correct!`);
    alert('You are CORRECT!');
    // i = 4;
    break;
  } else if (question6 < num) {
    alert('Too low!');
    count++;
  } else if (question6 > num) {
    alert('Too high!');
    count++;
  }

  question6 = Number(prompt('Guess a number from 1 - 20!'));
}

alert(`The number I have is ${num}`);


// let arr = ['black', 'cyan', 'purple', 'magenta', 'fuchsia', 'lime', 'teal', 'navy', 'olive'];

// let question7 = prompt(`${userName}, you only have 6 tries! Try to guess a color!`).toLowerCase();


// let guess = false;


// for (let i = 1; i < 6; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (question7 === arr[j]) {
//       score++;
//       // console.log(`${userName}'s guess is correct!`);
//       alert(`Congrats ${userName}! You guessed it RIGHT!`);
//       guess = true;
//     }
//   }
//   if (guess) break;
//   question7 = prompt(`Try agan! ${userName}, try to guess a color!`);
// }

// alert(`The colors I have picked are ${arr}`);

alert(`Thank you ${userName} for playing this game with me. You got ${score} correct answers! Wooohoo! Have a great day!`);
