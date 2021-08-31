// https://www.hackerrank.com/challenges/ip-address-validation/problem

function processData(input) {
    i = input.split('\n');
    i.shift();
    const ip4 = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ip6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    for(a of i) {
        if (ip4.test(a) && a.split('.').every(n=>n<=255)) console.log('IPv4');
        else if (ip6.test(a)&& a.split(':').every(h=>parseInt(h,16)<=0xffff)) console.log('IPv6');
        else console.log('Neither'); 
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