var featuretteHTML = "";
setupFeaturette();

function setupFeaturette(){

	var obj1 = {
		heading:"What About Herby?",
		span:"I am a Gamer/Streamer!",
		para:"I grew up gaming. I grew up on the Ninentdo and SNES. In my early college years I played the Xbox & XBox360. Now I am on the PS4, XBox One, and PC. Games vary from RTS, to any style of shooter. Favorite games are: Gears of War Series, Halo: Reach, Command & Conquer 3, Red Dead Redemption Series, Age of Empires 2, Diablo, Overwatch, and Battlefield. I also like to stream these games, to make friends who enjoy the same passion for the games as I do.",
		image:"images/about_1.png"
	};
	
	var obj2 = {
		heading:"I like to tinker.",
		span:"Who has time to watch TV?",
		para:"When streaming/gaming needs a break, I enjoy working on my 1973 International Scout II. I've replaced all electrical, as well as the entire brake system, and fuel system. I've performed the body work as well as the paint job. I also like to work on coding projects! Check out the Code Sample section for more!",
		image:"images/about_2.png"
	};
	
	var obj3 = {
		heading:"I'm also a family man.",
		span:"Uh oh...",
		para:"I've been married to the love of my life since 10/11/12. We are currently expecting our first child by the end of July. I also have two dogs, two reptiles, and a tarantula. It is about to be a busy home.",
		image:"images/about_3.png"
	};
	
	var objArray = [obj1, obj2, obj3];
	var objArraySize = 3;
	
	var tempHeading = "ReplaceHeading";
	var tempSpan = "ReplaceSpan";
	var tempParag = "ReplaceP";
	var tempImage = "ReplaceImage";
	
	var htmlHRCode = '<hr class="featurette-divider">';
	var divCode1 = 'col-md-7';
	var divCode2 = 'col-md-5';
	
	var htmlCodeSegment =   htmlHRCode + '<div class="row featurette">' +
								'<div class="' + divCode1 + '">' +
									'<h2 class="featurette-heading">' + tempHeading + '<span class="text-muted">' + tempSpan + '</span></h2>' +
									'<p class="lead">' + tempParag + '</p>' +
								'</div>' +
								'<div class="' + divCode2 + '">' +
									'<img class="featurette-image img-fluid mx-auto" src="' + tempImage + '" alt="Generic placeholder image">' +
								'</div>' +
							'</div>'; 
							
	for(i = 0; i < objArraySize; i++){
		var tempHTML = htmlCodeSegment;
		
		if(i % 2 == 0){
			tempHTML = tempHTML.replace(divCode1, divCode1 + ' order-md-2');
			tempHTML = tempHTML.replace(divCode2, divCode2 + ' order-md-1');
		}
		
		tempHTML = tempHTML.replace(tempImage, objArray[i].image);
		tempHTML = tempHTML.replace(tempHeading, objArray[i].heading);
		tempHTML = tempHTML.replace(tempParag, objArray[i].para);
		tempHTML = tempHTML.replace(tempSpan, objArray[i].span);
		
		headingHTML += tempHTML;
		
		tempHTML = "";
	}
}

app.controller('featuretteController', ['$scope', function($scope) {
	$scope.htmlFeaturette = featuretteHTML;
}]);

		
		
		
		