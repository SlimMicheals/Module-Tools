const fs = require("fs");

const files = process.argv.slice(2);

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  const lines = content.split("\n").length;
  const words = content.trim().split(/\s+/).length;
  const chars = content.length;

  console.log(lines, words, chars, file);
}