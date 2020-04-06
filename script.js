let button = document.getElementById("button");
let navButtonsContainer = document.getElementById("nav-buttons");
let navButtons = document.querySelectorAll(".nav-button");
let navLinks = document.querySelectorAll(".nav-link");
let tagline = document.getElementById("tagline");
let title = document.getElementById("title");

// Sections
let nav = document.getElementById("nav");
let workSection = document.getElementById("work");
let contactSection = document.getElementById("contact");
let footer = document.getElementById("footer");

// Individual nav links
let about = document.getElementById("about-link");
let work = document.getElementById("work-link");
let contact = document.getElementById("contact-link");

let focus = (navButton) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  navButton.classList.add("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    focus(link);
  });
});

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navButtons.forEach((button) => button.classList.remove("rotated-ccw"));
    navButtonsContainer.classList.remove("rotated-cw");
    tagline.classList.add("transparent");
    nav.classList.add("short");
    title.classList.add("small");
  } else {
    navButtons.forEach((button) => button.classList.add("rotated-ccw"));
    navButtonsContainer.classList.add("rotated-cw");
    tagline.classList.remove("transparent");
    nav.classList.remove("short");
    title.classList.remove("small");
  }

  console.log(`Work top: ${workSection.getBoundingClientRect().top}`);
  console.log(`Contact top: ${contactSection.getBoundingClientRect().top}`);

  if (contactSection.getBoundingClientRect().top < 400) {
    focus(contact);
  } else if (workSection.getBoundingClientRect().top < 200) {
    focus(work);
  } else {
    focus(about);
  }
}

about.addEventListener("click", () => (document.documentElement.scrollTop = 0));

window.onscroll = function () {
  scrollFunction();
};
