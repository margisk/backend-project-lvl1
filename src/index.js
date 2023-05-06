import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { createGameContent } from './games/brain-calc.js';

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = (name) => console.log(`Hello, ${name}!`);

// move these functions to util?

export const getRandomInt = (max) => Math.round(Math.random() * max);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const askUser = (question) => {
  console.log(`Question: ${question}`);
  const input = readlineSync.question('Your answer: ');
  return input;
};

const runGame = (instruction, gameContentCreator) => {
  const userName = getUserName();
  greetUser(userName);
  console.log(instruction);

  const correctAnswersToWin = 3;
  let userCorrectAnswers = 0;
  while (userCorrectAnswers < correctAnswersToWin) {
    const gameContent = gameContentCreator();
    const task = car(gameContent);
    const correctAnswer = cdr(gameContent);
    const userAnswer = askUser(task);

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is a wrong answer :(. The correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    userCorrectAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
