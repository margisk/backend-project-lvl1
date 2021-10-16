import {
  cons, car, cdr, isPair,
} from '@hexlet/pairs';

import { getRandomInt } from '../index.js';

export const gameInstruction = 'Find the greatest common divisor of given numbers';

const calculateGCD = (numPair) => {
  if (!isPair(numPair)) {
    return null;
  }

  const firstNum = car(numPair);
  const secondNum = cdr(numPair);
  const biggerNumber = firstNum > secondNum ? firstNum : secondNum;
  const smallerNumber = firstNum < secondNum ? firstNum : secondNum;

  const gcdIter = (a, b) => {
    if (a % b === 0) {
      return b;
    }

    return gcdIter(b, a % b);
  };

  return gcdIter(biggerNumber, smallerNumber);
};

const prettifyPair = (pair) => {
  if (!isPair(pair)) {
    return null;
  }

  return `${car(pair)} ${cdr(pair)}`;
};

export const createGameContent = () => {
  const firstNumberToAsk = getRandomInt(100);
  const secondNumberToAsk = getRandomInt(100);
  const numberPair = cons(firstNumberToAsk, secondNumberToAsk);
  const calculatedAnswer = calculateGCD(numberPair);
  return [prettifyPair(numberPair), calculatedAnswer];
};
