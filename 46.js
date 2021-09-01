// https://www.hackerrank.com/challenges/ide-identifying-comments/problem

function processData(input) {
    console.log(input.match(/(\/\*[^\/]+\*\/|\/\/.+)/g).join("\n").split("\n").map(a=>a.trim()).join("\n"));
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

// import re, sys
// t = "\n".join([z.strip() for z in sys.stdin])
// print("\n".join(re.findall(r"//.*|/\*[\S\s]*?\*/", t))) 