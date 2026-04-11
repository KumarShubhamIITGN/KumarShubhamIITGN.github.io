function showTab(tabId) {
  let tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
}

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeToggle");

  body.classList.toggle("dark");

  // Change icon based on mode
  if (body.classList.contains("dark")) {
    btn.textContent = "☀️"; // show day icon
  } else {
    btn.textContent = "🌙"; // show night icon
  }
}
