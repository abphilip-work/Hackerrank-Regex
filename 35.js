// https://www.hackerrank.com/challenges/find-hackerrank/problem

function processData(input) {
    let [n, ...s] = input.trim().split('\n')
    s.forEach(i => {
    let [, start='', end=''] = i.match(/(.)*hackerrank(.)*/) || []
    console.log([[0, 1], [2, -1]][start.length][end.length])
    })
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
for z in range(int(input())):
    s=input()
    if re.search(r'^hackerrank(.*hackerrank)?$',s): print(0)
    elif re.search(r'^hackerrank',s): print(1)
    elif re.search(r'hackerrank$',s): print(2)
    else: print(-1)
*/