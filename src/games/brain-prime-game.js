import beginGame from '../index.js';

import getRandomNumber from '../randomNumber.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const divisor = Math.sqrt(num);
  for (let i = 2; i <= divisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const startGame = () => {
  const questionNum = getRandomNumber();
  const rightAnswer = getAnswer(questionNum);
  return [questionNum, rightAnswer];
};

export default () => {
  beginGame(taskGame, startGame);
};
