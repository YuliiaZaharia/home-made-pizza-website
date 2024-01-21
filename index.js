document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo-image');
    const tagline = document.querySelector('.pizza-tagline');
    const button = document.querySelector('.button');
  
    gsap.from(logo, { opacity: 0, scale: 0, duration: 1, ease: 'power4.out', stagger: 0.5 });
    gsap.from(tagline, { opacity: 0, scale: 0, duration: 1, ease: 'power4.out', stagger: 0.5 });
    gsap.from(button, { opacity: 0, scale: 0, duration: 1, ease: 'power4.out', stagger: 0.5 });
  
    gsap.to([tagline, button], {
      scale: 1.1,
      opacity: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.out',
      delay: 1,
    });
  });
  
  
  