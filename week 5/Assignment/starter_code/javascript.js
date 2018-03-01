jQuery(document).ready(function() {
 
  jQuery('#submit-btn').click(function(){
    event.preventDefault();
    
    var city = jQuery('#city-type').val();
    jQuery('#city-type').val('');
    city = city.toLowerCase().trim();
   
    if(city == 'new york' || city == 'nyc' ) {
      jQuery('body').attr('class','nyc');
    }
    
    else if (city == 'sf' || city == 'san francisco') {
      jQuery('body').attr('class','sf');
    }
    
    else if (city == 'austin') {
      jQuery('body').attr('class','austin');
    }
    
    else if (city == 'los angeles' || city == 'la') {
      jQuery('body').attr('class','la');
    }
    
    else if (city == 'sydney') {
      jQuery('body').attr('class','sydney');
    }
  });
});