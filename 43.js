//

function processData(input) {
    i = input.split(/[\n\r]/).map(v=>v.trim()).filter(v=>v.length != 0);
    let l = '', n = Number(i.shift());
    for(let index=0; index<n; index++) l += i.shift() + " ";
    i.shift();
    for(let q of i) {
        let r = new RegExp("\\b"+q+"\\b", "g");
        console.log(l.match(r).length);
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
s = " ".join([input() for z in range(N)])
for z in range(int(input())): print(len(re.findall(r"\b{}\b".format(input()), myStr)))
*/