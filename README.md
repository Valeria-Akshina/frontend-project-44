### Hexlet tests and linter status:
[![Actions Status](https://github.com/Valeria-Akshina/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Valeria-Akshina/frontend-project-44/actions)

Игры разума

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

1. Калькулятор. Арифметические выражения, которые необходимо вычислить.
2. Прогрессия. Поиск пропущенных чисел в последовательности чисел.
3. Определение четного числа.
4. Определение наибольшего общего делителя.
5. Определение простого числа.

Приветствие - node bin/brain-games.js
пример:

<script src="https://asciinema.org/a/ScA7kLTIlTCuTTwExT2MCocKR.js" id="asciicast-ScA7kLTIlTCuTTwExT2MCocKR" async="true"></script>

Игра "Проверка на чётность" - выполняется через терминал brain-even
Пример выполнения:

Пример решения с ошибкой:
~/frontend-project-44 (main)
$ node bin/brain-even.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Answer "yes" if the number is even, otherwise answer "no".
Question: 48
Your answer: no
'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, lera!

Пример решения без ошибок:
~/frontend-project-44 (main)
$ node bin/brain-even.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Answer "yes" if the number is even, otherwise answer "no".
Question: 5
Your answer: no
Correct!
Question: 89
Your answer: no
Correct!
Question: 39
Your answer: no
Correct!
Congratulations, lera!

Игра "Каклькулятор" - выполняетя команда через терминал brain-calc

Пример решения с ошибкой:
~/frontend-project-44 (main)
$ node bin/brain-calc.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
What is the result of the expression?
Question: 19 + 20
Your answer: 30
'30' is wrong answer ;(. Correct answer was '39'.
Let's try again, lera!

Пример решения без ошибки:
 ~/frontend-project-44 (main)      
$ node bin/brain-calc.js
Welcome to the Brain Games!
May I have your name? Lera
Hello, Lera!
What is the result of the expression?
Question: 20 * 7
Your answer: 140
Correct!
Question: 3 + 5
Your answer: 8
Correct!
Question: 11 - 20
Your answer: -9
Correct!
Congratulations, Lera!

Игра "Наибольший ообщий делитель" - выполняется команда через терминал brain-gcd

Пример решения с ошибкой:
~/frontend-project-44 (main) $ node bin/brain-gcd.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Find the greatest common divisor of given numbers.
Question: 33 43
Your answer: 1
Correct!
Question: 49 14
Your answer: 7
Correct!
Question: 34 17
Your answer: 1
'1' is wrong answer ;(. Correct answer was '17'.
Let's try again, lera!

Правильный пример без ошибки:
~/frontend-project-44 (main)
$ node bin/brain-gcd.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Find the greatest common divisor of given numbers.
Question: 4 16
Your answer: 4
Correct!
Question: 40 25
Your answer: 5
Correct!
Question: 6 6
Your answer: 6
Correct!
Congratulations, lera!

Игра "Арифмитическая прогрессия" - выполняется команда через терминал brain-progression
Пример решения с ошибкой:
~/frontend-project-44 (main)
$ node bin/brain-progression.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
What number is missing in the progression?
Question: 9 12 15 18 21 24 27 ..
Your answer: 30
Correct!
Question: 13 22 31 40 49 58 67 ..
Your answer: 6
'6' is wrong answer ;(. Correct answer was '76'.
Let's try again, lera!


Пример решения без ошибки:
~/frontend-project-44 (main)
$ node bin/brain-progression.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
What number is missing in the progression?
Question: 15 18 .. 24 27 30 33 36
Your answer: 21
Correct!
Question: 48 .. 66 75 84
Your answer: 57
Correct!
Question: 29 38 47 .. 65 74 83
Your answer: 56
Correct!
Congratulations, lera!

Игра "Простое ли число?" - выполняется команда через терминал brain-prime
Пример решения с ошибкой:
~/frontend-project-44 (main)
$ node bin/brain-prime.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 25
Your answer: no
Correct!
Question: 82
Your answer: no
Correct!
Question: 11
Your answer: no
'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, lera!


Пример решения без ошибки:
~/frontend-project-44 (main)
$ node bin/brain-prime.js
Welcome to the Brain Games!
May I have your name? lera
Hello, lera!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 32
Your answer: no
Correct!
Question: 14
Your answer: no
Correct!
Question: 97
Your answer: yes
Correct!
Congratulations, lera!