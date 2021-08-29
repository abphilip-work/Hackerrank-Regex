# https://www.hackerrank.com/challenges/matching-start-end/problem

$Regex_Pattern = '^\d\w{4}\.$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}