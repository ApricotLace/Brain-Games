import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const gameEnd = 3;
const getQuestion = Game => (car(cdr(Game)));
const getCorrectAnswer = Game => (cdr(cdr(Game)));
const getGameDescription = Game => car(Game);
const getStrRepresentationOfPair = question => car(question);
const getPair = question => cdr(question);

const sayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const gameExec = (Game) => {
  const gameIntro = `Welcome to the Brain Games!\n${getGameDescription(Game)}\n`;
  const questionSetter = getQuestion(Game);
  const correctAnswerSetter = getCorrectAnswer(Game);

  console.log(gameIntro);
  const userName = sayHi();

  for (let counter = 0; counter < gameEnd; counter += 1) {
    const question = questionSetter();
    console.log(`Question: ${getStrRepresentationOfPair(question)}`);
    const correctAnswer = correctAnswerSetter(getPair(question));
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
