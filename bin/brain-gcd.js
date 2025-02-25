//игра НОД
//импорт модулей
import readlineSync from 'readline-sync'
import { greetings, isName } from "../src/cli.js"

//вычесление нод
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
};

//начало
const gameGcd = () => {
  greetings()
  const userName = isName()
  console.log('Find the greatest common divisor of given numbers.')

  //счетчик
  let correctAnswers = 0
  const rounds = 3

  //рандом
  for (let i = 0; i < rounds; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    console.log(`Question: ${num1} ${num2}`)
    
    //ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ')

    //проверка
    const correctAnswer = gcd(num1, num2)

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
//конец
  console.log(`Congratulations, ${userName}!`)
}

// Запуск игры
gameGcd()