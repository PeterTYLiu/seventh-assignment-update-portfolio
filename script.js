let button = document.getElementById("button");
let navButtonsContainer = document.getElementById("nav-buttons");
let navButtons = document.querySelectorAll(".nav-button");
let navLinks = document.querySelectorAll(".nav-link");
let tagline = document.getElementById("tagline");
let title = document.getElementById("title");
let works = document.querySelectorAll("gallery-item");

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

//=================== Overlay ===================

let overlay = document.createElement("div");
overlay.setAttribute("id", "overlay");
overlay.classList.add("transparent");
let overlayInner = document.createElement("div");
overlayInner.setAttribute("id", "overlay-inner");
overlay.appendChild(overlayInner);

let removeOverlay = () => {
  overlay.classList.add("transparent");
  setTimeout(() => {
    overlay.remove();
  }, 200);
};

let addOverlay = () => {
  document.body.appendChild(overlay);
  location.hash = "#overlay";
  setTimeout(() => {
    overlay.classList.remove("transparent");
  }, 20);
};

window.onhashchange = (event) => {
  console.log(event);
  if (!event.newURL.includes("overlay")) {
    removeOverlay();
  }
};

let projects = {
  project: {
    title: "Mealprep Buddy",
    image: "images/image.png",
    description:
      "Responsive web assistant which creates a week's worth of meal planning based on the weather conditions of your city. Provides links to recipies and creates a shopping list of needed ingredients in the correct quantities. Group project.",
    tech:
      "OpenWeatherMap API, Spoonacular API, Skeleton.js, local storage, JS, HTML5",
    GHLink: "somelink.com",
    liveLink: "somelink.com",
  },
  a1: {
    title: "Weather Dashboard",
    image: "images/image.png",
    description:
      "Responsive web app to fetch current weather conditions of any city, as well as provide a five-day forecast. Stores search history locally, with results available offline.",
    tech: "OpenWeatherMap API, Skeleton.js, local storage, JS, HTML5",
    GHLink: "somelink.com",
    liveLink: "somelink.com",
  },
  a2: {
    title: "Day Planner",
    image: "images/image.png",
    description:
      "Responsive web app to plan a day. Dynamically changes formatting based on the current time. Code written elegantly so that the starting time and number of hours planned can be easily changed.",
    tech: "JQuery, Bootstrap, local storage, JS, HTML5",
    GHLink: "somelink.com",
    liveLink: "somelink.com",
  },
  a3: {
    title: "BubblEscape (android app)",
    image: "images/image.png",
    description:
      "Created designs and graphics for an android game in high school with friends. Game is awful, graphics are great.",
    tech: "GIMP",
    liveLink: "https://play.google.com/store/apps/details?id=com.RICE",
  },
};
