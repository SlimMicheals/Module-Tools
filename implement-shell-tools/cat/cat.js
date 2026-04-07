const fs = require("fs");

const args = process.argv.slice(2);

const showLineNumbers = args.includes("-n");
const numberNonEmptyLines = args.includes("-b");

const files = args.filter(arg => arg !== "-n" && arg !== "-b");

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  if (numberNonEmptyLines) {
    const lines = content.split("\n");
    let lineNumber = 1;

    lines.forEach((line) => {
      if (line.trim() !== "") {
        console.log(`${lineNumber} ${line}`);
        lineNumber++;
      } else {
        console.log(line);
      }
    });
  } else if (showLineNumbers) {
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      console.log(`${index + 1} ${line}`);
    });
  } else {
    process.stdout.write(content);
  }
}