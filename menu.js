
function toggleMenu(sectionId) {
  const sections = document.querySelectorAll(".menu-section");
  sections.forEach(section => {
    section.classList.toggle("hidden", section.id !== sectionId);
  });
}

