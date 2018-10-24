import { makeLogic, makeGame } from '../makeGame';
import { generateRandomNum, reverse } from '../constants&functions';

const gameRules = 'What is the result of the expression?';
const getRandomSign = str => str[Math.floor(Math.random() * (str.length - 0)) + 0];

const generateExpression = () => {
  const signsStr = '+-*';
  const sign = getRandomSign(signsStr);
  const number1 = generateRandomNum();
  const number2 = generateRandomNum();
  const expression = `${number1} ${sign} ${number2}`;
  return expression;
};

const questionSetter = generateExpression;
const correctAnswerSetter = (expression) => {
  let tmpNum1 = '';
  let tmpNum2 = '';
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === ' ') {
      break;
    }
    tmpNum1 += expression[i];
  }
  for (let i = expression.length - 1; i > 0; i -= 1) {
    if (expression[i] === ' ') {
      break;
    }
    tmpNum2 += expression[i];
  }
  for (let i = 0; i < expression.length; i += 1) {
    switch (expression[i]) {
      case '+':
        return String(Number(tmpNum1) + Number(reverse(tmpNum2)));
      case '-':
        return String(Number(tmpNum1) - Number(reverse(tmpNum2)));
      case '*':
        return String(Number(tmpNum1) * Number(reverse(tmpNum2)));
      default:
    }
  }
  return console.log('Whoooops, something goes wrong!');
};

const Game = makeGame(gameRules, makeLogic(questionSetter, correctAnswerSetter));
export default Game;
