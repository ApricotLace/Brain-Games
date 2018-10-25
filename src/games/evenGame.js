import { getRandomNum, game, makeQuestionAnswerPair } from '../utils';
import gameExec from '../gameLauncher';

const minNum = 1;
const maxNum = 100;

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const correctAnswerSetter = question => (isEven(question) ? 'yes' : 'no');
const generateQuestionAnswerPair = () => {
  const number = getRandomNum(minNum, maxNum);
  return makeQuestionAnswerPair(`${number}`, correctAnswerSetter(number));
};

const launchGame = () => gameExec(game(gameDescription, generateQuestionAnswerPair));

export default launchGame;
