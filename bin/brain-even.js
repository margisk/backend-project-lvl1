#!/usr/bin/env node

import runGame from '../src/index.js';
import { instruction, createGameContent } from '../src/games/brain-even.js';

runGame(instruction, createGameContent);
