import {
  car, cdr, cons,
} from 'hexlet-pairs';
import { getRandomNum, game, makeQuestionAnswerPair } from '../utils';
import gameExec from '../gameLauncher';

const minNum = 1;
const maxNum = 15;

const getRandomSign = str => str[Math.floor(Math.random() * (str.length - 0)) + 0];
const makeExpressionPair = (number1, number2, sign) => cons(sign, cons(number1, number2));
const getNum1 = expressionPair => car(cdr(expressionPair));
const getNum2 = expressionPair => cdr(cdr(expressionPair));
const getSign = expressionPair => car(expressionPair);

const gameDescription = 'What is the result of the expression?';
const correctAnswerSetter = (question) => {
  switch (getSign(question)) {
    case '+':
      return String(getNum1(question) + getNum2(question));
    case '-':
      return String(getNum1(question) - getNum2(question));
    case '*':
      return String(getNum1(question) * getNum2(question));
    default:
  }
  return console.log('Whooooops, something goes wrong?');
};
const generateQuestionAnswerPair = () => {
  const expression = makeExpressionPair(getRandomNum(minNum, maxNum), getRandomNum(minNum, maxNum), getRandomSign('+-*'));
  return makeQuestionAnswerPair(`${getNum1(expression)} ${getSign(expression)} ${getNum2(expression)}`, correctAnswerSetter(expression));
};

const launchGame = () => gameExec(game(gameDescription, generateQuestionAnswerPair));

export default launchGame;
