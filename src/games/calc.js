
//генерация случайных чисел, floor-(округление числа до ближайщего)
const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

//вычисление
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

//начало
const game = () => {
  const num1 = randonNum(1, 20);
  const num2 = randonNum(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[randonNum(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;

  //проверка ответа
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

const check = 'What is the result of the expression?';

export { game, check };