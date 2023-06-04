import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../index.js';

export const gameInstruction = 'What number is missing in the progression?';

// there is sometimes an error with index? is it the realization of randomint?

const createProgression = (startNum, step, length, gapIndex) => {
  const progression = [];
  progression[0] = startNum;
  for (let i = 1; i < length; i += 1) {
    if (i === gapIndex) {
      progression[i] = '..';
    } else {
      progression[i] = startNum + step * i;
    }
  }
  return progression;
};

export const createGameContent = () => {
  const progStart = getRandomInt(100);
  const progStep = getRandomInt(7, 2);
  const progLength = getRandomInt(10, 5);
  const gapIndex = getRandomInt(progLength - 1);

  const progression = createProgression(progStart, progStep, progLength, gapIndex);
  const expression = `${progression.join(' ')}`;
  const correctAnswer = progression[gapIndex - 1] + progStep;
  return cons(expression, correctAnswer);
};
