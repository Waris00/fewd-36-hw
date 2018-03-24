//Have a list of images
var animalImageList = ["animal1.jpg","animal2.jpg","animal3.jpg","animal4.jpg","animal5.jpg","animal6.jpg","animal7.jpg"]


//Know what image we are on
var imageNumber = 0;


function setImage(imageNumberSelected){

	var newSrc = "images/" + animalImageList[
						imageNumberSelected];
}

jQuery("#image-to-vote-on").attr("src",newSrc);





//Function for next image

function nextImage(){
	imageNumber++;

	if(imageNumber >= animalImageList.length){
		imageNumber = 0;
	}

	setImage(imageNumber);
}



//Function for prev image
function previousImage(){
	imageNumber--;

	if(imageNumber < 0){
		imageNumber = animalImageList.length-1;
	}

	setImage(imageNumber);
}




//Bind Previous and next buttons to functions
jQuery(document).on('ready',function(){
	jQuery("#btnNext").on("click",nextImage);
	jQuery("#btnPrevious").on("click",previousImage);
})