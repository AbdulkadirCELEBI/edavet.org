@echo off
call npx --no-install commitlint --edit %1
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%
