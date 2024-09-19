document.addEventListener('DOMContentLoaded', (event) => {
    // Initial sentence to be spoken on page load
    const welcomeSentence = "Welcome to the virtual chemistry lab. Please select your preferred language.";
    
    // Function to start speech synthesis
    function speakSentence(sentence) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(sentence);
            // Optional: Set the voice, pitch, or rate if needed
            // utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google US English');
            // utterance.pitch = 1; // Normal pitch
            // utterance.rate = 1; // Normal rate
            // Handle end of speech
            utterance.onend = () => {
                console.log('Speech synthesis has finished.');
            };
            // Speak the sentence
            speechSynthesis.speak(utterance);
        } 
        else {
            console.warn('Speech synthesis is not supported in this browser.');
        }
    }

    // Call the function to speak the initial sentence
    speakSentence(welcomeSentence);

    // Event listeners for language buttons
    document.querySelector("#Hindi").addEventListener("click", hindi1);
    document.querySelector("#Eng").addEventListener("click", eng1);
    document.querySelector("#next").addEventListener("click", update);
});

const Emessage=[
"Make yourself familiar with the equipments by hovering over them. Now, press the Start button to initiate the reaction.",
"PART A : Click on a container to fill 600 ML beaker nearly full of water. Then, place the tripod over the burner and gauge on the top of tripod. Click Next",
"Place the beaker filled with water on the tripod and heat it to 85 °C by igniting the burner.",
"Clamp the test tube in the water bath. Turn on Analytical Balance and put weighing boat in the balance. Now, tare the balance and take 3 g of Napthalene. Click Next",
"Put napthalene in test tube and insert the thermometer into the test tube. When all the naphthalene has melted, stop heating. Finally, click on the thermometer to record temperature at the interval of 30 seconds. Click Next",
"PART B : Turn on the analytical balance and put weighing boat inside it. Record and tare the balance. Now, click on spatula to weigh 0.5g of sulphur powder. Click Next",
"Replace the test tube in the water bath and heat until all the naphthalene has melted. Add sulfur powder into the test tube. Click Next",
"After all the sulphur has been dissolved, turn off the burner. Now, record the temperature every 30 s until all the naphthalene has solidified. Click Next",
"! THANK YOU FOR VISITING THE WEBSITE !"
];

const Hmessage=[
"उपकरणों पर कर्सर ले जाकर उनसे स्वयं को परिचित कराएं। अब, प्रतिक्रिया आरंभ करने के लिए प्रारंभ बटन दबाएँ।",
"भाग ए : 600 एमएल बीकर को लगभग पानी से भरने के लिए एक कंटेनर पर क्लिक करें। फिर, तिपाई को बर्नर के ऊपर रखें और गेज को तिपाई के शीर्ष पर रखें। अगला पर क्लिक करें",
"पानी से भरे बीकर को तिपाई पर रखें और बर्नर जलाकर इसे 85°C तक गर्म करें।",
"टेस्ट ट्यूब को पानी के स्नान में दबाएँ। संतुलन चालू करें और वजन नाव को संतुलन में रखें। अब, संतुलन को तोड़ें और 3 ग्राम नेफ़थलीन लें। अगला पर क्लिक करें",
"अब, नेफ़थलीन को टेस्ट ट्यूब में डालें और थर्मामीटर को टेस्ट ट्यूब में डालें। जब सारा नेफ़थलीन पिघल जाए, गर्म करना बंद कर दें। अगला पर क्लिक करें",
"भाग बी : संतुलन चालू करें और उसके अंदर वजन मापने वाली नाव रखें। शेष राशि को रिकॉर्ड करें और तार-तार करें। अब, 0.5 ग्राम सल्फर पाउडर को तौलने के लिए स्पैटुला पर क्लिक करें। अगला पर क्लिक करें",
"टेस्ट ट्यूब को पानी के स्नान में बदलें और तब तक गर्म करें जब तक कि सारा नेफ़थलीन पिघल न जाए। टेस्ट ट्यूब में सल्फर पाउडर डालें। अगला पर क्लिक करें",
"सारा सल्फर घुल जाने के बाद, बर्नर बंद कर दें और टेस्ट ट्यूब को पानी के स्नान से बाहर निकाल लें। अब, हर 30 सेकंड में तापमान रिकॉर्ड करें जब तक कि सारा नेफ़थलीन जम न जाए। अगला पर क्लिक करें",
"! वेबसाइट पर आने के लिए धन्यवाद !"
];

