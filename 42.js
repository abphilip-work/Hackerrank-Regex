// https://www.hackerrank.com/challenges/detect-html-links/problem

function processData(input) {
    var r=/<a.*?href="(.*?)".*?>(.*?)<\/a>/ig;
    var o=[];
    input.replace(r,function(_,href,text){ 
        o.push(href.trim()+','+text.replace(/<.*?>/g,'').trim())
    });
    console.log(o.join('\n'));
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
for z in range(int(input())):
    html = input()
    r = re.findall(r'<a href="(.*?)".*?>([\w ,./]*)(?=</)', html)
    for link, title in r: print("{},{}".format(link, title.strip()))
*/