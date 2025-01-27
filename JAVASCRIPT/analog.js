
setInterval(
function()
{
d=new Date()
second=d.getSeconds();
minute=d.getMinutes();
hour=d.getHours();
hrotation=(30*hour)+(minute/2);
mrotation=(6*minute)+(second/120);
srotation=6*second;
if(hour>12)
{
hour=hour-12;
}
if(hour<10)
{
hour="0"+hour;
}
if(minute<10)
{
minute="0"+minute;
}
if(second<10)
{
second="0"+second;
}
document.getElementById("digital").innerHTML=hour+':'+minute+':'+second;
document.getElementById("sec").style.transform=`rotate(${srotation}deg)`;
document.getElementById("min").style.transform=`rotate(${mrotation}deg)`;
document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
},1000);


