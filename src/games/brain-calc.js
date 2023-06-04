import { cons } from '@hexlet/pairs';
import { getRandomInt, getRandomOperator } from '../index.js';

export const gameInstruction = 'What is the result of the expression?';

const calculateCorrectAnwer = (num1, num2, operator) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('Oops, something went wrong!');
  }
  return result;
};

export const createGameContent = () => {
  const number2 = getRandomInt(100);
  const number1 = getRandomInt(100);
  const randomOperator = getRandomOperator();
  const calculatedAnswer = calculateCorrectAnwer(number1, number2, randomOperator);
  const expression = `${number1} ${randomOperator} ${number2}`;
  return cons(expression, calculatedAnswer);
};
