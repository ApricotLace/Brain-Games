import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const gameEnd = 3;
const getGameDescription = Game => car(Game);
const generatePairOfQandA = Game => cdr(Game)();
const getQuestion = qaPair => car(qaPair);
const getAnswer = qaPair => cdr(qaPair);

const sayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const gameExec = (Game) => {
  const gameIntro = `Welcome to the Brain Games!\n${getGameDescription(Game)}\n`;
  console.log(gameIntro);
  const userName = sayHi();
  for (let counter = 0; counter < gameEnd; counter += 1) {
    const qaPair = generatePairOfQandA(Game);
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
