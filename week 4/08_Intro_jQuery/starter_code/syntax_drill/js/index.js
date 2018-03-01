jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
function purp(){
	jQuery("p").css("color", "purple");
}

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black

function blued(){
	jQuery("p.hipsterSpeak").css("background", "blue");
	jQuery("p.hipsterSpeak").css("color", "white");

}

    // When the red box is clicked set the list items toggle red background and white text on and off
function redd(){
	jQuery("li").toggleClass("redForm");
	
}
    

    // When any of the boxes are clicked, add a 6px solid black bottom border
function bord(){
	jQuery(".boxes").css("border-bottom", "6px solid black");
}
    


//Bind Click

jQuery("#purpleBox").click(purp);
jQuery("#blueBox").click(blued);
jQuery(".boxes").click(bord);
jQuery("#redBox").click(redd);

});