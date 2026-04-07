const fs = require("fs");

const args = process.argv.slice(2);

const file = args[0];

const content = fs.readFileSync(file, "utf8");

// count lines
const lines = content.split("\n").length;

// count words
const words = content.trim().split(/\s+/).length;

// count characters
const chars = content.length;

console.log(lines, words, chars, file);