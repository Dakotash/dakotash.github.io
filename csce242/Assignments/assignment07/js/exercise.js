let exerciseInterval;
let currentStretch = 1;

document.getElementById("exerciseBtn").addEventListener("click", function () {
    currentStretch = 1;
    const stickPersonImg = document.querySelector("#stick-person img");
    stickPersonImg.src = "images/" + currentStretch + ".png";
    
    if (exerciseInterval) {
        clearInterval(exerciseInterval);
    }
    

    exerciseInterval = setInterval(function() {
        currentStretch++; 
        if (currentStretch <= 6) {
            stickPersonImg.src = "images/" + currentStretch + ".png";
        } else {
            clearInterval(exerciseInterval);
            exerciseInterval = null;
        }
    }, 1000); 
});