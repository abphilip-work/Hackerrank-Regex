// https://www.hackerrank.com/challenges/hackerrank-tweets/problem

function processData(input) {
    console.log(input.match(/hackerrank/ig).length);
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
import re
i = ' '.join([input() for _ in range(int(input()))])
r = r'hackerrank'
print(len(re.findall(r, i, re.IGNORECASE)))
*/