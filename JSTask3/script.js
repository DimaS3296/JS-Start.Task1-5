// N 1
const trafficlightsEL1 = document.querySelector('#trafficlightsEL');

function makeYellow1() {
    trafficlightsEL1.style.background = ('yellow');
    trafficlightsEL1.removeEventListener('click', makeYellow1);
    trafficlightsEL1.addEventListener('click', makeRed1);
}

function makeRed1() {
    trafficlightsEL1.style.background = ('Red');
    trafficlightsEL1.removeEventListener('click', makeRed1);
    trafficlightsEL1.addEventListener('click', makeGreen1);
}

function makeGreen1() {
    trafficlightsEL1.style.background = ('green');
    trafficlightsEL1.removeEventListener('click', makeGreen1);
    trafficlightsEL1.addEventListener('click', makeYellow1);
}

trafficlightsEL1.addEventListener('click', makeGreen1);
trafficlightsEL1.addEventListener('click', makeYellow1);
trafficlightsEL1.addEventListener('click', makeRed1);


// N 2
const trafficlightsEL = document.querySelector('#trafficlights');
const trafficlightsMD = document.querySelector('#trafficlightsMiddle');
const trafficlightsBTM = document.querySelector('#trafficlightsBottom');

function makeGreen() {
    trafficlightsEL.style.background = ('green');
    trafficlightsBTM.style.background = ('');
    trafficlightsMD.style.background = ('');
   trafficlightsMD.removeEventListener('click', makeGreen);
   trafficlightsBTM.removeEventListener('click', makeGreen);
   trafficlightsEL.removeEventListener('click', makeGreen); 
   trafficlightsEL.addEventListener('click', makeYellow);
   trafficlightsBTM.addEventListener('click', makeYellow);
    trafficlightsMD.addEventListener('click', makeYellow);
   }
   function makeYellow() {
    trafficlightsEL.style.background = ('');
    trafficlightsBTM.style.background = ('yellow');
    trafficlightsMD.style.background = ('');
   trafficlightsMD.removeEventListener('click', makeYellow);
   trafficlightsBTM.removeEventListener('click', makeYellow);
   trafficlightsEL.removeEventListener('click', makeYellow); 
   trafficlightsEL.addEventListener('click', makeRed);
   trafficlightsBTM.addEventListener('click', makeRed);
    trafficlightsMD.addEventListener('click', makeRed);
   }

   function makeRed() {
    trafficlightsEL.style.background = ('');
    trafficlightsBTM.style.background = ('');
    trafficlightsMD.style.background = ('red');
   trafficlightsMD.removeEventListener('click', makeRed);
   trafficlightsBTM.removeEventListener('click', makeRed);
   trafficlightsEL.removeEventListener('click', makeRed); 
   trafficlightsEL.addEventListener('click', makeGreen);
   trafficlightsBTM.addEventListener('click', makeGreen);
    trafficlightsMD.addEventListener('click', makeGreen);
   }

   trafficlightsEL.addEventListener('click', makeGreen);
   trafficlightsMD.addEventListener('click', makeYellow);
   trafficlightsBTM.addEventListener('click', makeRed);

   

   // N 3
const trafficlightsEL3 = document.querySelector('#trafficlightsC3');
const trafficlightsMD3 = document.querySelector('#trafficlightsMiddleC3');
const trafficlightsBTM3 = document.querySelector('#trafficlightsBottomC3');


function makeYellow3() {
    trafficlightsMD3.style.background = ('yellow');
    trafficlightsEL3.style.background = ('');
    trafficlightsBTM3.style.background = ('');
}

function makeGreen3() {
    trafficlightsBTM3.style.background = ('green');
    trafficlightsMD3.style.background = ('');
    trafficlightsEL3.style.background = ('');  
}

function makeRed3() {
    trafficlightsEL3.style.background = ('red');
    trafficlightsBTM3.style.background = ('');
    trafficlightsMD3.style.background = ('');
}

trafficlightsEL3.addEventListener('click', makeRed3);
trafficlightsBTM3.addEventListener('click', makeGreen3);
trafficlightsMD3.addEventListener('click', makeYellow3);
