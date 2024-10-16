// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ensure the section starts at the top of the viewport
            });
        }
    });
  });
  
  // Hover effect on scroll down button
  const scrollDown = document.querySelector('.scroll-down');
  scrollDown.addEventListener('mouseenter', function() {
    scrollDown.style.transform = 'scale(1.1)';
    scrollDown.style.transition = 'transform 0.3s ease'; // Adding smooth transition effect on hover
  });
  scrollDown.addEventListener('mouseleave', function() {
    scrollDown.style.transform = 'scale(1)';
  });
  
  // Hide spinner on load
  window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
  });
  