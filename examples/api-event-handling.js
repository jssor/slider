var jssor_1_SlideshowTransitions = [
  { $Duration: 500, $Delay: 30, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2049, $Easing: $Jease$.$OutQuad },
  { $Duration: 500, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad },
  { $Duration: 1000, x: -0.2, $Delay: 40, $Cols: 12, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 } },
  { $Duration: 2000, y: -1, $Delay: 60, $Cols: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: { $Top: 1.5 } },
  { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } }
];

var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
    }
};

var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

//#region event handling

//$JssorSlider$.$EVT_PARK
function JssorSliderParkEventHandler(slideIndex, fromIndex) {
    //fires when carousel stopped sliding and parked at current slide
    //slideIndex: the index of current slide
    //fromIndex: the index of previous slide

    var args = [slideIndex, fromIndex];
    console.log("$JssorSlider$.$EVT_PARK args: " + args.join(","));
}

//$JssorSlider$.$EVT_CLICK
function JssorSliderClickEventHandler(slideIndex, event) {
    //slideIndex: the index of slide which is clicked
    //event: native event fired by browser

    var args = [slideIndex, "event"];
    console.log("$JssorSlider$.$EVT_CLICK args: " + args.join(","));
}

//$JssorSlider$.$EVT_MOUSE_ENTER
function JssorSliderMouseEnterEventHaldler() {
    //fires on mouse enter
    console.log("$JssorSlider$.$EVT_MOUSE_ENTER");
}

//$JssorSlider$.$EVT_MOUSE_LEAVE
function JssorSliderMouseLeaveEventHandler() {
    //fires on mouse leave
    console.log("$JssorSlider$.$EVT_MOUSE_LEAVE");
}

//$JssorSlider$.$EVT_DRAG_START
function JssorSliderDragStartEventHandler(position, virtualPosition, event) {
    //position: real position of the carousel
    //virtualPosition: virtual position of the carousel
    //event: native event fired by browser

    var args = [position, virtualPosition, "event"];
    console.log("$JssorSlider$.$EVT_DRAG_START args: " + args.join(","));
}

//$JssorSlider$.$EVT_DRAG_END
function JssorSliderDragEndEventHandler(position, virtualPosition, startPosition, virtualStartPosition, event) {
    //position: real position of the carousel
    //startPosition: real position that drag starts at
    //virtualPosition: virtual position of the carousel
    //virtualStartPosition; virtual position that drag starts at
    //event: native event fired by browser

    var args = [position, virtualPosition, startPosition, virtualStartPosition, "event"];
    console.log("$JssorSlider$.$EVT_DRAG_END args: " + args.join(","));
    console.log("$LastDragSucceeded: " + jssor_1_slider.$LastDragSucceeded());
}

//$JssorSlider$.$EVT_SWIPE_START
function JssorSliderSwipeStartEventHandler(position, virtualPosition) {
    //position: real position of the carousel
    //virtualPosition: virtual position of the carousel

    var args = [position, virtualPosition];
    console.log("$JssorSlider$.$EVT_SWIPE_START args: " + args.join(","));
}

//$JssorSlider$.$EVT_SWIPE_END
function JssorSliderSwipeEndEventHandler(position, virtualPosition) {
    //position: real position of the carousel
    //virtualPosition: virtual position of the carousel

    var args = [position, virtualPosition];
    console.log("$JssorSlider$.$EVT_SWIPE_END args: " + args.join(","));
}

//$JssorSlider$.$EVT_LOAD_START
function JssorSliderLoadStartEventHandler(slideIndex) {
    //fires before image load
    //slideIndex: the index of slide

    var args = [slideIndex];
    console.log("$JssorSlider$.$EVT_LOAD_START args: " + args.join(","));
}

//$JssorSlider$.$EVT_LOAD_END
function JssorSliderLoadEndEventHandler(slideIndex) {
    //fires after image load
    //slideIndex: the index of slide

    var args = [slideIndex];
    console.log("$JssorSlider$.$EVT_LOAD_END args: " + args.join(","));
}

//$JssorSlider$.$EVT_FREEZE
function JssorSliderFreezeEventHandler() {
    //fires on slider freeze
    console.log("$JssorSlider$.$EVT_FREEZE");
}

//$JssorSlider$.$EVT_POSITION_CHANGE
function JssorSliderPositionChangeEventHandler(position, fromPosition, virtualPosition, virtualFromPosition) {
    //fires continuously while carousel sliding
    //position: current position of the carousel
    //fromPosition: previous position of the carousel
    //virtualPosition: current virtual position of the carousel
    //virtualFromPosition: previous virtual position of the carousel

    var args = [position, fromPosition, virtualPosition, virtualFromPosition];
    console.log("$JssorSlider$.$EVT_POSITION_CHANGE args: " + args.join(","));
}

