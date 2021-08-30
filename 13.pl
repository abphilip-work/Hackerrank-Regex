# https://www.hackerrank.com/challenges/excluding-specific-characters/problem

$Regex_Pattern = '^\D[^aeiou][^bcDF]\S[^AEIOU][^\.,]$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}