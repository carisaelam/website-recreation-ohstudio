const navButtons = document.querySelectorAll(".nav__button");

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    navButtons.forEach((button) => {
      button.classList.remove("nav__button--selected");
    });
    let buttonClassList = e.target.classList;
    if (!buttonClassList.contains("nav__button--selected")) {
      buttonClassList.toggle("nav__button--selected");
    } else return;
  });
});

ScrollReveal().reveal(".nav__container", { delay: 500 });
ScrollReveal().reveal(".hero__container", { delay: 500 });
ScrollReveal().reveal(".banner__container", { delay: 200 });