//$JssorSlider$.$EVT_STATE_CHANGE
function JssorSliderStateChangeEventHandler(slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd) {
    //given a slide parked, the life cycle of current slide is as below, progressBegin --> idleBegin --> idleEnd --> progressEnd
    //this event fires at any state of 'progressBegin', 'idleBegin', 'idleEnd' and 'progressEnd'
    //slideIndex: the index of slide
    //progress: current time (in milliseconds) in the whole process
    //progressBegin: the begining of the whole process (generally, starts to play slideshow and caption)
    //idleBegin: comes to the idle period, will wait for a period which is specified by option '$Idle'
    //idleEnd: the idle period is over, plays the rest caption
    //progressEnd: the whole process is completed

    //tipical usage
    if (progress == progressEnd) {
        //the animation of current slide is completed
    }
    else if (progress == idleEnd) {
        //the idle period of current slide is over
    }
    else if (progress == idleBegin) {
        //comes to the idle period
    }
    else if (progress == progressBegin) {
        //the animation of current slide is at the beginning
    }
    else if (progress < 0) {
        //the animation of current slide is aborted, the progress value is negative only in this case
        var realProgress = -progress - 1;
    }

    var args = [slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd];
    console.log("$JssorSlider$.$EVT_STATE_CHANGE args: " + args.join(","));
}

//$JssorSlider$.$EVT_PROGRESS_CHANGE
function JssorSliderProgressChangeEventHandler(slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd) {
    //this event fires continuously within the process of current slide
    //tipical usage
    var progressString = Math.round(progress / progressEnd * 100) + "%";

    var args = [slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd];
    console.log("$JssorSlider$.$EVT_PROGRESS_CHANGE args: " + args.join(","));
}

//$JssorSlider$.$EVT_SLIDESHOW_START
function JssorSliderSlideshowStartEventHandler(slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd) {
    //within the whole process of a slide, there may be slideshow to run
    //this event fires when slideshow begin

    var args = [slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd];
    console.log("$JssorSlider$.$EVT_SLIDESHOW_START args: " + args.join(","));
}

//$JssorSlider$.$EVT_SLIDESHOW_END
function JssorSliderSlideshowEndEventHandler(slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd) {
    //within the whole process of a slide, there may be slideshow to run
    //this event fires when slideshow end

    var args = [slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd];
    console.log("$JssorSlider$.$EVT_SLIDESHOW_END args: " + args.join(","));
}

//#region listen jssor slider events

jssor_1_slider.$On($JssorSlider$.$EVT_PARK, JssorSliderParkEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_CLICK, JssorSliderClickEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_MOUSE_ENTER, JssorSliderMouseEnterEventHaldler);
jssor_1_slider.$On($JssorSlider$.$EVT_MOUSE_LEAVE, JssorSliderMouseLeaveEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_DRAG_START, JssorSliderDragStartEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_DRAG_END, JssorSliderDragEndEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_SWIPE_START, JssorSliderSwipeStartEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_SWIPE_END, JssorSliderSwipeEndEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_LOAD_START, JssorSliderLoadStartEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_LOAD_END, JssorSliderLoadEndEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_FREEZE, JssorSliderFreezeEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_POSITION_CHANGE, JssorSliderPositionChangeEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_STATE_CHANGE, JssorSliderStateChangeEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_PROGRESS_CHANGE, JssorSliderProgressChangeEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_SLIDESHOW_START, JssorSliderSlideshowStartEventHandler);
jssor_1_slider.$On($JssorSlider$.$EVT_SLIDESHOW_END, JssorSliderSlideshowEndEventHandler);

//#endregion

//#region unlisten jssor slider events

//jssor_1_slider.$Off($JssorSlider$.$EVT_CLICK, JssorSliderClickEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_DRAG_START, JssorSliderDragStartEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_DRAG_END, JssorSliderDragEndEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_LOAD_START, JssorSliderLoadStartEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_LOAD_END, JssorSliderLoadEndEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_MOUSE_ENTER, JssorSliderMouseEnterEventHaldler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_MOUSE_LEAVE, JssorSliderMouseLeaveEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_PARK, JssorSliderParkEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_POSITION_CHANGE, JssorSliderPositionChangeEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_PROGRESS_CHANGE, JssorSliderProgressChangeEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_SLIDESHOW_START, JssorSliderSlideshowStartEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_SLIDESHOW_END, JssorSliderSlideshowEndEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_STATE_CHANGE, JssorSliderStateChangeEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_SWIPE_START, JssorSliderSwipeStartEventHandler);
//jssor_1_slider.$Off($JssorSlider$.$EVT_SWIPE_END, JssorSliderSwipeEndEventHandler);

//#endregion

//#endregion