// https://www.hackerrank.com/challenges/detecting-valid-latitude-and-longitude/problem

function processData(input) {
    var i = input.split('\n');
    var n = parseInt(i[0]);
    var p = i.slice(1);
    console.log(pp(p).join('\n'));
} 
var pp = function(i) {
    var v = [];
    i.forEach(function(p) {
        v.push(val(p));
    });
    return v;
} 
var val = function(p) {
    var r = /^\([+-]?([1-8]?\d(\.\d+)?|90(\.0+)?), [+-]?((1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)\)$/;
    return (r.test(p) ? 'Valid' : 'Invalid');
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