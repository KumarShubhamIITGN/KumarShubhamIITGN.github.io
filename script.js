// =====================================
// 📑 TAB SWITCHING
// =====================================

function showTab(tabId) {

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  const target = document.getElementById(tabId);

  if (target) {
    target.classList.add("active");
  }

  // Close mobile menu after click
  const sideMenu = document.getElementById("sideMenu");

  if (window.innerWidth <= 768 && sideMenu) {
    sideMenu.classList.remove("show");
  }
}


// =====================================
// 🚀 PAGE LOAD
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // 🌙 THEME TOGGLE
  // =====================================

  const themeBtn = document.getElementById("themeToggle");

  let savedTheme = localStorage.getItem("theme");

  // Default = DARK
  if (!savedTheme) {

    savedTheme = "dark";
    localStorage.setItem("theme", "dark");

  }

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }

  } else {

    document.body.classList.remove("dark");

    if (themeBtn) {
      themeBtn.textContent = "🌙";
    }

  }

  if (themeBtn) {

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";

      } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";

      }

    });

  }

  // =====================================
  // 🍔 HAMBURGER MENU
  // =====================================

  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");

  if (hamburger && sideMenu) {

    hamburger.addEventListener("click", () => {

      sideMenu.classList.toggle("show");

    });

  }

  // =====================================
  // 👁️ VISITOR COUNTER
  // =====================================

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
        counter.textContent = "—";
      }

    });

});


// =====================================
// 🏆 ACHIEVEMENTS
// =====================================

function toggleAch(element) {

  element.classList.toggle("active");

}


// =====================================
// 💻 PROJECTS
// =====================================

function toggleProject(element) {

  element.classList.toggle("active");

}


// =====================================
// 📂 SUB PROJECTS
// =====================================

function toggleSub(event, element) {

  event.stopPropagation();

  element.classList.toggle("active");

}


// =====================================
// 🌌 SPACE BACKGROUND
// =====================================

const canvas = document.getElementById("space");

if (canvas) {

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }

  resizeCanvas();

  let stars = [];
  let shootingStars = [];

  // Stars

  for (let i = 0; i < 250; i++) {

    stars.push({

      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,

      radius: Math.random() * 2,

      speed: Math.random() * 0.5

    });

  }

  // Shooting stars

  function createShootingStar() {

    shootingStars.push({

      x: Math.random() * canvas.width,

      y: Math.random() * canvas.height / 2,

      len: Math.random() * 80 + 50,

      speed: Math.random() * 10 + 6,

      size: Math.random() * 2 + 1

    });

  }

  setInterval(createShootingStar, 2500);

  function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {

      ctx.beginPath();

      ctx.arc(
        star.x,
        star.y,
        star.radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      star.y += star.speed;

      if (star.y > canvas.height) {

        star.y = 0;
        star.x = Math.random() * canvas.width;

      }

    });

    shootingStars.forEach((s, index) => {

      const gradient = ctx.createLinearGradient(
        s.x,
        s.y,
        s.x - s.len,
        s.y - s.len
      );

      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();

      ctx.strokeStyle = gradient;

      ctx.lineWidth = s.size;

      ctx.moveTo(s.x, s.y);

      ctx.lineTo(
        s.x - s.len,
        s.y - s.len
      );

      ctx.stroke();

      s.x += s.speed;
      s.y += s.speed;

      if (
        s.x > canvas.width ||
        s.y > canvas.height
      ) {

        shootingStars.splice(index, 1);

      }

    });

    requestAnimationFrame(animateStars);

  }

  animateStars();

  window.addEventListener("resize", resizeCanvas);

}
