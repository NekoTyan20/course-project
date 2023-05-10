const filterButtons = document.querySelectorAll(".list-button__button");
const cards = document.querySelectorAll(".card-set-portfolio .card-set-portfolio__item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("current");
    });
    button.classList.add("current");

    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const cardFilter = card.getAttribute("data-filter");
      if (filter === "all" || filter === cardFilter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});