let current = 1;
let intervalId = null;
const stickPersonImg= document.querySelector("#stick-person img");

document.getElementById("exerciseBtn").addEventListener("click", function () {
    if (intervalId != null){
        return;
    }

    /*for(let i = 1; i < 7; i++){
        setTimeout(() => {
          stickPersonImg.src = "images/" + i + ".png"
        },1000) 
    }*/

    intervalId= setInterval(()=>{
        current++;
        if (current > 6) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }
         stickPersonImg.src = "images/" + current + ".png"
    },500)

});
