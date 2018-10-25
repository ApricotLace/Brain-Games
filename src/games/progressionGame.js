import { getRandomNum, game, makeQuestionAnswerPair } from '../utils';
import gameExec from '../gameLauncher';

const minNum = 1;
const maxNum = 10;

const correctAnswerSetter = question => String(question);
const gameDescription = 'What number is missing in this progression?';
const generateQuestionAnswerPair = () => {
  let sequence = '';
  let missingNumber = 0;
  let counter = 0;
  let sequenceTail = getRandomNum(minNum, maxNum);
  const index = getRandomNum(minNum, maxNum);

  while (counter < maxNum) {
    if (counter === index) {
      sequence += '.. ';
      missingNumber += sequenceTail + index;
      sequenceTail += index;
    } else {
      sequence += `${sequenceTail + index} `;
      sequenceTail += index;
    }
    counter += 1;
  }

  return makeQuestionAnswerPair(sequence, correctAnswerSetter(missingNumber));
};

const launchGame = () => gameExec(game(gameDescription, generateQuestionAnswerPair));

export default launchGame;
