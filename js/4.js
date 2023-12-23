const weight_ = document.getElementById("weight_");
const thermometer = document.getElementById("thermometer");
const tripod=document.getElementById("tripod")
const clampstand=document.getElementById("clampstand");
const tube=document.getElementById("tube");
const timer=document.getElementById("timer");

var weight_Moved=false;
var thermometerMoved=false;
var standMoved=false;

weight_.addEventListener("click",function(){
    if(!weight_Moved){
        weight_.style.transform="translate(-14vmax,-12vmax)";
        scale3.style.display="none"
        scale_.style.display="block"
        setTimeout(function(){
            weight_.style.transform+="rotate(-45deg)";
        },1500);
        setTimeout(function() {
            weight_.style.transform="translate(25vmax,3vmax)";
            weight_.src="/images/Weighing boat.png"
        },3500);
        weight_Moved=true;
    }
    thermometer.addEventListener("click",function(){
        if(weight_Moved){
            thermometer.style.transform="translate(-34vmax,-15vmax)";
            setTimeout(function() {
                thermometer.style.transform+="rotate(-90deg)";
                thermometer.style.transform+="translate(-5.5vmax,-5.5vmax)";
            },2000);
            thermometerMoved=true;
        }
        tripod.addEventListener("click",function(){
            flame.style.display="none"
            timer.style.display="none";
            clampstand.addEventListener("click",function(){
                if(thermometerMoved){
                    tube.src="/images/Test Tube_.png";
                clampstand.style.transform="translate(30vmax,2.5vmax)";
                tube.style.transform="translate(30vmax,2.5vmax)";
                thermometer.style.transform+="translate(-2.75vmax,30vmax)";
                thermometerMoved=false;
                }
            });
        });
    });
});