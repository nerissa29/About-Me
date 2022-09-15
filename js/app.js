'use strict';

console.log('Hi! Welcome to my page!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}!`);

// let question1 = prompt('Do I have kids?').toLowerCase();

// if (question1 === 'y' || question1 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
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
//   alert(`${userName}, you are correct! I don't have a pet name Petra!`);
// }

// let question3 = prompt('Did I served in the military?').toLowerCase();

// if (question3 === 'y' || question3 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
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
//   alert(`${userName}, you are correct! I work in supply department as a Logistic Specialist!`);
// }

// let question5 = prompt('Am I on my 30\'s?').toLowerCase();

// if (question5 === 'y' || question5 === 'yes') {
//   // console.log(`${userName}'s guess is correct!`);
//   alert(`${userName}, you are correct! My age is no longer in the calendar!`);
// } else if (question5 === 'n' || question5 === 'no') {
//   // console.log(`${userName}'s guess is wrong!`);
//   alert(`${userName}, as much as I want you to be correct, you are wrong!`);

// }

let question6 = Number(prompt('Guess a number from 1 - 20!'));

let num = 8;
let count = 1;

while (count < 4) {
  if (question6 === num) {
    alert('You are CORRECT!');
    break;
  } else if (question6 < num) alert('Too low!');
  else if (question6 > num) alert('Too high!');

  question6 = Number(prompt('Guess a number from 1 - 20!'));
  count++;
}

alert(`${userName}, the correct number is ${num}`);

let arr = ['black', 'cyan', 'purple', 'w'];

// let question7 = prompt()

alert(`Thank you ${userName} for playing this game with me. Have a great day!`);
