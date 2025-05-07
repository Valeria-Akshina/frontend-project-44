#!/usr/bin/env node
//Игра "Простое ли число?"
//импорт модулей
import runGame from '../src/index.js';
import { game, check } from '../src/games/prime.js';

runGame(check, game);