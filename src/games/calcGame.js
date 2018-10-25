import {
  car, cdr, cons,
} from 'hexlet-pairs';
import gameExec from '../gameLauncher';

const makeLogic = (question, correctAnswer) => cons(question, correctAnswer);
const makeGame = (gameDescription, gameLogic) => cons(gameDescription, gameLogic);
const makeQuestionPair = (expressionStringRepresentation,
  expression) => cons(expressionStringRepresentation, expression);

const makeExpressionPair = (number1, number2, sign) => cons(sign, cons(number1, number2));
const getNumber1 = expressionPair => car(cdr(expressionPair));
const getNumber2 = expressionPair => cdr(cdr(expressionPair));
const getSign = expressionPair => car(expressionPair);
const getRandomSign = str => str[Math.floor(Math.random() * (str.length - 0)) + 0];
const maxRandNum = 25;
const minRandNum = 0;
const generateRandomNum = () => Math.floor(
  Math.random() * (maxRandNum - minRandNum),
) + minRandNum;
const reverse = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse(str.substr(0, len - 1));
};

const gameDescription = 'What is the result of the expression?';
const generateQuestion = () => {
  const Expression = makeExpressionPair(generateRandomNum(), generateRandomNum(), getRandomSign('+-*'));
  return makeQuestionPair(`${getNumber1(Expression)} ${getSign(Expression)} ${getNumber2(Expression)}`, Expression);
};

const correctAnswerSetter = (question) => {
  switch (getSign(question)) {
    case '+':
      return String(getNumber1(question) + getNumber2(question));
    case '-':
      return String(getNumber1(question) - getNumber2(question));
    case '*':
      return String(getNumber1(question) * getNumber2(question));
    default:
  }
  return console.log('Whooooops, something goes wrong?');
};

const Game = makeGame(gameDescription, makeLogic(generateQuestion, correctAnswerSetter));
const launchGame = () => gameExec(Game);

export default launchGame;
