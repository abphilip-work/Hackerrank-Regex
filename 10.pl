# https://www.hackerrank.com/challenges/matching-one-or-more-repititions/problem

$Regex_Pattern = '^[0-9]+[A-Z]+[a-z]+$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}