# https://www.hackerrank.com/challenges/backreferences-to-failed-groups/problem

$Regex_Pattern = '^\d{2}(-?)(\d{2}\1){2}\d{2}$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}