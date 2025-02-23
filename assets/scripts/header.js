function activateScrollSpy(navLinks, sections, threshold = 0.2) {
  if (!navLinks || !sections) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: threshold,
      rootMargin: "-50px 0px -50px 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}
// close header on click outside
function closeHeaderOnClickOutside() {
  const burgerCheckbox = document.querySelector(".burger-menu__checkbox");
  const header = document.querySelector(".header");
  const navigation = document.querySelector(".navigation");

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (burgerCheckbox.checked && !header.contains(e.target)) {
      burgerCheckbox.checked = false;
    }
  });

  navigation.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
export { activateScrollSpy, closeHeaderOnClickOutside };
