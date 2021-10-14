import {
  correctAnswersToWin, getUserName, greetUser,
  getRandomInt, askUser, isAnswerCorrect,
} from '../index.js';

const generateProgression = () => {
  const startingNumber = getRandomInt(100);
  const randomStep = getRandomInt(10);
  const randomLength = getRandomInt(10) + 5;
  const progression = [];
  let currentNumberToPush = startingNumber;

  for (let i = 0; i < randomLength; i += 1) {
    progression.push(currentNumberToPush);
    currentNumberToPush += randomStep;
  }

  return progression;
};

const progressionGame = () => {
  const userName = getUserName();
  greetUser(userName);
  console.log('What number is missing in the progression?');

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswersToWin) {
    const generatedProgression = generateProgression();
    const missingNumberPosition = getRandomInt(generatedProgression.length);
    const numberToGuess = generatedProgression[missingNumberPosition];
    generatedProgression[missingNumberPosition] = '..';
    const userAnswer = askUser(generatedProgression.join(' '));

    if (!isAnswerCorrect(numberToGuess, userAnswer)) {
      console.log(`${userAnswer} is the wrong answer :(. The correct answer was ${numberToGuess}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswerCounter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
