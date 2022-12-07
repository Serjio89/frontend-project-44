import readlineSync from 'readline-sync/lib/readline-sync.js';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default greet;
