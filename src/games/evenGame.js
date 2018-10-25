import {
  cons,
} from 'hexlet-pairs';
import gameExec from '../gameLauncher';


const makeLogic = (question, correctAnswer) => cons(question, correctAnswer);
const makeGame = (gameDescription, gameLogic) => cons(gameDescription, gameLogic);
const makeQuestionPair = (expressionStringRepresentation,
  number) => cons(expressionStringRepresentation, number);
const maxRandNum = 100;
const minRandNum = 0;
const generateRandomNum = () => Math.floor(
  Math.random() * (maxRandNum - minRandNum),
) + minRandNum;
const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const generateQuestion = () => {
  const number = generateRandomNum();
  return makeQuestionPair(`${number}`, number);
};
const correctAnswerSetter = question => (isEven(question) ? 'yes' : 'no');

const Game = makeGame(gameDescription, makeLogic(generateQuestion, correctAnswerSetter));
const launchGame = () => gameExec(Game);

export default launchGame;
