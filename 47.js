// https://www.hackerrank.com/challenges/programming-language-detection/problem

function processData(input) {
    console.log(`${input.match(/(if.+?\:)|(while.+?\:)|(def.+?\:)/g) ? 'Python'
                : input.match(/(java)|(System\.)/gi) ? 'Java'
                : input.match(/(\bprintf)/) ? 'C' : ''}`);
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
z = ''.join(sys.stdin.readlines())
if 'java' in z: print("Java")
elif '#include' in z: print("C")
else: print("Python")
*/