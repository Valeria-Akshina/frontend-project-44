//игра нечет чет
//импорт модулей
import readlineSync from 'readline-sync'
import { greetings, isName } from "../src/cli.js";

//проверка чет
const isEven = (number) => number % 2 === 0

//начало
const gameEven = () => {
  greetings()
  const userName = isName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  //счетчик
  let correctAnswers = 0
  const rounds = 3

  //рандом
  for (let i = 0; i < rounds; i++) {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNumber}`)
    
    //ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    //проверка ответа
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log (`${userAnswer} is wrong answer; (Correct answer was ${correctAnswer}).`)
    }
  }
// конец
  console.log(`Congratulations, ${userName}! You answered correctly ${correctAnswers} out of ${rounds} questions.`)
}

gameEven()
