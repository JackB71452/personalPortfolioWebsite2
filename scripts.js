document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'fadeIn'
  const fadeElements = document.querySelectorAll('.fadeIn');

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.4 // Trigger when 40% of the element is visible
  };

  // Callback function for the Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add class to start animation
      } else {
        entry.target.classList.remove('active'); // Remove class to reset animation
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe each element
  fadeElements.forEach(element => {
    observer.observe(element);
  });
});

  // script.js
  document.addEventListener('scroll', function() {
    const heroText = document.querySelector('.textBubble');
    const hero = document.querySelector('.Home');
    const bar = document.querySelector('.navBar');
    const scrollPosition = window.scrollY; // Assuming you are getting the scroll position
    const scaleValue = 1+scrollPosition/1000 // Define this as needed
    const arrowContainer = document.querySelector('.arrow-container');
    if (scrollPosition < 20) {
      arrowContainer.style.opacity = '1';
      arrowContainer.style.visibility = 'visible'; // Keep its position fixed
  } else {
      arrowContainer.style.opacity = '0';
      arrowContainer.style.visibility = 'hidden'; // Keep its position fixed
  }
    hero.style.transform = `scale(${scaleValue})`;
if (scrollPosition < 300) {
  console.log(scaleValue)
  hero.style.opacity = Math.max(0, 1 - (scrollPosition / 500));
  heroText.style.opacity = 0;
  bar.style.opacity = 0;
} 

else if (scrollPosition <= 700) {
  heroText.style.opacity = Math.max(0, (scrollPosition - 300) / 250);
  heroText.style.transform = `translateY(-${(scrollPosition - 300) / 8}%)`;
  hero.style.opacity = Math.max(0, 1 - (300 / 500));
  bar.style.opacity = 0;
} 

else if (scrollPosition >= 700 && scrollPosition <= 1500) {
  heroText.style.transform = `translateY(-${(400) / 8}%)`;
  heroText.style.opacity = Math.max(0, 1 - (scrollPosition - 700) / 500);
  hero.style.opacity = Math.max(0, 1 - (scrollPosition - 700) / 500 - (300 / 500));
  bar.style.opacity = Math.max(0, (scrollPosition-700)/500)
} 

else {
  heroText.style.opacity = Math.max(0, 1 - (scrollPosition - 700) / 500);
  hero.style.opacity = Math.max(0, 1 - (scrollPosition - 700) / 500 - (300 / 500));
}
    
    console.log(scrollPosition)
    
});


