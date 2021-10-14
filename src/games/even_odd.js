import {
  correctAnswersToWin, getUserName, greetUser,
  getRandomInt, askUser, isAnswerCorrect,
} from '../index.js';

const isEvenExplicit = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenOddGame = () => {
  const userName = getUserName();
  greetUser(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswersToWin) {
    const numberToAsk = getRandomInt(100);
    const userAnswer = askUser(numberToAsk);
    const calculatedAnswer = isEvenExplicit(numberToAsk);

    if (!isAnswerCorrect(calculatedAnswer, userAnswer)) {
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
