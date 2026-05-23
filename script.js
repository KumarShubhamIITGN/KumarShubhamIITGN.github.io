// TAB SWITCHING
function showTab(tabId) {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}


// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("themeToggle");

  // 🔹 LOAD SAVED THEME
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (btn) btn.textContent = "☀️";
  } else {
    if (btn) btn.textContent = "🌙";
  }

  // 🔹 TOGGLE THEME + SAVE
  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");   // ✅ FIXED
        btn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");  // ✅ FIXED
        btn.textContent = "🌙";
      }
    });
  }

  // 👁️ VISITOR COUNTER (safe fallback)
  fetch("https://api.countapi.xyz/hit/shubham-iitgn-portfolio-unique/visits")
    .then(res => res.json())
    .then(data => {
      const counter = document.getElementById("visitor-count");
      if (counter) {
        counter.textContent = data.value;
      }
    })
    .catch(() => {
      const counter = document.getElementById("visitor-count");
      if (counter) {
        counter.textContent = "—";   // cleaner fallback
      }
    });

});


// 🎯 ACHIEVEMENT TOGGLE
function toggleAch(element) {
  element.classList.toggle("active");
}

// 🎯 PROJECT TOGGLE
function toggleProject(element) {
  element.classList.toggle("active");
}

// 🎯 SUB PROJECT TOGGLE
function toggleSub(event, element) {
  event.stopPropagation();
  element.classList.toggle("active");
}

// 🌌 SPACE BACKGROUND ANIMATION

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 250; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5
  });
}

function animateStars() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach(star => {

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

  });

  requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show-menu");
}
