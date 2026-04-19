@echo off
call npm run check
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%
call npx lint-staged
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%
