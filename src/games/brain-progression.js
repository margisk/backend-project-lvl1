import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../index.js';

export const gameInstruction = 'What number is missing in the progression?';

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
  const progStep = getRandomInt(5);
  const randomProgLength = getRandomInt(10);
  const minProgLength = 5;
  const progLength = randomProgLength > minProgLength ? randomProgLength : minProgLength;
  const gapIndex = getRandomInt(progLength - 1);

  const progression = createProgression(progStart, progStep, progLength, gapIndex);
  const expression = `${progression.join(' ')}`;
  const correctAnswer = progression[gapIndex - 1] + progStep;
  return cons(expression, correctAnswer);
};
