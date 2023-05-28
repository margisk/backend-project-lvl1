import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../index.js';

export const gameInstruction = 'Find the greatest common divisor of given numbers';

const calculateGcd = (num1, num2) => {
  let result = 1;
  const smallerNumber = num1 > num2 ? num1 : num2;

  for (let i = 2; i <= smallerNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

export const createGameContent = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const calculatedAnswer = calculateGcd(number1, number2);
  const expression = `${number1} ${number2}`;
  return cons(expression, calculatedAnswer);
};
