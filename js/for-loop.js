var scores = [24,32,17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = ' ';

//loop through array items
for (var i = 0; i < arrayLength; i++) {
	
	//arrays are zero based so 0 is round 1
	//add 1 to current round
	roundNumber = (i + 1);
	
	//write current round to message
	msg += 'Round ' + roundNumber + ': ';
	
	//get score from scores array
	msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;