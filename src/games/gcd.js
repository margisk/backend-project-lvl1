import {
  cons, car, cdr, isPair,
} from '@hexlet/pairs';

import {
  correctAnswersToWin, getUserName, greetUser,
  getRandomInt, askUser, isAnswerCorrect,
} from '../index.js';

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

const gcdGame = () => {
  const userName = getUserName();
  greetUser(userName);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswersToWin) {
    const firstNumberToAsk = getRandomInt(100);
    const secondNumberToAsk = getRandomInt(100);
    const numberPair = cons(firstNumberToAsk, secondNumberToAsk);
    const userAnswer = askUser(prettifyPair(numberPair));
    const calculatedAnswer = calculateGCD(numberPair);

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

export default gcdGame;
