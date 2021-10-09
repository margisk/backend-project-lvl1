#!/usr/bin/env node

import { getUserName, greetUser } from '../src/index.js';

console.log('Welcome to the Brain Games!');
greetUser(getUserName());
