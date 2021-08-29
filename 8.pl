# https://www.hackerrank.com/challenges/matching-x-y-repetitions/problem

$Regex_Pattern = '^[0-9]{1,2}[A-Za-z]{3,}\.{0,3}$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}