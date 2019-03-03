var headingHTML = "";
setupHeading();

function setupHeading(){
	
	var obj1 = {
		image:"images/contact.jpg",
		heading:"About",
		para:"Motivated, Ambitious, and Determined. I am always ready for a new challenge, whether it be coding or in my hobbies. Scroll down to learn more, or feel free to contact me at my personal email.",
		button:"Contact Me &raquo;",
		href:"mailto:Dunn.Ryan.01@gmail.com"
	};
	
	var obj2 = {
		image:"images/resume.png",
		heading:"Resume",
		para:"Want to see my professional experience? I assure you my resume will not disappoint! Click the button below to see me online professional resume.",
		button:"The Resume &raquo;",
		href:"pdfs/Resume.pdf"
	};
	
	var obj3 = {
		image:"images/code.png",
		heading:"Code Samples",
		para:"In the software realm, what is a resume without any code examples? Click here to see the projects I have done around the house to further enhance my programming knowledge and experience.",
		button:"Coming Soon", //"The Code &raquo;"
		href:"#"
	};
	
	var objArray = [obj1, obj2, obj3];
	var objArraySize = 3;
	
	var tempImage = "ReplaceImage";
	var tempHeading = "ReplaceHeading";
	var tempParag = "ReplaceP";
	var tempButton = "ReplaceButton";
	var tempHREF = "ReplaceHREF";
	
	var htmlCodeSegment =   '<div class="col-lg-4">' +
								'<img class="rounded-circle" src=' + tempImage + ' alt="Generic placeholder image" width="140" height="140">' +
								'<h2>' + tempHeading + '</h2>' +
								'<p>' + tempParag + '</p>' +
								'<p><a class="btn btn-secondary" href="' + tempHREF + '" role="button">' + tempButton + '</a></p>' +
							'</div>';
							
	for(i = 0; i < objArraySize; i++){
		var tempHTML = htmlCodeSegment;
		
		tempHTML = tempHTML.replace(tempImage, objArray[i].image);
		tempHTML = tempHTML.replace(tempHeading, objArray[i].heading);
		tempHTML = tempHTML.replace(tempParag, objArray[i].para);
		tempHTML = tempHTML.replace(tempButton, objArray[i].button);
		tempHTML = tempHTML.replace(tempHREF, objArray[i].href);
		
		headingHTML += tempHTML;
		
		tempHTML = "";
	}
}

app.controller('rowController', ['$scope', function($scope) {
	$scope.htmlHeading = headingHTML;
}]);
		
		
		
		
		
		
		