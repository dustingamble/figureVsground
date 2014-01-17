function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function imageClickHandler() {
        $.vase.animate(disappear);
    }
    function doClick() {
        $.upBtn.animate(disappearFast);
        $.upBtn.animate(upTop);
        $.fgr.animate(upTop);
        $.intro.animate(moveUp);
        $.downBtn.animate(appear);
    }
    function downClick() {
        $.dog.animate(appearFast);
        $.downBtn.animate(disappearFast);
        $.dogWords.animate(appearFast);
        $.slider.animate(appearMedium);
        $.dogWordsBottom.animate(appearMedSlow);
        $.upBtn2.animate(appear);
    }
    function slideOutline(e) {
        $.dogOutline.opacity = e.value / 100;
    }
    function newClick() {
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
        $.upBtnVase.animate(appearMedSlow);
    }
    function vaseClick() {
        $.faceR.animate(goRight);
        $.faceL.animate(goLeft);
        $.upBtnVase.animate(disappearFast);
        $.stableText.animate(goRightFast);
        $.unstableText.animate(goLeftFast);
        $.vaseText.animate(upAndAway);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.slider = Ti.UI.createSlider({
        opacity: 0,
        top: 830,
        id: "slider",
        min: "0",
        max: "100",
        width: "25%",
        value: "0"
    });
    $.__views.index.add($.__views.slider);
    slideOutline ? $.__views.slider.addEventListener("change", slideOutline) : __defers["$.__views.slider!change!slideOutline"] = true;
    $.__views.intro = Ti.UI.createLabel({
        bottom: -1e3,
        width: 500,
        height: 300,
        text: "The figure-ground relationship is one of several principles referred to as Gestalt principles of perception. It asserts that the human perceptual system separates stimuli into either figure elements or ground elements. Figure elements are the objects of focus, and ground elements compose an undifferentiated background.",
        id: "intro"
    });
    $.__views.index.add($.__views.intro);
    $.__views.fgr = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        font: {
            fontSize: 45
        },
        text: "Figure Ground Relationship",
        id: "fgr"
    });
    $.__views.index.add($.__views.fgr);
    doClick ? $.__views.fgr.addEventListener("click", doClick) : __defers["$.__views.fgr!click!doClick"] = true;
    $.__views.dogWords = Ti.UI.createLabel({
        top: 315,
        width: 550,
        height: Ti.UI.SIZE,
        color: "#333",
        opacity: 0,
        font: {
            fontSize: 25
        },
        text: 'Can you see the dalmation as the "figure" & the white as the "background"?',
        id: "dogWords"
    });
    $.__views.index.add($.__views.dogWords);
    $.__views.dogWordsBottom = Ti.UI.createLabel({
        opacity: 0,
        top: 870,
        text: "The Dalmatian should pop out as the figureground relationship stabilizes.",
        id: "dogWordsBottom"
    });
    $.__views.index.add($.__views.dogWordsBottom);
    $.__views.stableText = Ti.UI.createLabel({
        top: -1e3,
        width: 500,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 33
        },
        color: "#333",
        text: "The composition becomes clear when the realtionship between figure and ground is stable.",
        id: "stableText"
    });
    $.__views.index.add($.__views.stableText);
    $.__views.unstableText = Ti.UI.createLabel({
        bottom: -500,
        height: Ti.UI.SIZE,
        width: 500,
        font: {
            fontSize: 22
        },
        color: "#666",
        text: "In unstable figure-ground relationships, the relationship is ambiguous and can be interpreted in different ways; the interpretation of elements alternates between figure and ground.",
        id: "unstableText"
    });
    $.__views.index.add($.__views.unstableText);
    $.__views.vaseText = Ti.UI.createLabel({
        top: 325,
        font: {
            fontSize: 24
        },
        width: 500,
        color: "#333",
        opacity: 0,
        text: "The Rubin Vase: Black Vase or White Faces?",
        id: "vaseText"
    });
    $.__views.index.add($.__views.vaseText);
    $.__views.upBtnVase = Ti.UI.createImageView({
        bottom: 25,
        opacity: 0,
        id: "upBtnVase",
        image: "button_up.png"
    });
    $.__views.index.add($.__views.upBtnVase);
    vaseClick ? $.__views.upBtnVase.addEventListener("click", vaseClick) : __defers["$.__views.upBtnVase!click!vaseClick"] = true;
    $.__views.dog = Ti.UI.createImageView({
        top: 400,
        opacity: 0,
        id: "dog",
        image: "dog.jpg"
    });
    $.__views.index.add($.__views.dog);
    $.__views.dogOutline = Ti.UI.createImageView({
        top: 400,
        opacity: 0,
        id: "dogOutline",
        image: "dogOutline.png"
    });
    $.__views.index.add($.__views.dogOutline);
    $.__views.upBtn = Ti.UI.createImageView({
        top: 550,
        id: "upBtn",
        image: "button_up.png"
    });
    $.__views.index.add($.__views.upBtn);
    doClick ? $.__views.upBtn.addEventListener("click", doClick) : __defers["$.__views.upBtn!click!doClick"] = true;
    $.__views.upBtn2 = Ti.UI.createImageView({
        bottom: 25,
        opacity: 0,
        id: "upBtn2",
        image: "button_up.png"
    });
    $.__views.index.add($.__views.upBtn2);
    newClick ? $.__views.upBtn2.addEventListener("click", newClick) : __defers["$.__views.upBtn2!click!newClick"] = true;
    $.__views.downBtn = Ti.UI.createImageView({
        top: 310,
        opacity: 0,
        id: "downBtn",
        image: "button_down.png"
    });
    $.__views.index.add($.__views.downBtn);
    downClick ? $.__views.downBtn.addEventListener("click", downClick) : __defers["$.__views.downBtn!click!downClick"] = true;
    $.__views.vase = Ti.UI.createImageView({
        id: "vase",
        image: "vase.jpg"
    });
    $.__views.index.add($.__views.vase);
    imageClickHandler ? $.__views.vase.addEventListener("click", imageClickHandler) : __defers["$.__views.vase!click!imageClickHandler"] = true;
    $.__views.faceL = Ti.UI.createImageView({
        top: 370,
        left: 76,
        width: Ti.UI.SIZE,
        height: 450,
        opacity: 0,
        id: "faceL",
        image: "face_left.jpg"
    });
    $.__views.index.add($.__views.faceL);
    $.__views.faceR = Ti.UI.createImageView({
        top: 370,
        right: 77,
        width: Ti.UI.SIZE,
        height: 450,
        opacity: 0,
        id: "faceR",
        image: "face_right.jpg"
    });
    $.__views.index.add($.__views.faceR);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var disappear = Ti.UI.createAnimation({
        duration: 3e3,
        opacity: 0
    });
    var disappearFast = Ti.UI.createAnimation({
        duration: 300,
        opacity: 0
    });
    var appear = Ti.UI.createAnimation({
        duration: 12e3,
        opacity: 100
    });
    var appearMedSlow = Ti.UI.createAnimation({
        duration: 5e3,
        opacity: 100
    });
    var appearMedium = Ti.UI.createAnimation({
        duration: 2e3,
        opacity: 100
    });
    var appearFast = Ti.UI.createAnimation({
        duration: 1e3,
        opacity: 100
    });
    var upTop = Ti.UI.createAnimation({
        duration: 800,
        top: 80
    });
    var moveUp = Ti.UI.createAnimation({
        duration: 700,
        top: 70
    });
    var upAndAway = Ti.UI.createAnimation({
        duration: 1e3,
        top: -1e3,
        width: 0
    });
    var upTopAgain = Ti.UI.createAnimation({
        duration: 300,
        top: 60
    });
    var moveUpAgain = Ti.UI.createAnimation({
        duration: 700,
        top: 190
    });
    var goRight = Ti.UI.createAnimation({
        duration: 7e3,
        right: -1e3
    });
    var goLeft = Ti.UI.createAnimation({
        duration: 7e3,
        left: -1e3
    });
    var goRightFast = Ti.UI.createAnimation({
        duration: 1e3,
        left: -1e3
    });
    var goLeftFast = Ti.UI.createAnimation({
        duration: 500,
        right: -1e3
    });
    __defers["$.__views.slider!change!slideOutline"] && $.__views.slider.addEventListener("change", slideOutline);
    __defers["$.__views.fgr!click!doClick"] && $.__views.fgr.addEventListener("click", doClick);
    __defers["$.__views.upBtnVase!click!vaseClick"] && $.__views.upBtnVase.addEventListener("click", vaseClick);
    __defers["$.__views.upBtn!click!doClick"] && $.__views.upBtn.addEventListener("click", doClick);
    __defers["$.__views.upBtn2!click!newClick"] && $.__views.upBtn2.addEventListener("click", newClick);
    __defers["$.__views.downBtn!click!downClick"] && $.__views.downBtn.addEventListener("click", downClick);
    __defers["$.__views.vase!click!imageClickHandler"] && $.__views.vase.addEventListener("click", imageClickHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;