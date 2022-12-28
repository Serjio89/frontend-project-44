import beginGame from '../index.js';

import getRandomNumber from '../randomNumber.js';

const taskGame = 'What number is missing in the progression?';

const taskProgression = (firstNum, sumOfProgression, numbersAmount = 9) => {
  const progression = [];
  for (let i = firstNum; progression.length <= numbersAmount; i += sumOfProgression) {
    progression.push(i);
  }
  return progression;
};
const startGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const answerNumber = getRandomNumber(0, 9);
  const task = taskProgression(num1, num2);
  const rightAnswer = task[answerNumber];
  task[answerNumber] = '...';
  return [task.join(' '), String(rightAnswer)];
};

export default () => {
  beginGame(taskGame, startGame);
};
