
jQuery("#submit").click(function(){

	//Get Values
	var a = jQuery("#a").val();
	var b = jQuery("#b").val();




// If A > B show >
    if(parseFloat(a) > parseFloat(b)){
        jQuery("#comparison").text(">");
    }

    // If A < B show <
    if(parseFloat(a) < parseFloat(b)){
        jQuery("#comparison").text("<");
    }


    // If A = B show ==
    if(parseFloat(a) == parseFloat(b)){
        jQuery("#comparison").text("==");
    }

    if(isNaN(a) || isNaN(b)){
        jQuery("#comparison").text("NaN");
    }


});