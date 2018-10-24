import { makeLogic, makeGame } from '../makeGame';
import { generateRandomNum } from '../constants&functions';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const questionSetter = generateRandomNum;
const isEven = number => number % 2 === 0;
const correctAnswerSetter = question => (isEven(question) ? 'yes' : 'no');
const Game = makeGame(gameRules, makeLogic(questionSetter, correctAnswerSetter));

export default Game;
