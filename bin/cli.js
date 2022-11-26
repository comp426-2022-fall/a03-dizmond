#!/usr/bin/env node
import { roll } from "../lib/roll.js";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const x = args.sides || 6;
const y = args.dice || 2;
const z = args.rolls || 1;
console.log(JSON.stringify(roll(x, y, z)));