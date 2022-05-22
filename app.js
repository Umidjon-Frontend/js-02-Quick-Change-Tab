const quick__input = document.querySelector(".quick__input");
const quick__btn = document.querySelector(".quick__btn");
const quick__link = document.querySelectorAll(".quick__link");
const quick__content = document.querySelector(".quick__content");

quick__link.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let contentText = e.target.innerHTML;
    removeClassActive();
    item.classList.add("active");
    quick__content.innerHTML = `${contentText} content`;
  });
});

function removeClassActive() {
  quick__link.forEach((item) => {
    item.classList.remove("active");
  });
}

quick__btn.addEventListener("click", () => {
  if (quick__input.value > 3 || quick__input.value < 0) {
    alert("Invalid Index");
    quick__input.value = "";
  } else {
    let inputValue = quick__input.value - 1;

    removeClassActive();
    quick__link[inputValue].classList.add("active");
    quick__content.innerHTML = `${quick__link[inputValue].innerHTML} content`;
    quick__input.value = "";
  }
});
