const toggle = document.querySelector('.s-header__menu-toggle');
const nav = document.querySelector('.s-header__nav');
const menuLinks = document.querySelectorAll('.s-header__menu-links a');
const sections = document.querySelectorAll('section, div[id]'); // if you use divs too



window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
  preloader.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    preloader.remove();
  }, 500); // Remove from DOM after fadeout
});


toggle.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
    }
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - 100) { // Changed from - sectionHeight/3 to -100
      currentSection = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.parentElement.classList.remove('current');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.parentElement.classList.add('current');
    }
  });
});



  const words = ["Telecomm Engineer", "IT Support", "Security System Technician","Python Programmer","Cybersecurity Enthusiast", "Network Technician", "Web Developer"];
  const textElement = document.querySelector(".typewrite-text");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    textElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 120);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 80);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 800); // pause between words
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
  });

  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();
