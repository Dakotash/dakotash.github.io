document.getElementById("ice-cream-click").onclick =(event) => {
    console.log("I've been clicked")
    const txtDiv = document.getElementById("txt-div")
    //txtDiv.innerText +=`I love Ice Cream!`
    const newP = document.createElement("p")
    newP.innerText = `I love Ice Cream!`
    txtDiv.appendChild(newP)
    newP.id = "ice-cream-sentence"
}

document.getElementById("slider").onchange= (event) => {
    const number = event.target.value
    const newP = document.getElementById("p-slider-txt")
    newP.innerText = `I want ${number} ice creams`
}

document.getElementById("img-press").onclick =(event) => {
    const imgsrc = document.getElementById("preview")
    imgsrc.src = "./images/soft-serve-vanilla-ice-cream-recipe.jpg"
    const button = document.getElementById("img-press")
    button.style.display = "none"
}

/* Example
document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcome-p").innerHTML = `Welcome ${userName}!`;
}*/