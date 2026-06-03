// =====================================
// 📑 TAB SWITCHING
// =====================================

function showTab(tabId) {

  let tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const activeTab = document.getElementById(tabId);

  if (activeTab) {
    activeTab.classList.add('active');
  }

}


// =====================================
// 🚀 RUN AFTER PAGE LOAD
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("themeToggle");

  let savedTheme = localStorage.getItem("theme");

  // Default = DARK
  if (!savedTheme) {
    savedTheme = "dark";
    localStorage.setItem("theme", "dark");
  }

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (btn) btn.textContent = "☀️";

  } else {

    document.body.classList.remove("dark");

    if (btn) btn.textContent = "🌙";

  }

  // Theme Toggle
  if (btn) {

    btn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️";

      } else {

        localStorage.setItem("theme", "light");
        btn.textContent = "🌙";

      }

    });

  }

});

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

});


// =====================================
// 🏆 ACHIEVEMENT TOGGLE
// =====================================

function toggleAch(element) {

  element.classList.toggle("active");

}


// =====================================
// 💻 PROJECT TOGGLE
// =====================================

function toggleProject(element) {

  element.classList.toggle("active");

}


// =====================================
// 📂 SUB PROJECT TOGGLE
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

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];
  let shootingStars = [];

  // =====================================
  // ⭐ CREATE NORMAL STARS
  // =====================================

  for (let i = 0; i < 250; i++) {

    stars.push({

      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,

      radius: Math.random() * 2,

      speed: Math.random() * 0.5

    });

  }


  // =====================================
  // 🌠 CREATE SHOOTING STAR
  // =====================================

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


  // =====================================
  // 🎥 ANIMATION LOOP
  // =====================================

  function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // =====================================
    // ⭐ NORMAL STARS
    // =====================================

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


    // =====================================
    // 🌠 SHOOTING STARS
    // =====================================

    shootingStars.forEach((s, index) => {

      ctx.beginPath();

      let gradient = ctx.createLinearGradient(
        s.x,
        s.y,
        s.x - s.len,
        s.y - s.len
      );

      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "transparent");

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

      // REMOVE WHEN OUTSIDE SCREEN
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


  // =====================================
  // 📱 RESIZE FIX
  // =====================================

  window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  });

}
