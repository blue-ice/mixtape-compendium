





// The page is loaving for the first time, so set FIRSTLOAD to true.

var FIRSTLOAD=true;



// A function for event handlers.

var addEvent = function(elem, type, eventHandle) {
                if (elem == null || typeof(elem) == 'undefined') return;
                if ( elem.addEventListener ) {
                    elem.addEventListener( type, eventHandle, false );
                } else if ( elem.attachEvent ) {
                    elem.attachEvent( "on" + type, eventHandle );
                } else {
                    elem["on"+type]=eventHandle;
                }
};




// Function that sets the black box on the inside of the page to be the page height and scroll inside. 

function setContentsHeight() {

		console.log($("#text_div_resizable_js").css('vertical-align'));

		// if the device is in mobile view, then do not resize it
		if ($("#text_div_resizable_js").css('vertical-align') == 'baseline') {
   	

			// if the screen is past the media query then just make it auto height (max of insides)

			var bodydata = document.getElementsByTagName('body')[0];

			var body_padding_top = window.getComputedStyle(bodydata, null).getPropertyValue('padding-top');
			var body_padding_bottom = window.getComputedStyle(bodydata, null).getPropertyValue('padding-bottom');

			var text_div_padding_top = document.getElementById('header_container_info_js').style.paddingTop;
			var text_div_padding_bottom = document.getElementById('header_container_info_js').style.paddingBottom;

			var body_height = Math.max(document.body.offsetHeight, 
	                       document.documentElement.clientHeight,document.documentElement.offsetHeight );

			var header_height = document.getElementById('header_container_info_js').clientHeight;


			var text_div_height = Math.round(parseInt(body_height) * 100) / 100 - Math.round(parseInt(body_padding_top) * 100) / 100 - Math.round(parseInt(body_padding_bottom) * 100) / 100 - Math.round(parseInt(header_height) * 100) / 100;

			document.getElementById('text_div_resizable_js').style.cssText = "height: " + text_div_height + "px; !important";

		}

	};

function setTrackDivHeight() {


					var bottom_other_div = $('#tracks-resizable-reference').offset().top + $('#tracks-resizable-reference').height();

					var top_tracks_div = $('#tracks-resizable').offset().top;

					var new_tracks_div_height = bottom_other_div - top_tracks_div - 6; // 3px each side is border

					document.getElementById('tracks-resizable').style.cssText = "height: " + new_tracks_div_height + "px; !important";



}


				



// Variables for title boxes

var sliderBoxes = ["pick_title_box", "about_title_box", "send_title_box", "search_title_box"]; // HTML ids for each element
var sliderPages = ["pick", "about", "send", "search", "play"];
var selectedBox = DEFAULTHOME; // Set the current box to DEFAULTHOME, which is set in the HTML document



	function moveSliderTo(newBoxToSelect, showHide) {

		// If the page to be loaded is "play-inner", then select "pick-title-box"
		

		elemId = sliderBoxes[newBoxToSelect];
		if(newBoxToSelect == 4) {elemId=sliderBoxes[0];}

		if(showHide == "hide") {
			document.getElementById('select_shifter').style.visibility="hidden";
			$( "#select_shifter" ).addClass('notransition'); // Disable transitions
		}

		console.log(newBoxToSelect);


			

			var text_div_padding_top = document.getElementById(elemId).style.paddingTop;

			var bodyRect = document.body.getBoundingClientRect(),
	    		elemRect = document.getElementById(elemId).getBoundingClientRect(),
	    		text_divRect = document.getElementById("text_div_resizable_js").getBoundingClientRect(),
	    		offset   = elemRect.left - text_divRect.left - bodyRect.left;

	    		

	    	var elemWidth = elemRect.width;

			document.getElementById('select_shifter').style.cssText = "margin-left: " + offset + "px; width: " + elemWidth + "px;";

		

		if(showHide == "hide") {
				document.getElementById('select_shifter').style.visibility="visible";

				$( "#select_shifter" )[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
				$( "#select_shifter" ).removeClass('notransition'); // Re-enable transitions
		}

		if(selectedBox != newBoxToSelect) {
				console.log("SelectedBox: " + selectedBox + " newBoxToSelect: " + newBoxToSelect + " pushed")
				// Push the page that the slider has moved to into the history of the browser
				if(newBoxToSelect != 4) {console.log("PUSH: "+newBoxToSelect+", null, /" + sliderPages[newBoxToSelect] + ".html");
						history.pushState(newBoxToSelect, null, "/" + sliderPages[newBoxToSelect] + ".html");}
				else {console.log("PUSH: 4, null, \"/\" + \"c3yu\" + \".html\"");
					history.pushState(4, null, "/" + "c3yu" + ".html")}
		}

		selectedBox = newBoxToSelect;

	};





	function loadAjaxContent(doc) {


			//$('#content_box').load("ajax/" + doc + ".html");

			//$( "#text_div_resizable_js" ).fadeTo(1,1000000);

			$('#content_box').fadeOut(150, function(){
				$('#content_box').empty();
   				$('#content_box').load(doc, function(){
        			$('#content_box').fadeIn(150);
    			});
			});

			FIRSTLOAD=false;

	};






	// https://stackoverflow.com/questions/2663631/how-to-pass-parameter-to-the-attachevent-javascript-function

	addEvent(document.getElementById("pick_title_box"), "click", function() { return moveSliderTo(0,"show"); });
	addEvent(document.getElementById("pick_title_box"), "click", function() { return loadAjaxContent("/ajax/" + sliderPages[0] + "-inner.html") });

	addEvent(document.getElementById("about_title_box"), "click", function() { return moveSliderTo(1,"show"); });
	addEvent(document.getElementById("about_title_box"), "click", function() { return loadAjaxContent("/ajax/" + sliderPages[1] + "-inner.html") });

	addEvent(document.getElementById("send_title_box"), "click", function() { return moveSliderTo(2,"show"); });
	addEvent(document.getElementById("send_title_box"), "click", function() { return loadAjaxContent("/ajax/" + sliderPages[2] + "-inner.html") });

	addEvent(document.getElementById("search_title_box"), "click", function() { //return moveSliderTo(3,"show");
																				});
	addEvent(document.getElementById("search_title_box"), "click", function() { //return loadAjaxContent("/ajax/" + sliderPages[3] + "-inner.html")
																			   });



	addEvent(window, "load", setContentsHeight);
	addEvent(window, "resize", setContentsHeight);

	window.addEventListener("popstate", function(previousSelectedBox) {
					if(previousSelectedBox.state!=null) {
						console.log("Slider moved to" + previousSelectedBox.state);
						selectedBox = previousSelectedBox.state;
						moveSliderTo(previousSelectedBox.state, "show");
						loadAjaxContent("/ajax/" + sliderPages[previousSelectedBox.state] + "-inner.html");
					} else {
						console.log("Slider moved to" + previousSelectedBox.state);
						selectedBox=0;
						moveSliderTo(0, "show");
						loadAjaxContent("/ajax/" + sliderPages[0] + "-inner.html");
					}
			} );

	addEvent(window, "load", function() { return moveSliderTo(selectedBox,"hide"); });
	addEvent(window, "load", function()  { if(FIRSTLOAD==true) {loadAjaxContent("/ajax/" + sliderPages[DEFAULTHOME] + "-inner.html")} } );
	addEvent(window, "resize", function() { return moveSliderTo(selectedBox,"hide"); });








			$( "#text_div_resizable_js" ).fadeTo(0,1000);
	