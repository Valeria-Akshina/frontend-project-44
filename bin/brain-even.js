//игра нечет чет

import readlineSync from 'readline-sync'

const getParityСheck = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const isEven = (num) => num % 2 === 0;

const playGame = () => {
    const userName = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const questionNumber = getParityСheck(1, 100)
        console.log(`Question: ${questionNumber}`)
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
        const correctAnswer = isEven(questionNumber) ? 'yes' : 'no'

        if (userAnswer !== correctAnswer) {
            console.log `${userAnswer} is wrong answer` ; (`. Correct answer was ${correctAnswer}.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
        console.log('Correct!')
        correctAnswers += 1
    }
    console.log(Congratulations, `${userName}!`)
}
playGame()
