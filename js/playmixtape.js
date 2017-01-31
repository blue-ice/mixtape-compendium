


var buttons = ["pl", "ps", "st", "rw", "ff", "dl"];


var currentSelectedButton = 0;





function autoUpdateTime() {

	  		
} 

function jumpTo(seconds) {

        $('audio')[0].currentTime=seconds;

}


function loadMixtapeControlsandReactions() {



	// Button pressed: individual actions


		// Button pressed: general pressed handler (blue sticky)
			// remove from all other elements, add css class to element.

		

	// arrow keys: move focus
		// if button has focus, then shift along
		// else if something else has focus, shift to 1
		// wait between the movements.
	


}

var intervalRewind;



function rewind(rewindSpeed) {    
   clearInterval(intervalRewind);
   var startSystemTime = new Date().getTime();
   var startVideoTime = $('audio')[0].currentTime;
   
   intervalRewind = setInterval(function(){
       $('audio')[0].playbackRate = 1.0;
       if($('audio')[0].currentTime == 0){
           clearInterval(intervalRewind);
           $('audio')[0].pause();
       } else {
           var elapsed = new Date().getTime()-startSystemTime;
           $('audio')[0].currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
       }
   }, 30);
}



function pressButton(whichButton) { // button handler

	if($('audio')[0].readyState < 3) {console.log($('audio')[0].readyState);document.getElementById('mt-audio').load();};

	switch (whichButton) {
    case 0:
    	clearInterval(intervalRewind);
        $('audio')[0].playbackRate = 1.0;
    	document.getElementById('mt-audio').play();
		$(".mt-control-button").removeClass("current-button");
    	$( "#"+buttons[whichButton]+"-bt" ).addClass( "current-button" );
        break; 
    case 1:
    	clearInterval(intervalRewind);
        $('audio')[0].playbackRate = 1.0;
    	document.getElementById('mt-audio').pause();
		$(".mt-control-button").removeClass("current-button");
    	$( "#"+buttons[whichButton]+"-bt" ).addClass( "current-button" );
        break;
    case 2:
        document.getElementById('pick_title_box').click();
        break;
    case 3:
    	document.getElementById('mt-audio').play();
    	rewind(4);
		$(".mt-control-button").removeClass("current-button");
    	$( "#"+buttons[whichButton]+"-bt" ).addClass( "current-button" );
        break;
    case 4:
    	clearInterval(intervalRewind);
    	document.getElementById('mt-audio').play();
        $('audio')[0].playbackRate = 4.0;
		$(".mt-control-button").removeClass("current-button");
    	$( "#"+buttons[whichButton]+"-bt" ).addClass( "current-button" );
        break;
    case 5:
    	// form downloads anyway.
        break;
    default:
    	//remove from all buttons
		$(".mt-control-button").removeClass("current-button");
	}
}




function playMixtape(selectedMtCode) {

	// $("#mt-full-div").fadeOut(150, function(){          
	// 	//$("#ed-mt-notes").empty();


	// 				$.each(json.mixtape, function(i, mixtapeReviewing) {
	// 				    if (mixtapeReviewing.shortcode == selectedMtCode) {
	// 				    	//$("#mt-player").append("<h3>" + mixtapeReviewing.shortcode + "</h3>");
	// 				    }
	// 				});


	// 				$("#mt-full-div").fadeIn(150);

	// 		});


}