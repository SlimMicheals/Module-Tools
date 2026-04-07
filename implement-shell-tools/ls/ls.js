const fs = require("fs");

const args = process.argv.slice(2);
const target = args[0] || ".";

const files = fs.readdirSync(target);

files.forEach(file => {
  console.log(file);
});