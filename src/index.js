import readlineSync from 'readline-sync';

export const correctAnswersToWin = 3;

export const getUserName = () => readlineSync.question('May I have your name? ');

export const greetUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const askUser = (questionContent) => {
  const userInput = readlineSync.question(`Question: ${questionContent} `);
  console.log(`Your answer: ${userInput}`);
  return userInput;
};

export const isAnswerCorrect = (correctAnswer, userAnswer) => {
  if (userAnswer !== correctAnswer.toString()) {
    return false;
  }

  return true;
};
