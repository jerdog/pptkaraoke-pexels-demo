// index.js - taken from https://javascript.plainenglish.io/a-beginners-guide-to-unsplash-api-in-javascript-2524c51ae1f3

import { Unsplash } from "./unsplash.mjs";
import dotenv from 'dotenv';
dotenv.config();

const unsplash = new Unsplash(process.env.UNSPLASH_KEY);
//await unsplash.getPhoto('file', 'coding on laptop');
await unsplash.getPhoto('file', 'coding on laptop');
