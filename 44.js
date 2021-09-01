// https://www.hackerrank.com/challenges/detect-the-email-addresses/problem

function processData(input) {
    var a=input.match(/[\w\.]+@(?:\w+\.)+\w+/g);
    a=[...new Set(a)];
    console.log(a.sort().join(";"));
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
r=re.findall('[\w\.]+@(?:\w+\.)+\w+',sys.stdin.read())
print(';'.join(sorted(list(set(r)))))
*/