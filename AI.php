<?php
$board = $_GET["board"];
$numberOfFreeFields = substr_count($board, '-');
$fieldToSet = rand(0, $numberOfFreeFields - 1);

$counter = 0;
for ($x = 0; $x < 9; $x++) {
    if ($board[$x] == '-')
    {    	
    	if ($counter == $fieldToSet)
    	{
    		$board[$x] = "O";
    		echo $board;
    		break;
    	}
    	
    	$counter++;
    }
}  

?>