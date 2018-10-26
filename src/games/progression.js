import {
  cons,
} from 'hexlet-pairs';
import { getRandomNum } from '../utils';
import gameExec from '../gameLauncher';

const minRandNum = 0;
const maxRandNum = 15;
const sequenceBegin = 0;
const sequenceEnd = 10;

const gameDescription = 'What number is missing in this progression?';
const correctAnswerSetter = missingNumber => String(missingNumber);
const generateQuestionAnswerPair = () => {
  const firstElement = getRandomNum(minRandNum, maxRandNum);
  const step = getRandomNum(minRandNum, maxRandNum);
  const missingNumberIndex = getRandomNum(sequenceBegin, sequenceEnd);
  let sequence = '';
  let missingNumber = 0;

  for (let counter = sequenceBegin; counter < sequenceEnd; counter += 1) {
    if (counter === missingNumberIndex) {
      sequence += '.. ';
      missingNumber = firstElement + counter * step;
    } else {
      sequence += `${firstElement + counter * step} `;
    }
  }
  
  return cons(sequence, correctAnswerSetter(missingNumber));
};

export default () => gameExec(gameDescription, generateQuestionAnswerPair);
