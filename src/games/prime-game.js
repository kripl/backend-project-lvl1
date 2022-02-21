import {
  getRandomNum, getAnswere, getName, sayGreet,
} from '../cli.js';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  } 
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  const name = getName();
  sayGreet(name);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randNum = getRandomNum(15);
    console.log(`Question: ${randNum}`);
    const answer = getAnswere();
    const corrAns = isPrime(randNum);
    if (corrAns === answer) {
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAns}'.\nLet's try again, ${name}!`));
    }
  }
  return (console.log(`Congratulations, ${name}!`));
};
export default primeGame;