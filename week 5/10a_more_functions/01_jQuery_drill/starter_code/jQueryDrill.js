jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
    jQuery("#concatButton").on('click',function(){
    	var concOne = jQuery('#concatOne').val();
    	var concTwo = jQuery('#concatTwo').val();
    	jQuery('#concatResult').text(concOne + concTwo);
    		console.log('#concatResult')
    	
    });

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
   jQuery('#add20Button').on('click',function(){ 
   		var calc = parseFloat( jQuery('#add20Input').val());
   		calc = (calc + 20);
   		jQuery('#add20Output').text(calc);
   			console.log('#add20Output')

   });

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
    jQuery('#appendButton').on('click',function(){
    	var appnd = "<p>" + jQuery('#appendInput').val() + "<p>";

    	jQuery('#appendOutput').append(appnd);

    });

});