import {
  getAnswere, getRandomNum, getName, sayGreet,
} from '../cli.js';

const calcGame = () => {
  const name = getName();
  sayGreet(name);
  console.log('What is the result of the expression?');
  const operations = ['+', '-', '*'];
  for (let i = 1; i <= 3; i += 1) {
    let corrAns = 0;
    const num1 = getRandomNum(101);
    const num2 = getRandomNum(101);
    const randOper = operations[getRandomNum(3)];
    console.log(`Question: ${num1} ${randOper} ${num2}`);
    const answer = getAnswere();
    switch (randOper) {
      case '+':
        corrAns = num1 + num2;
        break;
      case '-':
        corrAns = num1 - num2;
        break;
      default:
        corrAns = num1 * num2;
        break;
    }
    if (corrAns === Number(answer)) {
      console.log('Correct!');
    } else {
      return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAns}'.\nLet's try again, ${name}!`));
    }
  }
  return (console.log(`Congratulations, ${name}!`));
};
export default calcGame;
