import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getRandomInt = () => Math.floor(Math.random() * 100);

const isEvenExplicit = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askUser = (number) => {
  const input = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${input}`);
  return input;
};

const isAnswerCorrect = (numberAsked, userAnswer) => {
  const correctAnswer = isEvenExplicit(numberAsked);

  if (userAnswer !== correctAnswer) {
    return false;
  }

  return true;
};

const evenOddGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerCounter = 0;
  const numberOfAnswersToWin = 3;

  while (correctAnswerCounter < numberOfAnswersToWin) {
    const numberToAsk = getRandomInt();
    const userAnswer = askUser(numberToAsk);

    if (!isAnswerCorrect(numberToAsk, userAnswer)) {
      console.log(`${userAnswer} is the wrong answer :(. The correct answer was ${isEvenExplicit(numberToAsk)}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswerCounter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default evenOddGame;
