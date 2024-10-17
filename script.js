window.addEventListener('load',timecalc)
function timecalc(){
var date = new Date();
var dayNumber = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var ampm = hour >=12 ? 'PM':'AM';
var daynames = ["SUN","MON","TUE","WED","THU","FRI"
    ,"SAT","SUN"];

hour= hour%12;
hour = hour? hour:'12';
hour = hour<10?'0'+hour:hour;
minutes = minutes<10 ?'0'+minutes:minutes
   document.getElementById("day").innerHTML=daynames[dayNumber];
   document.getElementById("hour").innerHTML = hour;
   document.getElementById("minute").innerHTML = minutes;
   document.getElementById("ampm").innerHTML=ampm;

   setTimeout(timecalc,200);
}