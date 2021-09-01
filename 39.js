// https://www.hackerrank.com/challenges/html-attributes/problem

function processData(input) {
    t = {}
    const rt = /<(\w+)(\s?.*?)>/g;
    const ra = /\s(\w+)=.*?\s?/g;
    input.trim().split("\n").slice(1).forEach(str => {
        while (r = rt.exec(str)) {
            if (!t.hasOwnProperty(r[1])) { t[r[1]] = new Set() }
            if (r[2]) {while (a = ra.exec(r[2])) {t[r[1]].add(a[1]);}}}
    });
    Object.keys(t).sort().forEach(tag => {
        console.log(`${tag}:${[...t[tag]].sort().join(",")}`);
    });
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
from collections import defaultdict
t = defaultdict(set)
for z in range(int(input())):
    for tag, attrs in re.findall(r'<(\w+)(.*?)?>', input()):
        t[tag].update(re.findall(r'\s(\w+)=', attrs))
for tag, attrs in sorted(t.items()):
    print(tag + ":" + ",".join(sorted(attrs)))
*/