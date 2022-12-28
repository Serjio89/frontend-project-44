import beginGame from '../index.js';

import getRandomNumber from '../randomNumber.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const startGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const task = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);
  return [task, String(rightAnswer)];
};

export default () => {
  beginGame(taskGame, startGame);
};
