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
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = sayHi();
  for (let counter = 0; counter < gameEnd; counter += 1) {
    const questionAndAnswer = generateQuestionAnswerPair();
    const question = getQuestion(questionAndAnswer);
    const correctAnswer = getAnswer(questionAndAnswer);
    console.log(`Question: ${question}`);
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
