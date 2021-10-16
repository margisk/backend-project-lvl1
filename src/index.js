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

export const runGame = (instruction, gameContentCreator) => {
  const userName = getUserName();
  greetUser(userName);
  console.log(instruction);

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswersToWin) {
    const [taskForUser, correctAnswer] = gameContentCreator();
    const userAnswer = askUser(taskForUser);
    if (!isAnswerCorrect(correctAnswer, userAnswer)) {
      console.log(`${userAnswer} is the wrong answer :(. The correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswerCounter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
