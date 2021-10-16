import {
  cons, car, cdr, isPair,
} from '@hexlet/pairs';

import { getRandomInt, getRandomOperation } from '../index.js';

export const gameInstruction = 'What is the result of the expression?';

const calculateCorrectAnswer = (expr) => {
  let answer = 0;

  if (!isPair(expr)) {
    return null;
  }

  const operation = car(expr);
  const num1 = car(cdr(expr));
  const num2 = cdr(cdr(expr));

  if (operation === '+') {
    answer = num1 + num2;
  } else if (operation === '-') {
    answer = num1 - num2;
  } else if (operation === '*') {
    answer = num1 * num2;
  }

  return answer;
};

const prettifyExpression = (expr) => {
  if (!isPair(expr)) {
    return null;
  }

  const operation = car(expr);
  const firstNumber = car(cdr(expr)).toString();
  const secondNumber = cdr(cdr(expr)).toString();
  return `${firstNumber} ${operation} ${secondNumber}`;
};

export const createGameContent = () => {
  const firstNumberToAsk = getRandomInt(100);
  const secondNumberToAsk = getRandomInt(100);
  const operation = getRandomOperation();
  const expression = cons(operation, cons(firstNumberToAsk, secondNumberToAsk));
  const calculatedAnswer = calculateCorrectAnswer(expression);
  return [prettifyExpression(expression), calculatedAnswer];
};
