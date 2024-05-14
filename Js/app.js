// Get all navigation links
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Add scroll event listener to window
window.addEventListener("scroll", function () {
  // Loop through each section
  document.querySelectorAll("section").forEach(function (section) {
    var sectionId = section.getAttribute("id");
    console.log(sectionId); // Log section ID
    var navLink = document.querySelector(
      '.navbar-nav .nav-link[href="#' + sectionId + '"]'
    );
    console.log(navLink); // Log corresponding navigation link
    if (isInViewport(section)) {
      // Remove 'active' class from all navigation items
      navLinks.forEach(function (link) {
        link.parentElement.classList.remove("active");
      });
      // Add 'active' class to parent element of corresponding navigation item
      if (navLink) {
        navLink.parentElement.classList.add("active");
      }
    }
  });
});

// Function to check if element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  console.log("Top:", rect.top, "Bottom:", rect.bottom); // Log top and bottom positions
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}
