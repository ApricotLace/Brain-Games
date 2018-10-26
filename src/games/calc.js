import {
  cons,
} from 'hexlet-pairs';
import { getRandomNum } from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 1;
const maxRandNum = 15;
const signsStr = '+-*';
const getRandomSign = str => str[Math.floor(Math.random() * (str.length - 0)) + 0];

const gameDescription = 'What is the result of the expression?';
const correctAnswerSetter = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
  }
  return console.log('Whooooops, something goes wrong?');
};
const generateQuestionAnswerPair = () => {
  const number1 = getRandomNum(minRandNum, maxRandNum);
  const number2 = getRandomNum(minRandNum, maxRandNum);
  const sign = getRandomSign(signsStr);
  return cons(`${number1} ${sign} ${number2}`, correctAnswerSetter(number1, number2, sign));
};

export default () => gameExec(gameDescription, generateQuestionAnswerPair);
