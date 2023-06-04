import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../index.js';

export const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const result = true;
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return result;
};

export const createGameContent = () => {
  const number = getRandomInt(1000);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const expression = `${number}`;
  return cons(expression, correctAnswer);
};
