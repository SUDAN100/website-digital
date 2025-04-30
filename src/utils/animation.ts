
export const setupAnimation = () => {
  const animatedSections = document.querySelectorAll('.animated-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedSections.forEach(section => {
    observer.observe(section);
  });
};
