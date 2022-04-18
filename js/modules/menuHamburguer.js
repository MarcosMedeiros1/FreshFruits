export default function menuHamburguer() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
    const active = navList.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
