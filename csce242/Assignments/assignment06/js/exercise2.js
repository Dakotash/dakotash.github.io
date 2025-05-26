// Exercise 2functionality
const artButtons = document.querySelectorAll('.art-btn');
const artDisplay = document.getElementById('art-display');

function createArt(shape) {
    artDisplay.innerHTML = ''; 
    
    if (shape === 'moon') {
        const moon = document.createElement('div');
        moon.className = 'moon';
        artDisplay.appendChild(moon);
    } else if (shape === 'star') {
        const star = document.createElement('div');
        star.className = 'star';
        artDisplay.appendChild(star);
    } else if (shape === 'cloud') {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        artDisplay.appendChild(cloud);
    }
}


artButtons.forEach(button => {
    button.addEventListener('click', function() {
        const shape = this.getAttribute('data-shape');
        createArt(shape);
    });
});