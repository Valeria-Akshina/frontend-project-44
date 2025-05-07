// src/games/prime.js
//генерация случайных чисел, floor-(округление числа до ближайщего)
const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

//простое ли число
const isPrimeNum = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = randonNum(1, 100);
  const question = `${number}`;
//проверка
  const correctAnswer = isPrimeNum (number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const check = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { game, check };