// Menu hamburguer
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

// Stories
class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
    this.positionItems.forEach((item) => item.classList.remove("active"));
    this.positionItems[index].classList.add("active");
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.next);
    prevBtn.addEventListener("click", this.prev);
  }

  addPositionItems() {
    this.items.forEach(() => (this.position.innerHTML += `<span></span>`));
    this.positionItems = Array.from(this.position.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll(".slide-items > *");
    this.position = this.slide.querySelector(".slide-position");
    this.addPositionItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories("slide");
