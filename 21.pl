# https://www.hackerrank.com/challenges/forward-references/problem

$Regex_Pattern = '^(\2tic|(tac))*$';

$Test_String = <STDIN> ;
if($Test_String =~ /$Regex_Pattern/){
    print "true";
} else {
    print "false";
}