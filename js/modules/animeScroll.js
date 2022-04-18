export default function animeScroll() {
  const sections = document.querySelectorAll("[data-anime]");
  const windowHeight = window.innerHeight * 0.6;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowHeight;
    if (sectionTop < 0) {
      section.classList.add("ativo");
    }
  });

  window.addEventListener("scroll", animeScroll);
}
