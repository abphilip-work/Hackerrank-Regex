// https://www.hackerrank.com/challenges/saying-hi/problem

function processData(input) {
    console.log(input.match(/^hi [^d].*/igm).join('\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/*
import re, sys
for s in filter(re.compile(r"(?i:hi\s[^d])").match, sys.stdin): print(s)
*/