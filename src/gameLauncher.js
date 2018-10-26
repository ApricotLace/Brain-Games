import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const gameEnd = 3;
const getQuestion = qaPair => car(qaPair);
const getAnswer = qaPair => cdr(qaPair);

const sayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const gameExec = (gameDescription, generateQuestionAnswerPair) => {
  console.log(`Welcome to the Brain Games!\n${gameDescription}\n`);
  const userName = sayHi();
  for (let counter = 0; counter < gameEnd; counter += 1) {
    const qaPair = generateQuestionAnswerPair();
    console.log(`Question: ${getQuestion(qaPair)}`);
    const correctAnswer = getAnswer(qaPair);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default gameExec;
