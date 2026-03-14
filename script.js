// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simple login check
    if(username === "student" && password === "1234") {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // go to dashboard page
        }, 1000);
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid username or password!";
    }
});
