//CS290 - ROHIN ADALJA JS

function resumeClick() {
	window.location = "http://osucascades.edu/sites/osucascades.edu/files/Career_Services/resume_samples.pdf";
}

function linkedInClick() {
	window.location = "https://www.linkedin.com/in/rohinadalja/";
}

function verySoonMsg() {
         alert('Sorry for the wait! The app is in its prototype stage and will be ready soon.');
}


//Automatic Slideshow Carousel (Change every 3 seconds) (Adopted from: W3SCHOOLS - DOCUMENTATION)
	     //(Using onload) document.addEventListener('DOMContentLoaded', slideshowTimer);
function slideshowTimer() {

	var currSlideNum = 0;
	carousel();

  	function carousel() {
	var slidesArray = document.getElementsByClassName("mySlides");
	    
    //First stop all photos from being displayed
    var i;
    for (i = 0; i < slidesArray.length; i++) {
    	slidesArray[i].style.display = "none";
    }

    //Note: The first slide number will be 1 before displaying
    currSlideNum++;

    //Loopback to the first slide if end of array reached
    if (currSlideNum > slidesArray.length) {
    	currSlideNum = 1
    }

    //Display the current slide (retrieve from array -1)
    slidesArray[currSlideNum-1].style.display = "block";
    
	//Change time setting to recall function and change slide (currently set to 3ms)
    setTimeout(carousel, 3000);
	}
}