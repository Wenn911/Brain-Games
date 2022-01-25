import engine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
};

const gameLogic = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${calculateGCD(number1, number2)}`;
  return [question, correctAnswer];
};

const gameGCD = () => engine(gameRules, gameLogic);

export default gameGCD;
