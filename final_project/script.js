// variables are declared and assigned values to store the DIVs hiding the three digit code
var seven_div = document.getElementById("seven");
var one_div = document.getElementById("one");
var three_div = document.getElementById("three");
// variables used to store the DIVs containing each of the three Harden images
var img1 = document.getElementById("first-slot");
var img2 = document.getElementById("second-slot");
var img3 = document.getElementById("third-slot");
// variable used to count the clicks on each of the four basketballs
var click_counter = 0;


// called when the user clicks on a basketball, causing it to disappear
function hideMe(e){
	e.classList.add("hide");
	click_counter++;
	checkClickCounter();
}

// this function reveals the three digit code once the basketballs have all been clicked by the user
function checkClickCounter(){
	if (click_counter == 4){
		seven_div.classList.remove("hide");
		one_div.classList.remove("hide");
		three_div.classList.remove("hide");
		document.getElementById('step-back').play();
	} else {
		// do nothing until all 4 basketballs have disappeared
	}
}


// helpful StackOverflow link = https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript
function checkConfiguration() {
	if (img1.getAttribute('src') == "../image/harden/cropped_pngs/harden7.png" && img2.getAttribute('src') == "../image/harden/cropped_pngs/harden1.png" && img3.getAttribute('src') == "../image/harden/cropped_pngs/harden3.png"){
		img1.classList.add("no-cursor", "opaque");
		img2.classList.add("no-cursor", "opaque");
		img3.classList.add("no-cursor", "opaque");
		document.getElementById("first-slot").onclick = null;
		document.getElementById("second-slot").onclick = null;
		document.getElementById("third-slot").onclick = null;
		document.getElementById('key-earned').play();
		document.getElementById("hidden-key").classList.remove("none");
		
	} else {
		// do nothing until all 3 pictures are configured properly
	}
}


function nextImage(el){
	if (el.src.match("../image/logo/logo3.png")){
		el.src = "../image/harden/cropped_pngs/harden1.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden1.png")){
		el.src = "../image/harden/cropped_pngs/harden2.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden2.png")){
		el.src = "../image/harden/cropped_pngs/harden3.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden3.png")){
		el.src = "../image/harden/cropped_pngs/harden4.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden4.png")){
		el.src = "../image/harden/cropped_pngs/harden5.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden5.png")){
		el.src = "../image/harden/cropped_pngs/harden6.png";
	} else if (el.src.match("../image/harden/cropped_pngs/harden6.png")){
		el.src = "../image/harden/cropped_pngs/harden7.png";
	} else {
		el.src = "../image/logo/logo3.png";
	}
	// after we finish cycling through images we need to check to see if all three images are configured properly to reveal the key
	checkConfiguration();
}

function rocketsWin(){
	document.getElementById('swish-sound').play();
}

function changePage(){
	document.location = "congratulations_page.html";
}

function rocketsWin(){
	document.getElementById('game-winner').play();
	document.getElementById('hidden-key').classList.add("opaque");
	setTimeout(changePage, 1900);
} 




/*
https://www.techrepublic.com/article/preloading-and-the-javascript-image-object/

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();

// images are assigned to the variables that were declared (created) above
img1.src = "../image/harden/cropped_pngs/harden1.png";
img2.src = "../image/harden/cropped_pngs/harden2.png";
img3.src = "../image/harden/cropped_pngs/harden3.png";
img4.src = "../image/harden/cropped_pngs/harden4.png";
img5.src = "../image/harden/cropped_pngs/harden5.png";
img6.src = "../image/harden/cropped_pngs/harden6.png";
img7.src = "../image/harden/cropped_pngs/harden7.png";

// the array below stores all the images that will be displayed
var image_array = [img1, img2, img3, img4, img5, img6, img7];
*/