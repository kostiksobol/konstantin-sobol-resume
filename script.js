document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".highlight-card, .project-card, .skill-row, .experience-card, .hero-card");
const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }
  },
  { threshold: 0.12 }
);

for (const card of cards) {
  card.classList.add("reveal");
  observer.observe(card);
}
