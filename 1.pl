# # https://www.hackerrank.com/challenges/matching-specific-string/problem

$Regex_Pattern = 'hackerrank';

$Test_String = <STDIN> ;
$count = () = $Test_String =~ /$Regex_Pattern/g;
print "Number of matches : ",$count ;