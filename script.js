window.onload = function () {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (rememberMe.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }

    form.reset();
  });

  existingBtn.addEventListener("click", function () {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      alert(`Logged in as ${storedUser}`);
    }
  });
};
