import readlineSync from 'readline-sync';

export const greeteng = () => {
    const name = readlineSync.question('May I have your name? ');
    const greet = `Hello, ${name}!`;
    return greet;
};
