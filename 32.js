// https://www.hackerrank.com/challenges/stack-exchange-scraper/problem

function processData(input) {
    let a= input.match(/(?<=id=".+)\d+(?=")/g)
    let b= input.match(/(?<=relativetime">).*(?=<)/g)
    let c= input.match(/(?<=<h3>.+">).+(?=<\/a>)/g)
    for(var z=0; z<a.length;z++){
        console.log(`${a[z]};${c[z]};${b[z]}`)
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
import re, sys
qid = r'(?<=/questions/)\d+'
q = r'(?<=class=.question-hyperlink.>).+(?=</a>)'
t = r'(?<=class=.relativetime.>).+(?=</span>)'
s = sys.stdin.read()
lqid=lq=lt=[]
lqid = re.findall(qid,s)
lq = re.findall(q,s)
lt = re.findall(t,s)

for i in range(len(lqid)):
    print(lqid[i]+";"+lq[i]+";"+lt[i])
*/