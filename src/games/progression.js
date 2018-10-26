import {
  cons,
} from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 0;
const maxRandNum = 15;
const sequenceBegin = 0;
const sequenceEnd = 10;

const gameDescription = 'What number is missing in this progression?';
const correctAnswerSetter = missingNumber => String(missingNumber);
const generateQuestionAnswerPair = () => {
  let sequence = '';
  let missingNumber = 0;
  let counter = sequenceBegin;
  let firstElement = getRandomNum(minRandNum, maxRandNum);
  const sequenceShift = getRandomNum(minRandNum, maxRandNum);
  const missingNumberIndex = getRandomNum(sequenceBegin, sequenceEnd);

  while (counter < sequenceEnd) {
    if (counter === missingNumberIndex) {
      sequence += '.. ';
      missingNumber += firstElement + sequenceShift;
      firstElement += sequenceShift;
    } else {
      sequence += `${firstElement + sequenceShift} `;
      firstElement += sequenceShift;
    }
    counter += 1;
  }
  return cons(sequence, correctAnswerSetter(missingNumber));
};

const launchGame = () => gameExec(gameDescription, generateQuestionAnswerPair);

export default launchGame;
