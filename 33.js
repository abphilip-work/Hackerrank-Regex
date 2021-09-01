// https://www.hackerrank.com/challenges/utopian-identification-number/problem

function processData(input) { 
    var a=input.split("\n"); 
    a.shift(); 
    var r = RegExp('^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$');

    for (var z=0;z<a.length;z++) {
    if (r.test(a[z])) {
       console.log("VALID");
    } else console.log("INVALID");
    } 
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
pattern = re.compile(r'[a-z]{0,3}\d{2,8}[A-Z]{3,}')
for _ in range((int(input()))): print("VALID" if re.match(pattern, input()) else "INVALID")
*/