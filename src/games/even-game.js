import {
  getAnswere, getRandomNum, getName, sayGreet,
} from './cli.js';

const evenGame = () => {
  const name = getName();
  sayGreet(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const rangeRandomNum = 101;
  let i = 1;
  while (i <= 3) {
    const randomNum = getRandomNum(rangeRandomNum);
    console.log(`Question: ${randomNum}`);
    const answer = getAnswere();
    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      return (console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`));
    }
    i += 1;
  }
  return (console.log(`Congratulations, ${name}`));
};
export default evenGame;
