#!/usr/bin/env node
//игра нечет чет
//импорт модулей
import runGame from '../src/index.js';
import { game, check } from '../src/games/even.js';

runGame(check, game);