import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const getAnswere = () => {
  const answere = readlineSync.question('Your answere: ');
  return answere;
};

export const getRandomNum = (max) => Math.floor(Math.random() * max);

export const sayGreet = (name = getName()) => console.log(`Hello, ${name}!`);
