
document.querySelectorAll('.course-boxes').forEach(button => {
    button.addEventListener('click', function() {
        const course = this.getAttribute('data-course');
        // Simulate redirection to a course detail page
        window.location.href = `course-details.html?course=${course}`;
    });
});



const svgButtons = document.querySelectorAll('.svg-btn');  
const curiDetails = document.querySelectorAll('.curi-details');

svgButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const details = curiDetails[index];
    if (details.style.display === 'none' || !details.style.display) {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});




