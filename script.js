// TAB SWITCHING
function showTab(tabId) {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}


// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {

  // 🌙 THEME TOGGLE
  const btn = document.getElementById("themeToggle");

  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        btn.textContent = "Light";
      } else {
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
