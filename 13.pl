# https://www.hackerrank.com/challenges/excluding-specific-characters/problem

$Regex_Pattern = '^[^0-9][^aeiou][^bcDF]^\s[^AEIOU][^\.,]$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}