import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const gameEnd = 3;
const getQuestion = Game => (car(cdr(Game)));
const getCorrectAnswer = Game => (cdr(cdr(Game)));

const sayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const gameExec = (Game) => {
  const gameRules = `Welcome to the Brain Games!\n${car(Game)}\n`;
  const questionSetter = getQuestion(Game);
  const correctAnswerSetter = getCorrectAnswer(Game);

  console.log(gameRules);
  const userName = sayHi();

  for (let counter = 0; counter < gameEnd; counter += 1) {
    const question = questionSetter();
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

export default gameExec;
