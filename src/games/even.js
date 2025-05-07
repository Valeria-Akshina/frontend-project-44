//генерация случайных чисел, floor-(округление числа до ближайщего)
const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

//проверка чет
const isEven = (number) => number % 2 === 0;

//начало
const game = () => {
  const number = randonNum(1, 100);
  const question = `${number}`;

//проверка ответа
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const check = 'Answer "yes" if the number is even, otherwise answer "no".';

export { game, check };