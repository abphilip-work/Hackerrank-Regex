# https://www.hackerrank.com/challenges/matching-zero-or-more-repetitions/problem

$Regex_Pattern = '^[0-9]{2,}[a-z]*[A-Z]*$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}