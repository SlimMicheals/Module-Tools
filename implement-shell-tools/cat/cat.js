const fs = require("fs");

const args = process.argv.slice(2);

// check if -n is included
const showLineNumbers = args.includes("-n");

// filter out the flag, keep only file names
const files = args.filter(arg => arg !== "-n");

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  if (showLineNumbers) {
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      console.log(`${index + 1} ${line}`);
    });
  } else {
    process.stdout.write(content);
  }
}