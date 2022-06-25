// for fading effect

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fading");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1;
  if (contentPosition < screenPosition) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fading-1");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 0.7;
  if (contentPosition < screenPosition) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fading-2");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1;
  if (contentPosition < screenPosition) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fading-3");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 0.8;
  if (contentPosition < screenPosition) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fading-4");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1;
  if (contentPosition < screenPosition) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});
