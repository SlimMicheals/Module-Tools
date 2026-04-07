const fs = require("fs");

const args = process.argv.slice(2);

const showAll = args.includes("-a");

// remove -a from arguments
const filteredArgs = args.filter(arg => arg !== "-a");

const target = filteredArgs[0] || ".";

let files = fs.readdirSync(target);

// hide hidden files if -a is NOT used
if (!showAll) {
  files = files.filter(file => !file.startsWith("."));
}

files.forEach(file => {
  console.log(file);
});