#!/usr/bin/env node
import { runGame } from '../src/index.js';

import { gameInstruction, createGameContent } from '../src/games/calc_game.js';

console.log('Welcome to the Brain Games!');
runGame(gameInstruction, createGameContent);
