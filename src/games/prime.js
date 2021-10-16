import { getRandomInt } from '../index.js';

export const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeExplicit = (number) => {
  if (number > 1000) {
    console.log('The number is too big');
    return null;
  }

  for (let div = 2; div < Math.sqrt(number); div += 1) {
    if (number % div === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export const createGameContent = () => {
  const numberToAsk = getRandomInt(1000);
  const correctAnswer = isPrimeExplicit(numberToAsk);
  return [numberToAsk, correctAnswer];
};
