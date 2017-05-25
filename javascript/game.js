var words = ["bacon", "eggs", "biscuits", "sausage", "pancakes", "toast", "coffee"];
var blanks = [];
var word = "";
var wins = 0;
var losses = 0;
var guesses = 0;
var remaining = 6;
var position = 0;
var remainingLetters = 0;

//generate random word//
	word = words[Math.floor(Math.random() * words.length)];
	console.log(word);

//generate blanks//
 for (var i = 0; i < word.length; i++) {
 	blanks[i] = " _ ";
 }

 $("#blanks").html(blanks);

//

$(document).keyup(function(event){

	var userguess = event.key;
	// var index = word.indexOf(userguess);
	// if (index > -1) {
	// 	blanks[index] = userguess;
	// }

	for (var i = 0; i < word.length; i++) {
		if (userguess === word[i]) {
			blanks[i] = userguess;

	// position = word.indexOf(userguess);

	// blanks[position] = userguess;

	}

	}
	$("#blanks").html(blanks);


});
