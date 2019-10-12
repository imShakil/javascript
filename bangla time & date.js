var dayName = new Array ("রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার")

var monName = new Array ("জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "অাগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর")
var dv = new Array ("০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "১১", "১২", "১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯", "২০", "২১", "২৩", "২৪", "২৫", "২৬", "২৭", "২৮", "২৯", "৩০", "৩১")

var year= new Array ("২০১৬", "২০১৭", "২০১৮", "২০১৯", "২০২০", "২০২১", "২০২২", "২০২৩", "২০২৪", "২০২৫", "২০২৬", "২০২৭", "২০২৮", "২০২৯", "২০৩০", "২০৩১", "২০৩২", "২০৩৩", "২০৩৪", "২০৩৫", "২০৩৬", "২০৩৭", "২০৩৮", "২০৩৯", "২০৪০", "২০৪১", "২০৪২", "২০৪৩", "২০৪৪", "২০৪৫", "২০৪৬", "২০৪৭", "২০৪৮", "২০৪৯")
 
var now = new Date

document.write("রোজ " + dayName[now.getDay()] + ", " + " "+dv[now.getDate()] +" "+monName[now.getMonth()]+" "+ year[now.getYear()-116]+" বঙ্গাব্দ") 

var time = new Array ("০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "১১", "১২")

var atoj = new Date

atoj1 = atoj.getHours();
atoj2 = atoj.getMinutes();

if(atoj1>=4 && atoj1 <=5){atoj4=" ভোর"}
else if(atoj1>=6 && atoj1 <= 11){atoj4=" সকাল"} 
else if(atoj1 ==12){atoj4=" দুপুর";atoj1=12} 
else if(atoj1 >= 13 && atoj1<=14){atoj4=" দুপুর";atoj1-=12}
else if(atoj1 >=15 && atoj1<=18) {atoj4=" বিকাল"; atoj1-=12}
else if(atoj1>=19 && atoj1<=23) {atoj4=" রাত"; atoj1-=12}
else if(atoj1>=1 && atoj1<=3) {atoj4=" রাত"}
else if(atoj1==0) {atoj4=" রাত"; atoj1=12}

if(atoj2>=0 && atoj2<=9){atoj3=0}
else if(atoj2>=10 && atoj2<=19) {atoj3=1}
else if(atoj2>=20 && atoj<=29) {atoj3=2}
else if(atoj2>=30 && atoj2<=39) {atoj3=3}
else if(atoj2>=40 && atoj2<=49) {atoj3=4}
else if(atoj2>=50 && atoj2<=59) {atoj3=5}

document.write("এখন সময় - "+atoj4+" "+time[atoj1]+"টা বেঁজে "+time[atoj3]+""+time[(atoj2%10)]+" মিনিট")
