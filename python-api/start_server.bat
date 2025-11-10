@echo off

REM Set command line encoding to UTF-8
chcp 65001 >nul

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python not found. Please install Python 3.8 or higher.
    pause
    exit /b 1
)

REM Check if pip is available
pip --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: pip not found. Please ensure Python installation includes pip.
    pause
    exit /b 1
)

REM Create virtual environment if not exists
if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
    if %errorlevel% neq 0 (
        echo Error: Failed to create virtual environment.
        pause
        exit /b 1
    )
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Warning: Error installing dependencies, but will try to start server.
)

REM Start server
echo Starting Python API server...
echo Server running on http://localhost:5000
echo Press Ctrl+C to stop
python app.py

REM Pause on error
if %errorlevel% neq 0 (
    echo Server failed to start!
    pause
)