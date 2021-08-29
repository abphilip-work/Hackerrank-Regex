# https://www.hackerrank.com/challenges/matching-digits-non-digit-character/problem

$Regex_Pattern = '\d{2}\D\d{2}\D\d{4}';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}