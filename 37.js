// https://www.hackerrank.com/challenges/hackerrank-language/problem

function processData(input) {
    let s = 'C:CPP:JAVA:PYTHON:PERL:PHP:RUBY:CSHARP:HASKELL:CLOJURE:BASH:SCALA:ERLANG:CLISP:LUA:BRAINFUCK:JAVASCRIPT:GO:D:OCAML:R:PASCAL:SBCL:DART:GROOVY:OBJECTIVEC';
    let i = input.split('\n');
    i.shift();
    i.forEach(a => {
        let st = a.split(' ');
        let l = st[1];
        let r = new RegExp(`\\b${l}\\b`, 'g')
        console.log((s.match(r)) ? 'VALID' : 'INVALID');
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
s = 'C:CPP:JAVA:PYTHON:PERL:PHP:RUBY:CSHARP:HASKELL:CLOJURE:BASH:SCALA:ERLANG:CLISP:LUA:BRAINFUCK:JAVASCRIPT:GO:D:OCAML:R:PASCAL:SBCL:DART:GROOVY:OBJECTIVEC'
s = s.replace(':', '|')
r = re.compile(r'^[1-9]\d{4}\s' + '(' + s + ')$')
for i in range(int(input())):
    print('VALID') if r.match(input()) else print('INVALID')
*/