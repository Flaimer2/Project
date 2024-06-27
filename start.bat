@echo off
cd proxy
start start.bat

cd ..\auth
start start.bat

cd ..\lobby\lobby-2
start start.bat

C:\ProgramData\chocolatey\lib\redis\tools\redis-server.exe --daemonize yes
