import engine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRule = 'What number is missing in the progression?';
const generateProgression = (start, stepProgression, progressionLength) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = start + (i * stepProgression);
    progression.push(result);
  }
  return progression;
};

const gameLogic = () => {
  const number1 = getRandomNum(1, 100);
  const step = getRandomNum(2, 10);
  const randomLength = getRandomNum(5, 10);
  const progression = generateProgression(number1, step, randomLength);
  const randomIndex = getRandomNum(0, progression.length - 1);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const gameProgression = () => engine(gameRule, gameLogic);

export default gameProgression;
