#!/usr/bin/env node
import { askName, greeting, welcome } from '../src/cli.js';

welcome();

const name = askName();

greeting(name);
