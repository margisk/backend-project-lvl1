import { getRandomInt } from '../index.js';

export const gameInstruction = 'What number is missing in the progression?';

const generateProgression = () => {
  const startingNumber = getRandomInt(100);
  const randomStep = getRandomInt(10) + 1;
  const randomLength = getRandomInt(10) + 5;
  const progression = [];
  let currentNumberToPush = startingNumber;

  for (let i = 0; i < randomLength; i += 1) {
    progression.push(currentNumberToPush);
    currentNumberToPush += randomStep;
  }

  return progression;
};

export const createGameContent = () => {
  const generatedProgression = generateProgression();
  const missingNumberPosition = getRandomInt(generatedProgression.length);
  const numberToGuess = generatedProgression[missingNumberPosition];
  generatedProgression[missingNumberPosition] = '..';
  return [generatedProgression.join(' '), numberToGuess];
};
