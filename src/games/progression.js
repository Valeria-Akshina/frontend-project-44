// src/games/progression.js
//генерация случайных чисел, floor-(округление числа до ближайщего)
const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generation = (start, some, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + some * i);
  }
  return progression;
};

const game = () => {
  const start = randonNum(1, 50);
  const some = randonNum(1, 10);
  const length = randonNum(5, 10);
  const progression = generation(start, some, length);
  const hiddenIndex = randonNum(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const check = 'What number is missing in the progression?';

export { game, check };