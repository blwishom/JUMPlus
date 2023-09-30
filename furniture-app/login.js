// Function to handle login
function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginMessage = document.getElementById('loginMessage');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // You can implement your own authentication logic here
    if (username === 'your_username' && password === 'your_password') {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirect to the home page after successful login
    } else {
        loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
}

// Add event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', login);
