function showTab(tabId) {
  let tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("themeToggle");

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btn.textContent = "Light";
    } else {
      btn.textContent = "Dark";
    }
  });

});

fetch("https://api.countapi.xyz/hit/shubham-portfolio/visits")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitor-count").textContent = data.value;
  });
