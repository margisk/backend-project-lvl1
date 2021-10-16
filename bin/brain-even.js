#!/usr/bin/env node
import { runGame } from '../src/index.js';

import { createGameContent, gameInstruction } from '../src/games/even_odd.js';

console.log('Welcome to the Brain Games!');
runGame(gameInstruction, createGameContent);
