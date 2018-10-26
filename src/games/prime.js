import {
  cons,
} from 'hexlet-pairs';
import { getRandomNum, booleanToAnswer } from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 0;
const maxRandNum = 100;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const correctAnswerSetter = number => booleanToAnswer(isPrime(number));
const generateQuestionAnswerPair = () => {
  const number = getRandomNum(minRandNum, maxRandNum);
  return cons(`${number}`, correctAnswerSetter(number));
};

export default () => gameExec(gameDescription, generateQuestionAnswerPair);
