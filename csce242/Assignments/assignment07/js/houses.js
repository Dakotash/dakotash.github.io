document.getElementById("drawButton").addEventListener("click", function () {
    const output = document.getElementById("output");
    output.innerHTML = ""; 
  
    for (let i = 0; i < 6; i++) {
      const house = document.createElement("div");
      house.className = "house";
      output.appendChild(house);
    }
    
// This code is to show the stick person and exercise button
    document.getElementById("stick-person").style.display = "block";
    document.getElementById("exercise-button").style.display = "block";
    
    const stickPersonImg = document.querySelector("#stick-person img");
    stickPersonImg.classList.remove("hidden");
});