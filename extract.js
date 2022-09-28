import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

let regex = /(?<person>[a-zA-Z0-9_.]+)@((?<domain>(?:[a-zA-Z0-9_.]+\.)+\w+))/gm
let domains = {};
// example of information gathered
let lineCount = 0;

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);

Object.entries(domains).forEach( 
    ( [k,v] ) => console.log(k, v)
);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;
    
    for (const match of line.matchAll(regex)) {
        domains[match.groups.domain] ||= 0;
        domains[match.groups.domain]++;
    }


    // add code here to find emails in the line 
}