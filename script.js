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
    if (btn) btn.textContent = "Light";
  } else {
    if (btn) btn.textContent = "Dark";
  }

  // 🔹 TOGGLE THEME
  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        btn.textContent = "Light";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "Dark";
      }
    });
  }

  // 👁️ VISITOR COUNTER (FIXED)
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
        counter.textContent = "N/A";
      }
    });

});


// 🎯 ACHIEVEMENT TOGGLE
function toggleAch(element) {
  element.classList.toggle("active");
}
function toggleProject(element) {
  element.classList.toggle("active");
}
function toggleProject(element) {
  element.classList.toggle("active");
}

// IMPORTANT: prevent parent click
function toggleSub(event, element) {
  event.stopPropagation();  // 🔥 KEY LINE
  element.classList.toggle("active");
}
