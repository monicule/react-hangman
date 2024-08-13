import { words } from "./words.js";

export const randomWord = words[Math.floor(Math.random() * words.length)].split('');
