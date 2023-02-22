import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  return console.log(`Hello, ${name}!`);
};
