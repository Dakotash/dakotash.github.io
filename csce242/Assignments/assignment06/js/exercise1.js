// Navigation functionality
const toggle = document.getElementById('toggle');
const navUl = document.getElementById('nav-ul');
const ex1Link = document.getElementById('ex1-link');
const ex2Link = document.getElementById('ex2-link');
const ex1Section = document.getElementById('ex1');
const ex2Section = document.getElementById('ex2');

// Toggle menu functionality
toggle.addEventListener('click', function() {
    if (navUl.classList.contains('hide-small')) {
        navUl.classList.remove('hide-small');
        toggle.classList.add('triangle-up');
    } else {
        navUl.classList.add('hide-small');
        toggle.classList.remove('triangle-up');
    }
});

// Exercise navigation
ex1Link.addEventListener('click', function(e) {
    e.preventDefault();
    ex1Section.classList.remove('hide-col');
    ex2Section.classList.add('hide-col');
});

ex2Link.addEventListener('click', function(e) {
    e.preventDefault();
    ex2Section.classList.remove('hide-col');
    ex1Section.classList.add('hide-col');
});

// Exercise 1: Speeding functionality
const slider = document.getElementById('slider');
const speedDisplay = document.getElementById('speed-display');
const goBtn = document.getElementById('go-btn');
const bike = document.getElementById('bike');
const track = document.getElementById('track');

let isAnimating = false;

slider.addEventListener('input', function() {
    const sliderValue = parseInt(this.value);
    const trackWidth = track.offsetWidth - 70; // Account for bike width
    const position = (sliderValue - 1) / 9 * trackWidth + 10; // Scale from 1-10 to track width
    
    bike.style.left = position + 'px';
    speedDisplay.textContent = `Position: ${sliderValue}`;
});

goBtn.addEventListener('click', function() {
    if (isAnimating) return;
    
    isAnimating = true;
    const speed = parseInt(slider.value);
    const trackWidth = track.offsetWidth - 70; // Account for bike width
    const duration = (11 - speed) * 0.5; // Faster speed = shorter duration
    
    // Reset bike position
    bike.style.left = '10px';
    bike.style.transition = `left ${duration}s linear`;
    
    // Animate bike
    setTimeout(() => {
        bike.style.left = trackWidth + 'px';
    }, 50);
    
    // Reset after animation and update slider
    setTimeout(() => {
        bike.style.transition = 'left 0.3s ease';
        bike.style.left = '10px';
        slider.value = 1;
        speedDisplay.textContent = 'Position: 1';
        setTimeout(() => {
            isAnimating = false;
        }, 100);
    }, duration * 1000 + 100);
});

// Show Exercise 1 by default
ex1Section.classList.remove('hide-col');