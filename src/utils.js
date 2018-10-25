import {
  cons,
} from 'hexlet-pairs';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const game = (
  gameDescription,
  generateQuestionAnswerPair,
) => cons(gameDescription, generateQuestionAnswerPair);

export const makeQuestionAnswerPair = (question, correctAnswer) => cons(question, correctAnswer);
