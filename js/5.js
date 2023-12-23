const thermometer = document.getElementById("thermometer");
const clampstand=document.getElementById("clampstand");
const readings=document.getElementById("readings");

var clampstandMoved=false;

clampstand.addEventListener("click",function(){
    if(!clampstandMoved){
        readings.style.display="block"
    setTimeout(function(){
        readings.style.display="none"
    },3000);
    }
});