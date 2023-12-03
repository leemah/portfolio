// Select the element with the class 'menu-icon' and store it in the 'menu' variable
let menu = document.querySelector('.menu-icon');

// When the 'menu' element is clicked, toggle the 'move' class on/off
menu.onclick = () => {
    menu.classList.toggle("move")
};

// Reviews Swiper
// Initialize a Swiper instance for the element with the class 'reviews-content'
var swiper = new Swiper(".reviews-content", {
    // Set space between slides to 30 pixels
    spaceBetween: 30,
    // Center the currently active slide
    centeredSlides: true,
    // Autoplay the slides with a delay of 5000ms (5 seconds)
    autoplay: {
      delay: 5000,
      // Continue autoplay even if the user interacts with the swiper
      disableOnInteraction: false,
    },
    // Set up pagination for the swiper
    pagination: {
      // Use the element with the class 'swiper-pagination' for pagination
      el: ".swiper-pagination",
      // Allow clickable pagination bullets
      clickable: true,
    },
    // Additional options (navigation buttons) that are commented out
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
});
