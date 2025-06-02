//References:
//https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
//(youTube) JavaScript - How to Create a Responsive Hamburger Menu with HTML, CSS, & JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
    
    if (!toggle) {
        const toggleButton = document.createElement('div');
        toggleButton.id = 'nav-toggle';
        toggleButton.className = 'nav-toggle';
        toggleButton.innerHTML = `
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;

        const header = document.querySelector('.header');
        header.appendChild(toggleButton);
    }
    
   
    const toggleButton = document.getElementById('nav-toggle');
    

    toggleButton.addEventListener('click', function() {
        if (navUl.classList.contains('nav-open')) {
            navUl.classList.remove('nav-open');
            toggleButton.classList.remove('active');
        } else {
            navUl.classList.add('nav-open');
            toggleButton.classList.add('active');
        }
    });
    
 
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('nav-open');
            toggleButton.classList.remove('active');
        });
    });
    

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navUl.contains(event.target);
        const isClickOnToggle = toggleButton.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navUl.classList.contains('nav-open')) {
            navUl.classList.remove('nav-open');
            toggleButton.classList.remove('active');
        }
    });
    

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            navUl.classList.remove('nav-open');
            toggleButton.classList.remove('active');
        }
    });
});