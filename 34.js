// https://www.hackerrank.com/challenges/valid-pan-format/problem

function processData(input) {
    var i = input.split('\n');
    i.shift();
    var r = RegExp(/^[A-Z]{5}[0-9]{4}\w$/);
    i.forEach(function(z) {
        console.log(r.test(z) ? 'YES' : 'NO');
    });
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
for _ in range(int(input())):
    s = input()
    if(len(s)==10):
        print("YES") if(re.match(r"^[A-Z]{5}[\d+]{4}[A-Z]{1}$",s)) else print("NO")
    else: print("NO")
*/