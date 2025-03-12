
function toggleMenu(sectionId) {
  const sections = document.querySelectorAll(".menu-section");
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}
