var app = angular.module('mainApp', ['ngSanitize']);

var carouselHTML = "";
var indicatorHTML = "";

setupSlides();

function setupSlides(){

	var slideArray = [];

	var image1 = {src:"images/carousel_1.png", alt:"First Image", p:"Does what it takes to get the job done right.", h:"Passionate"};
	var image2 = {src:"images/carousel_2.png", alt:"Second Image", p:"Adaptive, Reactive, and Knowledgable.", h:"Resourceful"};
	var image3 = {src:"images/carousel_3.png", alt:"Third Image", p:"Devoted to the team.", h:"Dedicated"};
	var image4 = {src:"images/carousel_4.png", alt:"Fourth Image", p:"Eager to start the next chapter.", h:"Ambitious"};
	var slideArraySize = 4;
	
	slideArray[0] = image1;
	slideArray[1] = image2;
	slideArray[2] = image3;
	slideArray[3] = image4;
	
	var carouselActiveString = "active";
	var tempSource = "ReplaceSource";
	var tempAlt = "ReplaceAlt";
	var tempParag = "ReplaceP";
	var tempHeading = "ReplaceHead";
	var tempNumber = "ReplaceNum";
	var indicatorActiveString = 'class="active"';
	
	var htmlCodeSegment =  '<div class="carousel-item ' + carouselActiveString + '">' + 
							'<img class="first-slide" src= "' + tempSource + '" alt= "' + tempAlt + '">' + 
							'<div class="container">' + 
								'<div class="carousel-caption text-left">' + 
									'<h1>' + tempHeading + '</h1>' + 
									'<p>' + tempParag + '</p>' + 
								//	'<p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>' + 
								'</div>' + 
							'</div>' + 
						'</div>';			

	var htmlSlideButtonCode = '<li data-target="#myCarousel" data-slide-to="' + tempNumber + '" ' + indicatorActiveString + '></li>';


	for(i = 0; i < slideArraySize; i++){
		var tempHTML = htmlCodeSegment;
		
		if(i != 0){
			tempHTML = tempHTML.replace(carouselActiveString, "");
		}
		
		tempHTML = tempHTML.replace(tempSource, slideArray[i].src);
		tempHTML = tempHTML.replace(tempAlt, slideArray[i].alt);
		tempHTML = tempHTML.replace(tempParag, slideArray[i].p);
		tempHTML = tempHTML.replace(tempHeading, slideArray[i].h);
		
		carouselHTML += tempHTML;
		
		tempHTML = "";
	}
	
	for(i = 0; i < slideArraySize; i++){
		var tempHTML = htmlSlideButtonCode;
		
		if(i != 0){
			tempHTML = tempHTML.replace(indicatorActiveString, "");
		}
		
		tempHTML = tempHTML.replace(tempNumber, i);
		
		indicatorHTML += tempHTML;
		tempHTML = "";
	}
	
};

app.controller('carouselController', ['$scope', function($scope) {
	$scope.htmlCarousel = carouselHTML;
	$scope.htmlIndicators = indicatorHTML;
}]);