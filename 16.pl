# https://www.hackerrank.com/challenges/capturing-non-capturing-groups/problem

$Regex_Pattern = '(ok){3,}';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}