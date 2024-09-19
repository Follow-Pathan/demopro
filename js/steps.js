const water = document.getElementById("water");
const tripod = document.getElementById("tripod");
const gauge = document.getElementById("gauge");
const waterfill = document.getElementById("waterfill");
const burner = document.getElementById("burner");
const beaker = document.getElementById("beaker");

const gaugeToTripodTargetX = tripod.offsetLeft + tripod.offsetWidth / 2 - gauge.offsetWidth / 2;
const gaugeToTripodTargetY = tripod.offsetTop - gauge.offsetHeight; 
const waterToBeakerTargetX = beaker.offsetLeft + beaker.offsetWidth*1.75 - water.offsetWidth/2;
const waterToBeakerTargetY = beaker.offsetTop + beaker.offsetHeight / 5 - water.offsetHeight;
const tripodToBurnerTargetX = burner.offsetLeft + burner.offsetWidth*1.99 - tripod.offsetWidth*1.25; // Adjust as needed
const tripodToBurnerTargetY = burner.offsetTop + burner.offsetHeight/5 - tripod.offsetHeight;

// Define animation properties for water to beaker
const initialUpwardMovement = 50;
const waterToBeakerDuration = 2000; // Adjust as needed (in milliseconds)
const waterToBeakerSteps = 50; // Increase this number for slower animation
const waterToBeakerStepX = (waterToBeakerTargetX - water.offsetLeft) / waterToBeakerSteps;
const waterToBeakerStepY = (waterToBeakerTargetY - water.offsetTop) / initialUpwardMovement;

// Define animation properties for tripod to burner
const tripodToBurnerDuration = 2000; // Adjust as needed (in milliseconds)
const tripodToBurnerSteps = 50; // Increase this number for slower animation
const tripodToBurnerStepX = (tripodToBurnerTargetX - tripod.offsetLeft) / tripodToBurnerSteps;
const tripodToBurnerStepY = (tripodToBurnerTargetY - tripod.offsetTop) / initialUpwardMovement;

// Define animation properties for gauge to tripod
const gaugeToTripodDuration = 2000; // Adjust as needed (in milliseconds)
const gaugeToTripodSteps = 50; // Increase this number for slower animation
const gaugeToTripodStepX = (gaugeToTripodTargetX - gauge.offsetLeft) / gaugeToTripodSteps;
const gaugeToTripodStepY = (gaugeToTripodTargetY - gauge.offsetTop) / initialUpwardMovement;

let waterStepCount = 0;
let tripodStepCount = 0;
let gaugeStepCount = 0;

// Function to move water to the beaker
function moveWaterToBeaker() {
    if (waterStepCount < waterToBeakerSteps) {
        // Update the position of the water element
        water.style.left = water.offsetLeft - waterToBeakerStepX/11 + "px";
        water.style.top = water.offsetTop + waterToBeakerStepY + "px";
        waterStepCount++;
        // Rotate the water element (simulate tilting left)
        const rotationAngle = (waterStepCount / waterToBeakerSteps) * -65; // 65 degrees tilt
        water.style.transform = `rotate(${rotationAngle}deg)`;
        // Call the function recursively for the next step
        requestAnimationFrame(moveWaterToBeaker);
        setTimeout(() => {
            // Reset the water position and rotation
            water.style.left = "57.95vmax";
            water.style.top = "12.5vmax";
            water.style.transform = "rotate(0deg)";
        }, 1500);
        // After water to beaker animation completes, enable tripod click
        tripod.onclick = () => {
            setTimeout(() => {
            moveTripodToBurner();
            });
        };
    }
}

// Function to move tripod to the burner
function moveTripodToBurner() {
    if (tripodStepCount < tripodToBurnerSteps) {
        // Update the position of the tripod element
        tripod.style.left = tripod.offsetLeft + tripodToBurnerStepX/1.43 + "px";
        tripod.style.top = tripod.offsetTop + tripodToBurnerStepY + "px";
        tripodStepCount++;

        // Call the function recursively for the next step
        requestAnimationFrame(moveTripodToBurner);
        setTimeout(() => {
            // Reset the water position and rotation
            tripod.style.left = "18.75vmax";
            tripod.style.top = "16.5vmax";
        }, 2000);
        // After tripod to burner animation completes, enable gauge click
        gauge.onclick = () => {
            setTimeout(() => {
                moveGaugeToTripod();
            });
        };
    }
}

// Function to move gauge to tripod
function moveGaugeToTripod() {
    if (gaugeStepCount < gaugeToTripodSteps) {
        // Update the position of the gauge element
        gauge.style.left = gauge.offsetLeft + gaugeToTripodStepX + "px";
        gauge.style.top = gauge.offsetTop + gaugeToTripodStepY + "px";
        gaugeStepCount++;

        // Call the function recursively for the next step
        requestAnimationFrame(moveGaugeToTripod);
        setTimeout(() => {
            // Reset the water position and rotation
            gauge.style.left = "17.25vmax";
            gauge.style.top = "16.25vmax";
            gauge.style.zIndex = "1";
        },2500);
    }
}
