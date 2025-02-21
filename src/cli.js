//ввод для имени
import readlineSync from 'readline-sync'

export const greetings = () => {
    console.log('Welcome to the Brain Games!')
  }
  
  export const isName = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
  }