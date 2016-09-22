var json = {
					        "mixtape": [{
					        	"id": "1",
					        	"shortcode": "hq8x",
					            "mt_title": "Recordings I",
					            "css_title_smallest_font_size": "1.500",
					            "mt_image": "summerjamsa.png",
					            "rec_time": "43:22",
					            "num_tracks": "15",
					            "rec_location": "denver, co"},
					        {
					        	"id": "2",
					        	"shortcode": "br4v",
					            "mt_title": "Jamie's Washington Mix 1",
					            "css_title_smallest_font_size": "0.986",
					            "mt_image": "washingtontrip.png",
					            "rec_time": "48:26",
					            "num_tracks": "17",
					            "rec_location": "savannah, ga"},
					         {
					        	"id": "3",
					        	"shortcode": "ka3u",
					            "mt_title": "Summer Days '92",
					            "css_title_smallest_font_size": "1.5",
					            "mt_image": "90srap.png",
					            "rec_time": "23:55",
					            "num_tracks": "5",
					            "rec_location": "savannah, ga"},
					         {
					        	"id": "4",
					        	"shortcode": "c3yu",
					            "mt_title": "Peters and Busskohls Mix 1",
					            "css_title_smallest_font_size": "0.962",
					            "mt_image": "90srap.png",
					            "rec_time": "23:55",
					            "num_tracks": "5",
					            "rec_location": "savannah, ga"}]
					    
					};



function loadMixtapes(locationSelected){

	$("#select-contents-centerer").fadeOut(150, function(){          
		$("#select-contents-centerer").empty();

	          	/*
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: value,
          action: "query",
          list: "search",
          format: "json"
        },

        */

					$.each(json.mixtape, function(i, mixtapeReviewing) {
					    if (mixtapeReviewing.rec_location == locationSelected || "anywhere" == locationSelected) {
					        $("#select-contents-centerer").append("" +

							        "<a class=\"mixtape-searched\" id=\""+ mixtapeReviewing.shortcode + "\" >" +
							        	"<img class=\"mixtape-searched-img\" src=\"/img/mixtapes/" + mixtapeReviewing.mt_image + "\" alt=\"" + mixtapeReviewing.mt_title + "\">" +
							        	"<div class=\"mixtape-searched-banner\">" +
							        		"<h5 class=\"mixtape-searched-title\" id=\"mt-" + mixtapeReviewing.id + "\" style=\"font-size: " + mixtapeReviewing.css_title_smallest_font_size + "vw;\" >" + mixtapeReviewing.mt_title + "</h5>" +
							        		"<div class=\"mixtape-searched-vert-rule\"></div>" +
							        		"<div class=\"mixtape-searched-tracks-time\">" +
							        			"<h6 class=\"mixtape-searched-tracks\">" + mixtapeReviewing.num_tracks + " tracks" + "</h6>" +
							        			"<h6 class=\"mixtape-searched-time\">" + mixtapeReviewing.rec_time + "</h6>" +
							        		"</div>" +
							        	"</div>" +
							        "</a>" +

							       "<style>" + 
										" @media screen and (max-width: 850px) { " +
											"#mt-" + mixtapeReviewing.id + " {" +
													"font-size: " + 40.6/19.54*mixtapeReviewing.css_title_smallest_font_size + "vw !important;" +
												"} " +
											"}" +
										" @media screen and (max-width: 1400px) and (min-width: 851px) { " +
											"#mt-" + mixtapeReviewing.id + " {" +
													"font-size: " + 26.96/19.54*mixtapeReviewing.css_title_smallest_font_size + "vw !important;" +
												"} " +
											"}" +
									"</style>" +

									"<script type=\"text/javascript\">" +
										"addEvent(document.getElementById(\"" + mixtapeReviewing.shortcode + "\"), \"click\", function() { CURRENTMT=\"" + mixtapeReviewing.shortcode + "\";console.log(\""+ mixtapeReviewing.shortcode +"\"); });"+
										"addEvent(document.getElementById(\"" + mixtapeReviewing.shortcode + "\"), \"click\", function() { return moveSliderTo(0,\"show\"); });"+
										"addEvent(document.getElementById(\"" + mixtapeReviewing.shortcode + "\"), \"click\", function() { return loadMainContent(\"/ajax/play-inner.html\"); });" +
										"addEvent(document.getElementById(\"" + mixtapeReviewing.shortcode + "\"), \"click\", function() {history.pushState(null, null, \"/m/" + mixtapeReviewing.shortcode + "\");});" +
									"</script>" );
        				$("#select-contents-centerer").fadeIn(150);


					        
					    }
					});

			});


					/*
        function(data) {
          $("#select-contents-centerer").empty();
          $("#select-contents-centerer").append("#select-contents-centerer for <b>" + value + "</b>");
			          $.each(data.query.search, function(i,item){
			            $("#select-contents-centerer").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a>" + item.snippet + "</div>");
          });
        });	
*/

};

	