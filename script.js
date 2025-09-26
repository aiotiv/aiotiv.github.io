// Puoi aggiungere animazioni “on-scroll” se vuoi
// Esempio semplice: cambia opacità delle sezioni quando entrano in vista

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);
sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});
