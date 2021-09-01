// https://www.hackerrank.com/challenges/split-number/problem

function processData(input) {
    const r=/\n(\d+)[- ](\d+)[- ](\d+)/g;
    while(m=r.exec(input)){
        console.log('CountryCode='+m[1]+',LocalAreaCode='+m[2]+',Number='+m[3]);
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
r = re.compile(r'(\d{1,3})[ \-](\d{1,3})[ \-](\d{4,10})')
for z in range(int(input())):
    m = r.match(input()).groups()
    if(m): print('CountryCode={},LocalAreaCode={},Number={}'.format(m[0],m[1],m[2]))
*/