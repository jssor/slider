@ECHO OFF
SET RESERVE_MEMBERNAMES=$EaseLinear,$EaseGoBack,$EaseSwing,$EaseInQuad,$EaseOutQuad,$EaseInOutQuad,$EaseInCubic,$EaseOutCubic,$EaseInOutCubic,$EaseInQuart,$EaseOutQuart,$EaseInOutQuart,$EaseInQuint,$EaseOutQuint,$EaseInOutQuint,$EaseInSine,$EaseOutSine,$EaseInOutSine,$EaseInExpo,$EaseOutExpo,$EaseInOutExpo,$EaseInCirc,$EaseOutCirc,$EaseInOutCirc,$EaseInElastic,$EaseOutElastic,$EaseInOutElastic,$EaseInBack,$EaseOutBack,$EaseInOutBack,$EaseInBounce,$EaseOutBounce,$EaseInOutBounce,$EaseInWave,$EaseOutWave,$EaseInJump,$EaseOutJump
SET RESERVE_MEMBERNAMES=%RESERVE_MEMBERNAMES%,$FormationStraight,$FormationSwirl,$FormationZigZag,$FormationStraightStairs,$FormationSquare,$FormationRectangle,$FormationRandom,$FormationCircle,$FormationCross,$FormationRectangleCross
SET RESERVE_MEMBERNAMES=%RESERVE_MEMBERNAMES%,$EVT_CLICK,$EVT_DRAG_START,$EVT_DRAG_END,$EVT_SWIPE_START,$EVT_SWIPE_END,$EVT_LOAD_START,$EVT_LOAD_END,$EVT_POSITION_CHANGE,$EVT_PARK,$EVT_SLIDESHOW_START,$EVT_SLIDESHOW_END,$EVT_PROGRESS_CHANGE,$EVT_STATE_CHANGE,$EVT_ROLLBACK_START,$EVT_ROLLBACK_END
SET RESERVE_MEMBERNAMES=%RESERVE_MEMBERNAMES%,$Interval,$Duration,$Delay,$Cols,$Rows,$Top,$Right,$Bottom,$Left,$Fade,$Zoom,$Move,$SlideOut,$FlyDirection,$Reverse,$Assembly,$Easing,$Formation,$ChessMode,$Column,$Row,$Cache,$Opacity,$ScaleHorizontal,$ScaleVertical,$Round,$During,$Rotate,$ZIndex,$Brother,$Shift,$Outside,$Clip,$ScaleClip

SET RESERVE_MEMBERNAMES2=$On,$Off,$Elmt,$Play,$Pause,$Lock,$Unlock,$GoTo,$PlayTo,$Next,$Prev,$SetScaleWidth,$GetScaleWidth,$GetScaleHeight,$GetOriginalWidth,$GetOriginalHeight,$SetSlideshowTransitions,$SetCaptionTransitions,$SlidesCount,$CurrentIndex,$IsAutoPlaying,$IsDragging,$IsSliding,$IsMouseOver,$LastDragSucceded
SET RESERVE_MEMBERNAMES2=%RESERVE_MEMBERNAMES2%,$FillMode,$LazyLoading,$StartIndex,$PauseOnHover,$AutoPlay,$Loop,$HWA,$AutoPlaySteps,$AutoPlayInterval,$ArrowKeyNavigation,$SlideDuration,$SlideEasing,$MinDragOffsetToSlide,$SlideWidth,$SlideHeight,$SlideSpacing,$DisplayPieces,$ParkingPosition,$UISearchMode,$PlayOrientation,$DragOrientation,$LoadNearby,$NaviQuitDrag,$HWA
SET RESERVE_MEMBERNAMES2=%RESERVE_MEMBERNAMES2%,$BulletNavigatorOptions,$Class,$ChanceToShow,$ActionMode,$AutoCenter,$Steps,$Lanes,$SpacingX,$SpacingY,$Orientation

