function doClick(e) {
    alert($.label.text);
}

$.index.open();

//main image disappearing when clicked
var disappear = Ti.UI.createAnimation({
	duration:3000, opacity:0
});
var disappearFast = Ti.UI.createAnimation({
	duration:300, opacity:0
});
var appear = Ti.UI.createAnimation({
	duration:12000, opacity:100,
});
var appearMedSlow = Ti.UI.createAnimation({
	duration:5000, opacity:100,
});
var appearMedium = Ti.UI.createAnimation({
	duration:2000, opacity:100,
});
var appearFast = Ti.UI.createAnimation({
	duration:1000, opacity:100,
});
function imageClickHandler (e){
	$.vase.animate(disappear);
}
 // figure ground type animations

 var upTop = Ti.UI.createAnimation({
	duration:800, top:80
});
var moveUp = Ti.UI.createAnimation({
	duration:700, top:70
});

function doClick (e){
	$.upBtn.animate(disappearFast);
	$.upBtn.animate(upTop);
	$.fgr.animate(upTop);
	$.intro.animate(moveUp);
	$.downBtn.animate(appear);
}
// dog pic animations
function downClick (e){
	$.dog.animate(appearFast);
	$.downBtn.animate(disappearFast);
	$.dogWords.animate(appearFast);
	$.slider.animate(appearMedium);
	$.dogWordsBottom.animate(appearMedSlow);
	$.upBtn2.animate(appear);
}


// slider
function slideOutline(e){
    $.dogOutline.opacity = e.value/100;
}
// page two
var upAndAway = Ti.UI.createAnimation({
	duration:1000, top:-1000,
	width:0,
});
var upTopAgain = Ti.UI.createAnimation({
	duration:300, top:60,
});
var moveUpAgain = Ti.UI.createAnimation({
	duration:700, top:190,
});
var goRight = Ti.UI.createAnimation({
	duration:7000, right:-1000,
});
var goLeft = Ti.UI.createAnimation({
	duration:7000, left:-1000,
});
var goRightFast = Ti.UI.createAnimation({
	duration:1000, left:-1000,
});
var goLeftFast = Ti.UI.createAnimation({
	duration:500, right:-1000,
});

function newClick(e) {
    $.intro.animate(upAndAway);
    $.fgr.animate(upAndAway);
    $.dogWords.animate(upAndAway);
    $.dog.animate(upAndAway);
    $.dogOutline.animate(upAndAway);
    $.slider.animate(upAndAway);
    $.dogWordsBottom.animate(upAndAway);
    $.upBtn2.animate(disappearFast);
    $.stableText.animate(upTopAgain);
    $.unstableText.animate(moveUpAgain);
    $.vaseText.animate(appear);
    $.faceR.animate(appear);
    $.faceL.animate(appear);
    // $.square.animate(appearMedSlow);
    $.upBtnVase.animate(appearMedSlow);
	
}
// vase face images/animations
// var blacksquare = Ti.UI.createImageView({
// });
// $.square.add(blacksquare);

function vaseClick (e){
	$.faceR.animate(goRight);
	$.faceL.animate(goLeft);
	$.upBtnVase.animate(disappearFast);
	$.stableText.animate(goRightFast);
    $.unstableText.animate(goLeftFast);
    $.vaseText.animate(upAndAway);

}


