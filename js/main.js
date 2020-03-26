var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress() {
  var date = new Date();
  var percent = date.getSeconds() + 1;
  const offset = circumference - percent / 60 * circumference;
  circle.style.strokeDashoffset = offset;

  var t = setTimeout(setProgress, 500);
}

function createData() {
	var date = new Date();	
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var dayn = date.getDate();
	var day = date.getDay();

	var month = date.getMonth();
	var year = date.getFullYear();

	var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

	var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	if(hours < 10){
		hours = '0' + hours;
	}
	if(min < 10){
		min = '0' + min;
	}
	if(sec < 10){
		sec = '0' + sec;
	}

	document.getElementById('hours').innerHTML =	hours;
	document.getElementById('minute').innerHTML = min;
	document.getElementById('date').innerHTML = dayn;
	document.getElementById('day').innerHTML = days[day];
	document.getElementById('monthyear').innerHTML = months[month] + " " + year;

	var t = setTimeout(createData, 500);
}

function setBackground() {
	var date = new Date();
	var hours = date.getHours();
	var background = document.getElementById('background');

	if(hours < 8 || hours > 18) {
		background.style.backgroundImage = 'url("img/night-sky.jpg")';
	} 
	else {
		background.style.backgroundImage = 'url("img/day-sky.jpg")';
	}
	var t = setTimeout(setBackground, 1000);
}


setProgress();
setBackground();
createData();