// https://www.hackerrank.com/challenges/uk-and-us-2/problem

function processData(input) {
    const a = input.split("\n");
    const n = parseInt(a[0]);
    const t = a[n+1];
    let w = a.slice(1,n+1).join(); 
    let test = a.slice(n+2,a.length);

    test.forEach(element => {
        const r = new RegExp("\\b"+element.replace("our","ou?r")+"\\b" ,'g'); 
        let m = w.match(r)
        if (m === null){m = 0}
        else {m = m.length}
        console.log(m);
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
str = ' '.join([input() for z in range(int(input()))])
for z in range(int(input())): print(len(re.findall(input().replace('our','ou?r')+r'\b', str)))
*/