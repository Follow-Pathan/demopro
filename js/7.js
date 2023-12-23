const weight1 = document.getElementById("weight1");
const thermometer = document.getElementById("thermometer");
const tripod=document.getElementById("tripod")
const clampstand=document.getElementById("clampstand");
const tube1=document.getElementById("tube1");
const flame=document.getElementById("flame");
const stirrer = document.getElementById("stirrer");

var isStirring = false;
var weight1Moved=false;
var clampstandMoved=false;
var standMoved=false;

clampstand.addEventListener("click",function(){
    if(!clampstandMoved){
        clampstand.style.transform="translate(-30vmax,-2.5vmax)";
        tube1.style.transform="translate(-30vmax,-2.5vmax)";
        clampstandMoved=true;
    }
    tripod.addEventListener("click",function(){
        if(clampstandMoved){
            flame.style.display="block";
            setTimeout(function(){
                tube1.src="/images/Test Tube_.png";
            },5000);
        }
        weight1.addEventListener("click",function(){
            if(!weight1Moved){
                weight1.style.transform="translate(-8.75vmax,-13vmax)";
                scale4.style.display="none"
                scale_.style.display="block"
                setTimeout(function(){
                    weight1.style.transform+="rotate(-45deg)";
                },1500);
                setTimeout(function() {
                    weight1.style.transform="translate(25vmax,2.5vmax)";
                    weight1.src="/images/Weighing boat.png"
                },3500);
                weight1Moved=true;
            }
        });
    });
});