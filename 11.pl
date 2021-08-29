# https://www.hackerrank.com/challenges/matching-ending-items/problem

$Regex_Pattern = '^[A-Za-z]*s$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}