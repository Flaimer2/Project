chcp 65001
title Proxy
path="C:\Program Files\Eclipse Adoptium\jdk-17.0.10.7-hotspot\bin"
rd /s /q "logs"
@echo off
java -Dfile.encoding=UTF-8 -Xms2048M -Xmx2048M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15 -jar server.jar nogui
PAUSE