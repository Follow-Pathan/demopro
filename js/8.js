const tube_=document.getElementById("tube_")
const tripod=document.getElementById("tripod")
const clampstand=document.getElementById("clampstand");

var standMoved=false;

tripod.addEventListener("click",function(){
    flame.style.display="none"
    clampstand.addEventListener("click",function(){
        if(!standMoved){
            clampstand.style.transform="translate(30vmax,2.5vmax)";
            tube_.style.transform="translate(30vmax,2.5vmax)";
            setTimeout(function(){
                thermometer.style.transform="translate(0,-12vmax)"
            }, 2000);
            setTimeout(function(){
                thermometer.style.transform="translate(-5vmax,-7.5vmax)rotate(-90deg)"
            }, 4000);
            standMoved=true;
            clampstand.addEventListener("click",function(){
                if(standMoved){
                    readings.style.display="block"
                setTimeout(function(){
                    readings.style.display="none"
                },3000);
                }
            });
        }
   });
});