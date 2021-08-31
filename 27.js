// https://www.hackerrank.com/challenges/find-substring/problem

function processData(input) {
    var s = input.split(/\n?\d+\n/);
    s.shift();
    var st = s[0].split('\n');
    var p = st.join(' ');
    var sw = s[1].split('\n');
    sw.forEach(function (i, index) {
        var r = new RegExp(`[\\w]${i}[\\w]`, 'g');
        var m = p.match(r);
        console.log(m!=null?m.length:0);
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