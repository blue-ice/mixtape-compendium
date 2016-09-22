


var buttons = ["pl", "ps", "st", "rw", "ff", "dl"];


var currentSelectedButton = 4;


function autoUpdateTimeAndTrack() {

}

function loadMixtapeControlsandReactions() {

	// Button pressed: css active handler (blue)
		// css class

	// Button pressed: individual actions


		// Button pressed: general pressed handler (blue sticky)
			// remove from all other elements, add css class to element.


	// arrow keys: move focus
		// if button has focus, then shift along
		// else if something else has focus, shift to 1
		// wait between the movements.
	


}




function playMixtape(selectedMtCode) {

	$("#mt-full-div").fadeOut(150, function(){          
		//$("#ed-mt-notes").empty();


					$.each(json.mixtape, function(i, mixtapeReviewing) {
					    if (mixtapeReviewing.shortcode == selectedMtCode) {
					    	//$("#mt-player").append("<h3>" + mixtapeReviewing.shortcode + "</h3>");
					    }
					});


					$("#mt-full-div").fadeIn(150);

			});


}