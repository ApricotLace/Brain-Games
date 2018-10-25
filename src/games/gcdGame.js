import {
  car, cdr, cons,
} from 'hexlet-pairs';
import { getRandomNum, game, makeQuestionAnswerPair } from '../utils';
import gameExec from '../gameLauncher';

const minNum = 1;
const maxNum = 50;

const gcd = (number1, number2) => (number2 ? gcd(number2, number1 % number2) : number1);
const makeNumberPair = (number1, number2) => cons(number1, number2);
const getNumber1 = numbPair => car(numbPair);
const getNumber2 = numbPair => cdr(numbPair);

const gameDescription = 'Find the greatest common divisor of given numbers.';
const correctAnswerSetter = question => String(gcd(getNumber1(question), getNumber2(question)));
const generateQuestionAnswerPair = () => {
  const pairOfNumber = makeNumberPair(getRandomNum(minNum, maxNum),
    getRandomNum(minNum, maxNum));
  return makeQuestionAnswerPair(`${getNumber1(pairOfNumber)} ${getNumber2(pairOfNumber)}`, correctAnswerSetter(pairOfNumber));
};

const launchGame = () => gameExec(game(gameDescription, generateQuestionAnswerPair));

export default launchGame;
