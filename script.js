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
  if (!event.newURL.includes("overlay")) {
    removeOverlay();
  }
};

let projects = {
  project: {
    title: "Mealprep Buddy",
    image: "images/screenshots/mealprep-buddy.png",
    description:
      "Responsive web assistant which creates a week's worth of meal planning based on the weather conditions of your city. Provides links to recipies and creates a shopping list of needed ingredients in the correct quantities. Group project.",
    tech:
      "OpenWeatherMap API, Spoonacular API, Skeleton.js, local storage, JS, HTML5",
    GHLink: "https://github.com/PeterTYLiu/Project-1",
    liveLink: "https://petertyliu.github.io/Project-1/index.html",
  },
  a1: {
    title: "Weather Dashboard",
    image: "images/screenshots/weather-dashboard.png",
    description:
      "Responsive web app to fetch current weather conditions of any city, as well as provide a five-day forecast. Stores search history locally, with results available offline.",
    tech: "OpenWeatherMap API, Skeleton.js, local storage, JS, HTML5",
    GHLink: "https://github.com/PeterTYLiu/sixth-assignment-weather-dashboard",
    liveLink:
      "https://petertyliu.github.io/sixth-assignment-weather-dashboard/",
  },
  a2: {
    title: "Day Planner",
    image: "images/screenshots/planner.png",
    description:
      "Responsive web app to plan a day. Dynamically changes formatting based on the current time. Code written elegantly so that the starting time and number of hours planned can be easily changed.",
    tech: "JQuery, Bootstrap, local storage, JS, HTML5",
    GHLink: "https://github.com/PeterTYLiu/fifth-assignment-day-planner",
    liveLink:
      "https://petertyliu.github.io/fifth-assignment-day-planner/index.html",
  },
  a3: {
    title: "BubblEscape (android app)",
    image: "images/screenshots/bubblescape.png",
    description:
      "Created designs and graphics for an android game in high school with friends. Game is awful, graphics are great.",
    tech: "GIMP",
    GHLink: `" style="cursor: auto;">No <a style="padding-left: 0px" foo="`,
    liveLink: "https://play.google.com/store/apps/details?id=com.RICE",
  },
  a4: {
    title: "Goodbye Machine",
    image: "images/screenshots/goodbye.png",
    description: "A fun animation using nothing but pure HTML5 and CSS3.",
    tech: "CSS3, HTML5",
    GHLink:
      "https://github.com/PeterTYLiu/about/blob/master/farewellomatic.html",
    liveLink: "https://petertyliu.github.io/about/farewellomatic",
  },
};

let keys = Object.keys(projects);

// Function which creates the overlay content for each project
keys.forEach((key) => {
  document.getElementById(key).addEventListener("click", () => {
    overlayInner.innerHTML = `
    <h2>${projects[key].title}<span style='float: right; cursor: pointer; color: #999;' onclick='removeOverlay()'>✕</span></h2>
    <img src='${projects[key].image}' style='border: 1px solid #ddd; max-height: 600px; max-width: 100%; margin-right: auto; margin-left: auto; display: block; margin-bottom: 3rem'>
    <p>${projects[key].description}</p>
    <p><strong>Technologies used:</strong> ${projects[key].tech}</p>
    <p><a href="${projects[key].GHLink}" target="_blank">Github repo ➚</a></p>
    <p><a href="${projects[key].liveLink}" target="_blank">Live site ➚</a></p>`;
    addOverlay();
  });
});
