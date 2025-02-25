//Игра "Простое ли число?"
//импорт модулей
import readlineSync from 'readline-sync'
import { greetings, isName } from "../src/cli.js"

//простое ли число
const isPrimeNum = (num) => {
    if (num <= 1) return false //просто число не может быть равен одному или быть меньше одного
    for (let i = 2; i <= Math.sqrt(num); i++) { //если не делится то тож не простое
        if (num % i === 0) return false
    }
    return true
}

//генерация 
const randomNumber = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//начало
const gamePrime = () => {
    greetings()
    const userName = isName()
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    //счетчик
    const rounds = 3

    //проверка
    for (let i = 0; i < rounds; i++) {
        const number = randomNumber()
        const correctAnswer = isPrimeNum(number) ? 'yes' : 'no'

        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer === correctAnswer) { 
            console.log('Correct!')
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
            console.log(`Let's try again, ${userName}!); // Предлагает попробовать снова`)
            return
        }
    }
//конец
    console.log(`Congratulations, ${userName}! You answered all questions correctly!`)
}

gamePrime()