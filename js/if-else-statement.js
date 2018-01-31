var pass =50;
var score =75;
var msg;

//select message based on score
if (score>pass) {
	msg = 'Congratulations, you passed!';
} else {
	msg = 'Have another go!';
}

var el =document.getElementById('answer');
el.textContent = msg;