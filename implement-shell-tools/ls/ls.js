const fs = require("fs");

// read current directory
const files = fs.readdirSync(".");

files.forEach(file => {
  console.log(file);
});