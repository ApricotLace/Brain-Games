import {
  cons,
} from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 1;
const maxRandNum = 50;
const gcd = (number1, number2) => (number2 ? gcd(number2, number1 % number2) : number1);

const gameDescription = 'Find the greatest common divisor of given numbers.';
const correctAnswerSetter = (number1, number2) => String(gcd(number1, number2));
const generateQuestionAnswerPair = () => {
  const number1 = getRandomNum(minRandNum, maxRandNum);
  const number2 = getRandomNum(minRandNum, maxRandNum);
  return cons(`${number1} ${number2}`, correctAnswerSetter(number1, number2));
};

const launchGame = () => gameExec(gameDescription, generateQuestionAnswerPair);

export default launchGame;
