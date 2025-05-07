#!/usr/bin/env node
//игра "Арифметическая прогрессия"
//импорт модулей
import runGame from '../src/index.js';
import { game, check } from '../src/games/progression.js';

runGame(check, game);