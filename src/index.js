//общая логика игры
//brain-calc
import readlineSync from 'readline-sync'

// Основная логика игры
// Приветствие
const runGame = (check, game) => {
  console.log('Welcome to the Brain Games!')

  // Запрос имени пользователя
const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(check)
  
  // Основная логика игры
  let correctAnswersCount = 0;
  const roundsCount = 3;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};



export default runGame