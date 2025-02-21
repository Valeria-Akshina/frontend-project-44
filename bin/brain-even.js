//игра нечет чет

import readlineSync from 'readline-sync'
import { greetings, isName } from "../src/cli.js";

const isEven = (number) => number % 2 === 0

const gameEven = () => {
  greetings()
  const userName = isName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log (`${userAnswer} is wrong answer; (Correct answer was ${correctAnswer}).`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

gameEven()
