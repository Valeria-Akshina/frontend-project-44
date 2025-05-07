//генерация случайных чисел, floor-(округление числа до ближайщего)
const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

//вычесление нод
const gameGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gameGcd(b, a % b);
};

//начало
const game = () => {
  const num1 = randonNum(1, 50);
  const num2 = randonNum(1, 50);
  const question = `${num1} ${num2}`;

//проверка
  const correctAnswer = String(gameGcd(num1, num2));
  return [question, correctAnswer];
};

const check = 'Find the greatest common divisor of given numbers.';

export { game, check };