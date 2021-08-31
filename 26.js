// https://www.hackerrank.com/challenges/detect-html-tags/problem

function processData(input) {
    const r = /<\s*([a-z][a-z0-9]*)[^>]*>/ig;
    const a = new Set(); 
    while (match = r.exec(input)) {
        a.add(match[1]);
    }
    console.log(Array.from(a).sort().join(';'));
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