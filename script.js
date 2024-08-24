// JavaScript function to switch pages
function showPage(pageId) {
    var pages = document.querySelectorAll('.section');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
// Display the home page by default
window.onload = function() {
    showPage('home');
};
//JavaScript function to display the corresponding section when a navbar link is clicked
function showPage(pageId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';

    // Highlight the active navbar link
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.navbar a[onclick="showPage('${pageId}')"]`).classList.add('active');
}

// Smooth scrolling for links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add smooth scrolling to navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        smoothScroll(`#${targetPage}`);
        showPage(targetPage);
    });
});

// Initially display the home page
showPage('home');
