import {
  car, cdr, cons,
} from 'hexlet-pairs';
import gameExec from '../gameLauncher';

const makeLogic = (question, correctAnswer) => cons(question, correctAnswer);
const makeGame = (gameDescription, gameLogic) => cons(gameDescription, gameLogic);
const makeQuestionPair = (pairStringRepresentation, pair) => cons(pairStringRepresentation, pair);
const makeNumberPair = (number1, number2) => cons(number1, number2);
const getNumber1 = numbPair => car(numbPair);
const getNumber2 = numbPair => cdr(numbPair);

const gcd = (number1, number2) => (number2 ? gcd(number2, number1 % number2) : number1);
const maxRandNum = 50;
const minRandNum = 0;
const generateRandomNum = () => Math.floor(
  Math.random() * (maxRandNum - minRandNum),
) + minRandNum;

const gameDescription = 'Find the greatest common divisor of given numbers.';
const generateQuestion = () => {
  const pairOfNumber = makeNumberPair(generateRandomNum(), generateRandomNum());
  return makeQuestionPair(`${getNumber1(pairOfNumber)} ${getNumber2(pairOfNumber)}`, pairOfNumber);
};

const correctAnswerSetter = question => String(gcd(getNumber1(question), getNumber2(question)));

const Game = makeGame(gameDescription, makeLogic(generateQuestion, correctAnswerSetter));
const launchGame = () => gameExec(Game);

export default launchGame;
