// https://www.hackerrank.com/challenges/utopian-identification-number/problem

function processData(input) {
    var r = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/;
    var l = input.split("\n"); 
    for(var z=1;z<l.length;z++){
        var c = l[z];
        console.log((r.test(c))?'VALID':'INVALID');
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
for z in range((int(input()))): print("VALID" if re.match(pattern, input()) else "INVALID")
*/