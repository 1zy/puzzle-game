// JavaScript Document

var timeIn=document.getElementById("time");
function timeCount(){
	timeIn.innerHTML=time
	time++
}

timeCount()
var timeRun=setInterval('timeCount()',1000)