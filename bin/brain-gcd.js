#!/usr/bin/env node
//игра НОД
//импорт модулей
import runGame from '../src/index.js';
import { game, check } from '../src/games/gcd.js';

runGame(check, game);