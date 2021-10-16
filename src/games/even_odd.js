import { getRandomInt } from '../index.js';

export const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenExplicit = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const createGameContent = () => {
  const numberToAsk = getRandomInt(100);
  const answer = isEvenExplicit(numberToAsk);

  return [numberToAsk, answer];
};
