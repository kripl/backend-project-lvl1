import {
  getRandomNum, getAnswere, getName, sayGreet,
} from '../cli.js';

const getGreatNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

const getLowNum = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};

const getGcd = (num1, num2) => {
  const greatNum = getGreatNum(num1, num2);
  const lowNum = getLowNum(num1, num2);
  const divisors = [];
  if (greatNum % lowNum === 0) {
    return lowNum;
  }
  for (let i = 2; i <= lowNum; i += 1) {
    if (lowNum % i === 0 && greatNum % i === 0) {
      divisors.push(i);
    }
  }
  return divisors[divisors.length - 1];
};

const gcdGame = () => {
  const name = getName();
  sayGreet(name);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNum(101);
    const num2 = getRandomNum(101);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswere();
    const corrAns = getGcd(num1, num2);
    if (corrAns === Number(answer)) {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAns}'.\nLet's try again, ${name}!`));
    }
  }
  return (console.log(`Congratulations, ${name}!`));
};
export default gcdGame;