var clampstand =  document.querySelector("#clampstand")
var funnel =          document.querySelector("#funnel")
var napthalene  = document.querySelector("#napthalene")
var scale =            document.querySelector("#scale")
var spatula =        document.querySelector("#spatula")
var stirrer =        document.querySelector("#stirrer")
var sulphur =        document.querySelector("#sulphur")
var thermometer= document.querySelector("#thermometer")
var tube =              document.querySelector("#tube")
var weight =          document.querySelector("#weight")
var next =              document.querySelector("#next")

var f = 0
var sample=0

function Start(){
    if (f==0){
        // Hide elements initially
        clampstand.style.visibility =           "hidden"
        funnel.style.visibility =               "hidden"
        napthalene.style.visibility =           "hidden"
        scale.style.visibility =                "hidden"
        spatula.style.visibility =              "hidden"
        stirrer.style.visibility =              "hidden"
        sulphur.style.visibility =              "hidden"
        thermometer.style.visibility =          "hidden"
        tube.style.visibility =                 "hidden"
        weight.style.visibility =               "hidden"

        beaker.style.left =                  "46.25vmax"
        gauge.style.left =                   "35.25vmax"
        gauge.style.top =                    "22.25vmax"
        tripod.style.left =                  "27.95vmax"
        water.style.left =                   "57.95vmax"
        next.innerText =                          "Next"

    }      
    // Start the water to beaker animation when water is clicked
    water.onclick = () => {
        moveWaterToBeaker();
        setTimeout(() => {
            waterfill.style.display="block";
        }, 500);
    };
}    

var hindibtn = document.querySelector("#Hindi");
var engbtn = document.querySelector("#Eng");
var langselector = document.querySelector("#lang_selector");
var headertext = document.querySelector("#heading");
var instructions = document.querySelector("#message");

let lang;
let counter = -1;

function hindi1(){
    document.getElementById('header').style.display='flex';
    lang="Hindi";
    langselector.style.visibility="hidden";
    headertext.innerText="हिमांक बिंदु अवनमन से आणविक भार का अनुमान";
    document.querySelector("button").innerText="प्रारंभ";
    gauge.style.zIndex = "1";
    update();
}

function eng1(){
    document.getElementById('header').style.display='flex';
    lang="Eng";
    langselector.style.visibility="hidden";
    headertext.innerText="ESTIMATION OF MOLECULAR WEIGHT FROM FREEZING POINT DEPRESIION";
    document.querySelector("button").innerText="Start";
    gauge.style.zIndex = "1";
    update();
}
     
function update(){
    if(lang==="Hindi"){
        instructions.innerText=Hmessage[counter];
    }
    else if(lang==="Eng"){
        instructions.innerText=Emessage[counter];
    }
    counter+=1;
    speech1();
}

function speech1(){
    speechSynthesis.cancel();
    // console.log(voices)
    let mes1;
    if(lang==="Hindi"){
        mes1=Hmessage[counter-1];
    }
    else if(lang=="Eng"){
        mes1=Emessage[counter-1];
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        const voices = speechSynthesis.getVoices();
        const voice1 = voices.find(voice => voice.name === 'Microsoft Kalpana - Hindi (India)');
        const voice = voices.find(voice => voice.name === 'Microsoft Zira - English (United States)');
        if(lang==="Hindi"){
            utterance.voice=voice1;
            // console.log(voices)
            utterance.lang='hi-IN';
            // console.log(utterance.voice)
        }
        else if(lang==="Eng"){
            utterance.voice=voice;
            utterance.lang='en-IN';
            // console.log(utterance.voice)
        }
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500);
}

