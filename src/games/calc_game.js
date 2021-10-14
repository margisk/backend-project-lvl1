import {
  cons, car, cdr, isPair,
} from '@hexlet/pairs';

import {
  correctAnswersToWin, getUserName, greetUser,
  getRandomInt, getRandomOperation, askUser, isAnswerCorrect,
} from '../index.js';

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

const calcGame = () => {
  const userName = getUserName();
  greetUser(userName);
  console.log('What is the result of the expression?');

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswersToWin) {
    const firstNumberToAsk = getRandomInt(100);
    const secondNumberToAsk = getRandomInt(100);
    const operation = getRandomOperation();
    const expression = cons(operation, cons(firstNumberToAsk, secondNumberToAsk));
    const userAnswer = askUser(prettifyExpression(expression));
    const calculatedAnswer = calculateCorrectAnswer(expression);

    if (!isAnswerCorrect(calculatedAnswer, userAnswer)) {
      console.log(`${userAnswer} is the wrong answer :(. The correct answer was ${calculatedAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswerCounter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
