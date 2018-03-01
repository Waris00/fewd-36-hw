



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
	var computerChoiceNumber = Math.random();
	if(computerChoiceNumber < 0.333){
		return 'rock';
	}else if(computerChoiceNumber < 0.667){
		return 'paper';
	}else{
		return 'scissors';
	}

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

	//display the computer choice
	jQuery('#computerSelection').text(opponent);

	//determine who wins
	if (me == opponent){
		return "tie";
	}

	else if(me = 'rock' && opponent = 'paper'){
		return "opponent wins";
	}

	else if(me = 'paper' && opponent = 'scissors'){
		return "opponent wins";
	}

	else if(me = 'scissors' && opponent = 'rock'){
		return "opponent win";
	}

	else{
		return "I win";
	}


	//display the winner

};



jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    jQuery("#scissors").click(function(e){
    	e.preventDefault();
    	var computerPlayerChoice = computerChoice();
    	compare('scissors', computerPlayerChoice)
    })

    jQuery("#paper").click(function(e){
    	e.preventDefault();
    	var computerPlayerChoice = computerChoice();
    	compare('paper', computerPlayerChoice)
    })

    jQuery("#rock").click(function(e){
    	e.preventDefault();
    	var computerPlayerChoice = computerChoice();
    	compare('rock', computerPlayerChoice)
    })

});
