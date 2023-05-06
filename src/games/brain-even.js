import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getRandomInt = () => Math.round(Math.random() * 100);

const isEvenExplicit = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askUser = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const evenGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const correctGuessesToWin = 3;
  let userCorrectGuesses = 0;

  while (userCorrectGuesses < correctGuessesToWin) {
    const numberToAsk = getRandomInt();
    console.log(`Question: ${numberToAsk}`);
    const userAnswer = askUser();
    const correctAnswer = isEvenExplicit(numberToAsk);

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is the wrong answer :(. The correct answer was ${correctAnswer}`);
      console.log(`Let's try again ${userName}`);
      return;
    }
    console.log('Correct!');
    userCorrectGuesses += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
