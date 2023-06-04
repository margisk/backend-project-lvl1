#!/usr/bin/env node

import { gameInstruction, createGameContent } from '../src/games/brain-prime.js';
import runGame from '../src/index.js';

runGame(gameInstruction, createGameContent);
