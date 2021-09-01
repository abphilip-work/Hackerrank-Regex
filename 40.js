// https://www.hackerrank.com/challenges/uk-and-us/problem

function processData(input) {
    let i = input.split("\n");
    let r = i.slice(1,+i[0]+1).join(" ");
    i.slice(+i[0]+2).forEach(a=>{
        let m = r.match(RegExp(a.slice(0,a.length-2)+"[zs]e","g"));
        console.log(m?m.length:0)});
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
str = ' '.join([input() for z in range(int(input()))])
for z in range(int(input())): print(len(re.findall(input()[:-2]+'[zs]e', str)))
*/