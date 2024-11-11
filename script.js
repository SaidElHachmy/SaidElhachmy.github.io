// JavaScript function to navigate to a specific page
function navigateTo(page) {
    window.location.href = page;
};
// Optional JavaScript for smooth scrolling or other effects
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = target;
        }
    });
});
// Optional JavaScript for smooth scrolling or other effects
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = target;
        }
    });
});
// Optional JavaScript for smooth scrolling or other effects
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = target;
        }
    });
});
// Optional JavaScript for form interaction (smooth scroll for better user experience)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = target;
        }
    });
});