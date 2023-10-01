// Function to handle login
function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginMessage = document.getElementById('loginMessage');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simulate user authentication (Replace with your actual authentication logic)
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        // Add more users as needed
    ];

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Successful login
        localStorage.setItem('loggedInUser', username);
        location.href = 'index.html'; // Redirect to the home page
    } else {
        // Failed login
        loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
}

// Add event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', login);
