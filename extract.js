

import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;
let softwireCount = 0;
let softwire = "@softwire.com";
let softwireLength = softwire.length;
text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);
console.log(softwireCount);
// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;
    let softwirePosition = line.indexOf(softwire);
    // add code here to find emails in the line 

    while (softwirePosition >= 0) {
        softwireCount++
        softwirePosition = (line.indexOf(softwire, softwirePosition + softwireLength));
    }
}

let corndelRegex = /@corndel\.com/gm;
let corndelFound = text.match(corndelRegex);
let corndelResult = corndelFound.length;
console.log(`There are ${corndelResult} addresses with the Corndel domain.`);

let softwireRegex = /@softwire\.com/gm;
let softwireFound = text.match(softwireRegex);
let softwireResult = softwireFound.length;
console.log(`There are ${softwireResult} addresses with the Softwire domain.`);

let gmailRegex = /@gmail\.com/gm;
let gmailFound = text.match(gmailRegex);
let gmailResult = gmailFound.length;
console.log(`There are ${gmailResult} addresses with the gmail domain.`);
