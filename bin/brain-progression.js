//игра "Арифметическая прогрессия"
//импорт модулей
import readlineSync from 'readline-sync'
import { greetings, isName } from "../src/cli.js"

//рандомчик
const generation = (length = 10) => {
    const randomNum = Math.floor(Math.random() * 10)
    const randomStep = Math.floor(Math.random() * 5) + 1
    const progression = []

//прогрессия
    for (let i = 0; i < length; i++) {
        progression.push(randomNum + i * randomStep)
    }

    return progression
};

//скрытие эелемента
const hideElement = (progression) => {
    const randomIndex = Math.floor(Math.random() * progression.length)
    const replaceElem = progression[randomIndex]
    progression[randomIndex] = '..'; //замена
    return { progression, replaceElem }
};

//начало
const gameProgression = () => {
    greetings()
    const userName = isName()
    console.log('What number is missing in the progression?')

    //счетчик
    let correctAnswers = 0
    const rounds = 3

    for (let i = 0; i < rounds; i++) {
        const length = Math.floor(Math.random() * 6) + 5
        const progression = generation(length)
        const { progression: displayedProgression, replaceElem } = hideElement(progression)

        //пользователю
        console.log(`Question: ${displayedProgression.join(' ')}`)

        //ответ
        const userAnswer = readlineSync.question('Your answer: ')

//проверка ответа
        if (parseInt(userAnswer, 10) === replaceElem) {
            console.log('Correct!')
            correctAnswers += 1
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${replaceElem}.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
//конец
    console.log(`Congratulations, ${userName}!`)
}

// Запуск игры
gameProgression()