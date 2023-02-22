import beginGame from '../index.js';

import getRandomNumber from '../randomNumber.js';

const gameTask = 'What is the result of the expression?';
let answer;

const calculate = (operand1, operator, operand2) => {
  switch (operator) {
    case '*':
      answer = operand1 * operand2;
      return answer;
    case '+':
      answer = operand1 + operand2;
      return answer;
    case '-':
      answer = operand1 - operand2;
      return answer;
    default:
      return undefined;
  }
};
const startGame = () => {
  const operatorSign = ['+', '-', '*'];
  const operator = operatorSign[getRandomNumber(0, 2)];
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  calculate(operand1, operator, operand2);
  const question = [operand1, operator, operand2].join(' ');
  const solution = String(calculate(operand1, operator, operand2));
  return [question, solution];
};

export default () => {
  beginGame(gameTask, startGame);
};
