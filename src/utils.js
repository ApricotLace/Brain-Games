export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const booleanToAnswer = predicate => ((predicate) ? 'yes' : 'no');
