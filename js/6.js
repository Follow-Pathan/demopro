const scale=document.getElementById("scale")
const spatula = document.getElementById("spatula");
const spatula_ = document.getElementById("spatula_");
const weight = document.getElementById("weight");

var weightMoved=false;
var spatulaMoved=false;
var scaleMoved=false;

scale.addEventListener("click",function(){
    if(!scaleMoved){
        scale.src="/images/Analytical Balance On.png";
        scaleMoved=true;
    }
    weight.addEventListener("click", function(){
        if(!weightMoved){
        // Apply the transformation to move the "weight" to the "scale"
        weight.style.transform = "translate(-33.85vmax, -2.5vmax)";
        setTimeout(function(){
            scale.src="/images/Analytical Balance Open.png"
        },1200);
        setTimeout(function(){
            scale.src="/images/Analytical Balance_dish.png"
        },2500);
        weightMoved=true; /* Adjust values as needed */
        }
        scale.addEventListener("click",function(){
            if(weightMoved){
                scale.src="/images/Analytical Balance On.png";
            }
            spatula.addEventListener("click",function(){
                if(weightMoved){
                    spatula.style.transform="translate(19vmax,-9.5vmax)";
                    setTimeout(function(){
                        sulphur.style.display="none";
                        sulphur_.style.display="block";
                        cap.style.transform="translate(-2.5vmax,-1vmax)rotate(-45deg)";
                    }, 1500);
                    setTimeout(function(){
                        spatula.style.transform="translate(16vmax,-5vmax)rotate(-45deg)";
                    }, 2500);
                    setTimeout(function(){
                        spatula.src="/images/Spatula2.png";
                        spatula.style.transform="translate(19vmax,-9.5vmax)rotate(0)";
                    }, 3500);
                    setTimeout(function(){
                        spatula.style.transform="translate(-27vmax,-3.5vmax)";
                        cap.style.transform="translate(0)rotate(0)";
                    }, 5500);
                    setTimeout(function(){
                        scale.src="/images/Analytical Balance_0.5g.png";
                        weight.src="/images/Weighing Boat1.png";
                        spatula.src="/images/Spatula.png";
                        spatula.style.transform="translate(0,0)";
                    }, 8000);
                }
            });
        });
    });
});