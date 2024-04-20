

const sections = document.querySelectorAll('.section')
// Function to set active link
function setActiveLink(linkId) {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + linkId) {
            link.classList.add('active-link');
        }
    });
}

// Function to handle link clicks
function handleLinkClick(event) {
    var linkId = event.target.getAttribute('href').substring(1); // Remove '#' from href
    setActiveLink(linkId);
    localStorage.setItem('activeLink', linkId);
}

// Event listeners for link clicks
var links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// Function to update active link based on stored value
function updateActiveLink() {
    var storedLink = localStorage.getItem('activeLink');
    if (storedLink) {
        setActiveLink(storedLink);
    }
}

// Initial call to update active link on page load
updateActiveLink();


// dark and light mode
document.getElementById('content').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});


// creating hamburger menu item for mobile devices and tablet devices 

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open-nav');
}); // Add closing parenthesis and semicolon

// on click on nav link and scroll to the section and hide nav again 
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open-nav');
}); // Add closing parenthesis and semicolon



// on scroll to animated section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Define animation for each section
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        var scene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8, // Adjust as needed
            reverse: false // Animation only happens once
        })
        .setClassToggle(section, 'show') // Add 'show' class to section
        .addTo(controller);
    });
});