import engine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const gameCheck = () => {
  const number1 = getRandomNum(1, 25);
  const number2 = getRandomNum(1, 25);
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${calculate(number1, operator, number2)}`;
  return [question, correctAnswer];
};

const calcGame = () => engine(gameRules, gameCheck);

export default calcGame;
