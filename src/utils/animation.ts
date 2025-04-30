
export const setupAnimation = () => {
  const animatedSections = document.querySelectorAll('.animated-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay for a staggered animation effect
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  animatedSections.forEach(section => {
    observer.observe(section);
  });
};
