let a=new Date();
let d=a.getDate();
let h=a.getHours();
let m=a.getMinutes();
let s=a.getSeconds();
let sec=document.getElementById("second");
let min=document.getElementById("minute");
let hr=document.getElementById("hour");
let dt=document.getElementById("date");
let time=()=>{
  s=(s+1)%60;
  if(s==0){
    m=(m+1)%60;
  }
  if(m==0){
    h=(h+1)%24;
  }
  if(h==0){
    d=(d+1)%30;
  }
  sec.innerHTML=s;
  min.innerHTML=m;
  hr.innerHTML=h;
  dt.innerHTML=d;
}
setInterval(time,1000);