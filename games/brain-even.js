import { cons } from '@hexlet/pairs/index.js';
import startGame from '../src/cli.js';
import getRandomNumber from '../src/randomNumber.js';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const taskGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default (username) => startGame(description, taskGame, username);
