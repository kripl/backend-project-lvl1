import {
  getRandomNum, getRandonNumRange, getAnswere, getName, sayGreet,
} from '../cli.js';

const getProgression = () => {
  const nums = [];
  let progrNum = getRandomNum(101);
  const interval = getRandonNumRange(2, 11);
  for (let i = 0; i < 10; i += 1) {
    progrNum += interval;
    nums.push(progrNum);
  }
  return nums;
};

const progrGame = () => {
  const name = getName();
  sayGreet(name);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const nums = getProgression();
    const changeInd = getRandonNumRange(0, nums.length);
    const corrAns = nums[changeInd];
    nums[changeInd] = '...';
    const strProgr = nums.join(' ');
    console.log(`Question: ${strProgr}`);
    const answer = getAnswere();
    if (String(corrAns) === answer) {
      console.log('Correct!');
    } else {
        return (console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAns}'.\nLet's try again, ${name}!`));
    }
  }
  return (console.log(`Congratulations, ${name}!`));
};
export default progrGame;
