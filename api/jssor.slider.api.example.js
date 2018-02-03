var jssor_1_options = {
    $AutoPlay: 0,
    $Idle: 2000,
    $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
    }
};

var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

//#region API $Play, $Pause, $PlayTo, $GoTo, $Next, $Prev, $AutoPlay, $AppendSlides, $RemoveSlides, $ReloadSlides function BEGIN

function Play(event) {
    jssor_1_slider.$AutoPlay(1);     //enable auto play

    //auto play values
    //0: no auto play
    //1: continuously
    //2: stop at last slide
    //4: stop on click
    //8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
}

function Pause(event) {
    jssor_1_slider.$Pause();    //disable auto play
}

function PlayTo(event) {
    //play to specified slide
    jssor_1_slider.$PlayTo(jssor_1_slider.$CurrentIndex() + 1);
}

function GoTo(event) {
    //go to specified slide instantly
    jssor_1_slider.$GoTo(jssor_1_slider.$CurrentIndex() + 1);
}

function Next(event) {
    //play to next slide
    jssor_1_slider.$Next();
}

function Prev(event) {
    //play to previous slide
    jssor_1_slider.$Prev();
}

function AutoPlay(event) {
    //get set auto play
    var autoPlayStatus = jssor_1_slider.$AutoPlay();    //get auto play status
    jssor_1_slider.$AutoPlay(4 + 8);                    //set auto play

    //auto play values
    //0: no auto play
    //1: continuously
    //2: stop at last slide
    //4: stop on click
    //8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
}

function AppendSlides(event) {
    //append slides
    var slidesHtml = '<div><img data-u="image" src="../img/gallery/980x380/002.jpg" /></div>';
    slidesHtml += '<div><img data-u="image" src="../img/gallery/980x380/003.jpg" /></div>';

    //append slides after current slide
    jssor_1_slider.$AppendSlides(slidesHtml);

    ////append slides before current slide
    //var currentIndex = jssor_1_slider.$CurrentIndex();
    //jssor_1_slider.$AppendSlides(slidesHtml, currentIndex);

    ////append slides before the first slide
    //jssor_1_slider.$AppendSlides(slidesHtml, 0);

    ////append slides after the last slide
    //jssor_1_slider.$AppendSlides(slidesHtml, jssor_1_slider.$SlidesCount);
}

function RemoveSlides(event) {
    var currentIndex = jssor_1_slider.$CurrentIndex();
    var slideIndices = [currentIndex];

    //remove specified slides
    jssor_1_slider.$RemoveSlides(slideIndices);

    //remove the first and the third slide
    //jssor_1_slider.$RemoveSlides([0, 2]);
}

function ReloadSlides(event) {
    var slidesHtml = '<div><img data-u="image" src="../img/gallery/980x380/003.jpg" /></div>';
    slidesHtml += '<div><img data-u="image" src="../img/gallery/980x380/002.jpg" /></div>';

    //remove all slides and reload new slides
    jssor_1_slider.$ReloadSlides(slidesHtml);
}

function Properties(event) {
    var autoPlay = jssor_1_slider.$AutoPlay();
    var slidesCount = jssor_1_slider.$SlidesCount();
    //get current slide index
    var currentIndex = jssor_1_slider.$CurrentIndex();
    //get current position of the carousel
    var currentPosition = jssor_1_slider.$CurrentPosition();

    var isDragging = jssor_1_slider.$IsDragging();
    var isMouseOver = jssor_1_slider.$IsMouseOver();
    var isSliding = jssor_1_slider.$IsSliding();
    var lastDragSucceeded = jssor_1_slider.$LastDragSucceeded();

    var originalWidth = jssor_1_slider.$OriginalWidth();
    var originalHeight = jssor_1_slider.$OriginalHeight();
    var scaleWidth = jssor_1_slider.$ScaleWidth();
    var scaleHeight = jssor_1_slider.$ScaleHeight();

    var info = '$AutoPlay: ' + autoPlay;
    info += "\r\n$SlidesCount: " + slidesCount;
    info += "\r\n$CurrentIndex: " + currentIndex;
    info += "\r\n$CurrentPosition: " + currentPosition;

    info += "\r\n$IsDragging: " + isDragging;
    info += "\r\n$IsMouseOver: " + isMouseOver;
    info += "\r\n$IsSliding: " + isSliding;
    info += "\r\n$LastDragSucceeded: " + lastDragSucceeded;

    info += "\r\n$OriginalWidth: " + originalWidth;
    info += "\r\n$OriginalHeight: " + originalHeight;
    info += "\r\n$ScaleWidth: " + scaleWidth;
    info += "\r\n$ScaleHeight: " + scaleHeight;

    window.alert(info);
}

function DestroySlider(event) {
    //destroy jssor slider instance and remove all html inside the slider element
    jssor_1_slider.$Destroy();

    //release memory
    jssor_1_slider = null;
}

$Jssor$.$AddEvent(document.getElementById("playButton"), "click", Play);
$Jssor$.$AddEvent(document.getElementById("pauseButton"), "click", Pause);
$Jssor$.$AddEvent(document.getElementById("playToButton"), "click", PlayTo);
$Jssor$.$AddEvent(document.getElementById("gotoButton"), "click", GoTo);
$Jssor$.$AddEvent(document.getElementById("nextButton"), "click", Next);
$Jssor$.$AddEvent(document.getElementById("prevButton"), "click", Prev);
$Jssor$.$AddEvent(document.getElementById("autoPlayButton"), "click", AutoPlay);
$Jssor$.$AddEvent(document.getElementById("appendButton"), "click", AppendSlides);
$Jssor$.$AddEvent(document.getElementById("removeButton"), "click", RemoveSlides);
$Jssor$.$AddEvent(document.getElementById("reloadButton"), "click", ReloadSlides);
$Jssor$.$AddEvent(document.getElementById("propertiesButton"), "click", Properties);

var destroyButtonElement = document.getElementById("destroyButton");
destroyButtonElement && $Jssor$.$AddEvent(destroyButtonElement, "click", DestroySlider);

//#endregion