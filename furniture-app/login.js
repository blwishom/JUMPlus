function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginMessage = document.getElementById('loginMessage');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        // Add more users as needed
    ];

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        localStorage.setItem('loggedInUser', username);
        location.href = 'index.html';
    } else {
        loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
}

document.getElementById('loginForm').addEventListener('submit', login);
