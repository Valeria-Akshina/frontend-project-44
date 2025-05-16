#!/usr/bin/env node
//игра "Арифметическая прогрессия"
//импорт модулей
import runEngine from '../src/index.js'
import generateRound, { description } from '../src/games/progression.js'

runEngine(description, generateRound)