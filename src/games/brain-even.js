import cons from '@hexlet/pairs';
import { getRandomInt } from '../index.js';

export const instruction = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenExplicit = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const createGameContent = () => {
  const numberToAsk = getRandomInt(100);
  const correctAnswer = isEvenExplicit(numberToAsk);
  return cons(numberToAsk, correctAnswer);
};
