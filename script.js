
  // Mobile Menu Toggle
  document.querySelector('.menu').addEventListener('click', function() {
      document.querySelector('.navbar').classList.toggle('active');
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Text Animation with Typing Effect
  const textAnimation = document.querySelector('.text-animation span');
  const professions = ['Web Developer', 'UI/UX Designer', 'MERN Stack Dev', 'Programmer'];
  let currentProfession = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
      const currentText = professions[currentProfession];
      
      // Update text content based on typing or deleting
      if (!isDeleting) {
          textAnimation.textContent = currentText.substring(0, charIndex);
          charIndex++;
          
          if (charIndex > currentText.length) {
              isDeleting = true;
              setTimeout(typeEffect, 1000); // Pause before deleting
              return;
          }
      } else {
          textAnimation.textContent = currentText.substring(0, charIndex);
          charIndex--;
          
          if (charIndex < 0) {
              isDeleting = false;
              currentProfession = (currentProfession + 1) % professions.length;
              setTimeout(typeEffect, 500); // Pause before typing next profession
              return;
          }
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, speed);
  }

  // Start the typing effect
  typeEffect();

  // Dummy Form Submission
  document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('form');

      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent actual form submission
          alert('Message Sent Successfully!'); // Show dummy success message
          form.reset(); // Optional: clear the form
      });
  });

