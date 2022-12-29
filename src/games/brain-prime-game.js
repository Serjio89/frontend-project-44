import beginGame from '../index.js';

import getRandomNumber from '../randomNumber.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, j = Math.sqrt(num); i <= j; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const startGame = () => {
  const questionNum = getRandomNumber();
  const rightAnswer = isPrime(questionNum) ? 'yes' : 'no';
  return [questionNum, rightAnswer];
};

export default () => {
  beginGame(taskGame, startGame);
};
