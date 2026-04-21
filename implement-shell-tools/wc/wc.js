const fs = require("fs");

const args = process.argv.slice(2);

const showLines = args.includes("-l");
const showWords = args.includes("-w");
const showChars = args.includes("-c");

const files = args.filter(
  (arg) => arg !== "-l" && arg !== "-w" && arg !== "-c"
);

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  const lines = content.split("\n").length;
  const words = content.trim().split(/\s+/).length;
  const chars = content.length;

  if (showLines) {
    console.log(lines, file);
  } else if (showWords) {
    console.log(words, file);
  } else if (showChars) {
    console.log(chars, file);
  } else {
    console.log(lines, words, chars, file);
  }
}