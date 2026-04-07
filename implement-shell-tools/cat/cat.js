const fs = require("fs");

const args = process.argv.slice(2);

for (const file of args) {
  const content = fs.readFileSync(file, "utf8");
  process.stdout.write(content);
}