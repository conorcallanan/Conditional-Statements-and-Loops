var msg;
var level = 3;

//determine msg based on level
switch (level) {
	case 1:
		msg = 'Good luck on the first test';
		break;
	
	case 2:
		msg = 'Second of three - keep going!';
		break;
		
	case 3:
		msg = 'Final Round, almost there!';
		break;
		
	default:
		msg = 'Good Luck';
		break;
}

var el = document.getElementById('answer');
el.textContent = msg;