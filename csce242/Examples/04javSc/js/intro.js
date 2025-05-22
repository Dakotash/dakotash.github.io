/* when button clicked write to a paragraph */


/* function writeParagraph() {
    console.log("Hello Everyone");
} 

const btnWrite = document.getElementById("btn-write").onclick = writeParagraph;
btnWrite.onclick = writeParagraph; */


/* const writeParagraph = () => {
    console.log("Hello Everyone");
};

document.getElementById("btn-write").onclick = writeParagraph; */


/* --- Button is click execute this function --- */
/*document.getElementById("btn-write").onclick = () => {
    console.log("Hello world");
};*/


/*
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    /* change the button text to say done 
    document.getElementById("btn-write").innerHTML = "Done!!";

};
*/


document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    event.target.innerHTML = "done";

};

document.getElementById("btn-start").onclick = (event) => {
    document.getElementById("starting-p").innerHTML += "Starting....";

    event.target.innerHTML = "Started";

};

document.getElementById("btn-end").onclick = (event) => {
    document.getElementById("ending-p").innerHTML += "Ending....";

    event.target.innerHTML = "Ended";

};


/* Say hello */

/* return what the user is typing */
/*
document.getElementById("txt-name").onkeyup = (event) => {
    console.log(event.target.value)
}
*/

document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcome-p").innerHTML = `Welcome ${userName}!`;
}