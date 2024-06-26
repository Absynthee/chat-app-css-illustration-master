window.onload = function () {
  const elements = document.querySelectorAll(".phone-element");
  let delay = 0;

  elements.forEach((element) => {
    setTimeout(() => {
      element.style.opacity = "1";
    }, delay);
    delay += 1000; // Increase delay for each element
  });
};

function happyDog() {
  const elements = document.querySelectorAll(".happydog");
  elements.forEach((element) => {
    element.classList.add("show");
  });

  setTimeout(() => {
    elements.forEach((element) => {
      element.classList.remove("show");
    });
  }, 5000);
}

function walkingDog() {
  const elements = document.querySelectorAll(".walkingdog");
  elements.forEach((element) => {
    element.classList.add("show");
  });

  setTimeout(() => {
    elements.forEach((element) => {
      element.classList.remove("show");
    });
  }, 5000);
}
