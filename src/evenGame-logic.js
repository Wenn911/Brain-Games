import getRandomNum from './getRandomNum.js';
import engine from './index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameCheck = () => {
  const number = getRandomNum(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => engine(gameRules, gameCheck);

export default evenGame;
