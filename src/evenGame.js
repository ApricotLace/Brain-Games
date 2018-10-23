import readlineSync from 'readline-sync';
import sayHi from './index';

const endGame = 3;
let counter = 0;
const maxRandNum = 100;
const minRandNum = 0;
const isEven = number => number % 2 === 0;
const generateRandomNum = () => Math.floor(Math.random() * (maxRandNum - minRandNum)) + minRandNum;

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const userName = sayHi();
const execGame = () => {
  for (counter; counter < endGame; counter += 1) {
    const randomNum = generateRandomNum();
    let correctAnswer = '';
    console.log(`Question: ${randomNum}`);
    if (isEven(randomNum)) {
      correctAnswer += 'yes';
    } else {
      correctAnswer += 'no';
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
    console.log('Correct!');
  }
  if (counter === endGame) {
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default execGame;
