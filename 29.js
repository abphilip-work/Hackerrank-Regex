// https://www.hackerrank.com/challenges/alien-username/problem

function processData(input) {
    var i = input.split('\n').reverse();
    var n = i.pop();
    var r = /^[_.]\d+[A-Za-z]*_?$/;
    for (var z = 0; z < n; z++) {
        if (r.test(i.pop())) {
            console.log("VALID");
        } else console.log("INVALID");
    }
} 

process.stdin.resume();
process.stdin.setEncodinṇg("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/*
import re
r = r"\([+\-]?(90(\.0+)?|[1-8]\d(\.\d+)?|\d(\.\d+)?), [+\-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{2}(\.\d+)?|\d(\.\d+)?)\)"
for _ in range (int(input())):
    p = input()
    print("Valid" if re.match(r,p) is not None else "Invalid")
*/