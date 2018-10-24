import {
  cons,
} from 'hexlet-pairs';

const makeLogic = (question, correctAnswer) => cons(question, correctAnswer);
const makeGame = (gameRules, gameLogic) => cons(gameRules, gameLogic);

export { makeLogic, makeGame };
