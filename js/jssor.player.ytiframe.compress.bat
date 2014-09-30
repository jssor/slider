@ECHO OFF
SET RESERVE_MEMBERNAMES=%RESERVE_MEMBERNAMES%,$EVT_CLICK

SET RESERVE_MEMBERNAMES2=$On

SET RESERVE_MEMBERNAMES3=$JssorPlayer$,$Play,$Pause,$SeekTo,$Enter,$Quit,$Enable,$Disable,$IsPlaying,$IsEntered,$Remove,$FetchPlayers,$EVT_SWITCH

SET RESERVE_MEMBERS=%RESERVE_MEMBERNAMES%
SET RESERVE_MEMBERS2=%RESERVE_MEMBERNAMES2%
SET RESERVE_MEMBERS3=%RESERVE_MEMBERNAMES3%

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

"..\tool\Jssor.Compress.exe" -JS -AWRAP -OVERWRITE -RENAME:%RENAME%,%RENAME2%,%RENAME3% -RESERVE:%RESERVE%,%RESERVE2%,%RESERVE3% -ENCOUT:UTF-8 -NOREMOVE:GlobalVariable "jssor.js" "jssor.player.ytiframe.js" -OUT "jssor.player.ytiframe.min.js"
REM PAUSE