#!/usr/bin/env node
//шестое задание, математическое выражение
import runGame from '../src/index.js';
import { game, check } from '../src/games/calc.js';

runGame(check, game);