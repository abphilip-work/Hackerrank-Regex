# https://www.hackerrank.com/challenges/matching-word-boundaries/problem

$Regex_Pattern = '\b[AEIOUaeiou][A-Za-z]*\b';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}