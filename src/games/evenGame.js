import readlineSync from 'readline-sync';
import sayHi from '..';

const endGame = 3;
const maxRandNum = 100;
const minRandNum = 0;
const isEven = number => number % 2 === 0;
const generateRandomNum = () => Math.floor(Math.random() * (maxRandNum - minRandNum)) + minRandNum;
const correctAnswerSetter = randomNum => (isEven(randomNum) ? 'yes' : 'no');

const execGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = sayHi();
  for (let counter = 0; counter < endGame; counter += 1) {
    const question = generateRandomNum();
    console.log(`Question: ${question}`);
    const correctAnswer = correctAnswerSetter(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default execGame;
