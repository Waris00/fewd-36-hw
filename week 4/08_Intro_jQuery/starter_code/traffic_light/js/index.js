//Implement the red light using jQuery. Don't forget to add the script tags.





//red

function illuminateRed(){

	//Clear all Lightsnd
	jQuery(".bulb").css("background", "black");
	//Light Red
	jQuery("#stopLight").css("background", "red");

}





//yellow
function illuminateYellow(){

	//Clear all Lightsnd
	jQuery(".bulb").css("background", "black");
	//Light Red
	jQuery("#slowLight").css("background", "yellow");

}




//green
function illuminateGreen(){

	//Clear all Lightsnd
	jQuery(".bulb").css("background", "black");
	//Light Red
	jQuery("#goLight").css("background", "green");

}


//Bind to Click
jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);