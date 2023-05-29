#!/usr/bin/env node

import { gameInstruction, createGameContent } from '../src/games/brain-progression.js';
import runGame from '../src/index.js';

runGame(gameInstruction, createGameContent);
