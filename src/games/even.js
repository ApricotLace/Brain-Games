import {
  cons,
} from 'hexlet-pairs';
import { getRandomNum, booleanToAnswer } from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 1;
const maxRandNum = 100;
const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const correctAnswerSetter = number => booleanToAnswer(isEven(number));
const generateQuestionAnswerPair = () => {
  const number = getRandomNum(minRandNum, maxRandNum);
  return cons(`${number}`, correctAnswerSetter(number));
};

export default () => gameExec(gameDescription, generateQuestionAnswerPair);
