import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const sayGreet = () => console.log(`Hello, ${getName()}!`);