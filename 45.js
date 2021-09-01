// https://www.hackerrank.com/challenges/detect-the-domain-name/problem

function processData(input) {
    let r = input.matchAll(/https?:\/\/(ww[w2].)?([-\w.]+\.[a-z]+)/ig);
    let ans = [];
    for (let i of r) {ans.push(i[2]);}
    ans = [...new Set(ans)];
    ans.sort();
    ans = ans.join(';');
    console.log(ans);
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
ans = []
for z in range(int(input())): ans+=re.findall(r'(?:http://|https://)(?:www.|ww2.)?((?:[0-9a-zA-Z_\.-]+)\.[a-zA-Z]+)', input())
print(';'.join(sorted(set(ans))))
*/