import {
  cons,
} from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameExec from '../gameLauncher';

const minNum = 1;
const maxNum = 100;
const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const correctAnswerSetter = number => (isEven(number) ? 'yes' : 'no');
const generateQuestionAnswerPair = () => {
  const number = getRandomNum(minNum, maxNum);
  return cons(`${number}`, correctAnswerSetter(number));
};

const launchGame = () => gameExec(gameDescription, generateQuestionAnswerPair);

export default launchGame;
