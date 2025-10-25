// Declaring variables ------------------------------

const svg = document.querySelector("svg");
const body = document.querySelector("body");
const tooltip = document.querySelector(".tooltip h1");
const message = document.querySelector(".tooltip h2");
let attemptNumber = 0;

// Functions ------------------------------

// Reset
function reset(){
  gsap.set("#fingerprint-cover path, #face path", {drawSVG: "0%"});
  gsap.set("#fingerprint-base path", {opacity: 1});
  attemptNumber = 0;
}

// First Attempt
function firstAttempt(){
  gsap.to("#fingerprint-cover path", 1, {drawSVG: "50%"});
  attemptNumber++;
}

// Second Attempt
function secondAttempt(){
  gsap.to("#fingerprint-cover path", 1, {drawSVG: "80%"});
  attemptNumber++;
}

// Third Attempt
function thirdAttempt(){
  gsap.to("#fingerprint-cover path", 1, {drawSVG: "100%"});
  attemptNumber++;
}

// Complete
function complete(){
  const complete_tl = gsap.timeline({defaults: {ease: "power3.out"}});
    complete_tl.to("#fingerprint-cover path", 1.5, {drawSVG: "102% 102%"}, 1)
               .to("#fingerprint-base path", 0.5, {opacity: 0}, 1)
               .to("#smile", 1, {drawSVG: "45% 55%"}, 1)
               .to("#head, #lefteye, #righteye", 1.5, {drawSVG: "100%"}, 1.25)
               .to("#fingerprint-cover path, #fingerprint-base path", 0.5, {opacity: 0}, 1.7)
               .to("#lefteye, #righteye, #smile", {y: -12}, 2.5)
               .to(tooltip, {y: -12, opacity: 0}, 2.5)
               .to(message, {y: -12, opacity: 1}, 2.5)
               .to("#lefteye, #righteye, #smile", 1.5, {y: 0}, 4);
  body.style.background = "#F5F7FF";
}

// Interactions ------------------------------

reset();

svg.addEventListener("click", () => {
  if(attemptNumber == 0){
    firstAttempt();
  } else if(attemptNumber == 1){
    secondAttempt();
  } else if(attemptNumber == 2){
    thirdAttempt();
    complete();
  } 
});