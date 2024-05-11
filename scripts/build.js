const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../dist");

function writeOutputFile() {
  fs.writeFileSync(
    path.join(outputDir, "lib.js"),
    `console.log('this is output file of building');`
  );
}

if (fs.existsSync(outputDir)) {
  writeOutputFile();
} else {
  fs.mkdirSync(outputDir);
  writeOutputFile();
}