SET RESERVE_MEMBERNAMES3=$JssorPlayer$,$Play,$Pause,$SeekTo,$Enter,$Quit,$Enable,$Disable,$IsPlaying,$IsEntered,$Remove,$FetchPlayers
SET RESERVE_MEMBERNAMES3=%RESERVE_MEMBERNAMES3%,$ArrowNavigatorOptions,$Scale
SET RESERVE_MEMBERNAMES3=%RESERVE_MEMBERNAMES3%,$ThumbnailNavigatorOptions,$DisableDrag
SET RESERVE_MEMBERNAMES3=%RESERVE_MEMBERNAMES3%,$SlideshowOptions,$Transitions,$TransitionsOrder,$ShowLink
SET RESERVE_MEMBERNAMES3=%RESERVE_MEMBERNAMES3%,$CaptionSliderOptions,$CaptionTransitions,$PlayInMode,$PlayOutMode
SET RESERVE_MEMBERNAMES3=%RESERVE_MEMBERNAMES3%,$JssorEasing$,$JssorSlider$,$JssorSlideshowFormations$,$JssorSlideshowRunner$,$JssorBulletNavigator$,$JssorArrowNavigator$,$JssorThumbnailNavigator$,$JssorCaptionSlider$

SET RESERVE_MEMBERS=%RESERVE_MEMBERNAMES%
SET RESERVE_MEMBERS2=%RESERVE_MEMBERNAMES2%
SET RESERVE_MEMBERS3=%RESERVE_MEMBERNAMES3%
SET RESERVE_MEMBERS3=%RESERVE_MEMBERS3%,$Top,$Right,$Bottom,$Left,$Width,$Height,$Opacity,$Clip,$Display,$Transform

SET RENAME=
SET RENAME2=
SET RENAME3=
SET RESERVE=
SET RESERVE2=
SET RESERVE3=

CALL :ParseReserveMemberNames "%RESERVE_MEMBERNAMES%"
SET RENAME3=%RENAME%
SET RENAME=
CALL :ParseReserveMemberNames "%RESERVE_MEMBERNAMES2%"
SET RENAME2=%RENAME%
SET RENAME=
CALL :ParseReserveMemberNames "%RESERVE_MEMBERNAMES3%"

CALL :ParseReserveMembers "%RESERVE_MEMBERS%"
SET RESERVE3=%RESERVE%
SET RESERVE=
CALL :ParseReserveMembers "%RESERVE_MEMBERS2%"
SET RESERVE2=%RESERVE%
SET RESERVE=
CALL :ParseReserveMembers "%RESERVE_MEMBERS3%"
GOTO :EOS


REM----------------------------------------------------------
:ParseReserveMemberNames

SET list=%1
SET list=%list:"=%

FOR /f "tokens=1* delims=," %%a IN ("%list%") DO (
  IF NOT "%%a" == "" CALL :SubMemberNames %%a "%2"
  IF NOT "%%b" == "" CALL :ParseReserveMemberNames "%%b" "%2"
)
EXIT /b

:SubMemberNames
IF NOT "%RENAME%" == "" SET RENAME=%RENAME%,
SET RENAME=%RENAME%.%1=.%1
EXIT /b
REM----------------------------------------------------------



REM----------------------------------------------------------
:ParseReserveMembers

SET list=%1
SET list=%list:"=%

FOR /f "tokens=1* delims=," %%a IN ("%list%") DO (
  IF NOT "%%a" == "" CALL :SubMembers %%a
  IF NOT "%%b" == "" CALL :ParseReserveMembers "%%b"
)
EXIT /b

:SubMembers
IF NOT "%RESERVE%" == "" SET RESERVE=%RESERVE%,
SET RESERVE=%RESERVE%.%1
EXIT /b
REM----------------------------------------------------------


:EOS

ECHO -RENAME:%RENAME%,%RENAME2%,%RENAME3%
ECHO -RESERVE:%RESERVE%,%RESERVE2%,%RESERVE3%

"..\tool\Jssor.Compress.exe" -JS -AWRAP -OVERWRITE -RENAME:%RENAME%,%RENAME2%,%RENAME3% -RESERVE:%RESERVE%,%RESERVE2%,%RESERVE3% -ENCOUT:UTF-8 -NOREMOVE:GlobalVariable "jssor.core.js" "jssor.utils.js" "jssor.slider.js" -OUT "jssor.slider.mini.js"
REM PAUSE