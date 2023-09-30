document.getElementById('registerButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;

    // Basic validation: Ensure the username is not empty
    if (username.trim() === '') {
        alert('Please enter a valid username.');
        return;
    }

    // Check if the username is already taken
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (users.includes(username)) {
        alert('Username already exists. Please choose another.');
    } else {
        users.push(username);
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        alert('Registration successful! You can now login.');
        window.location.href = 'login.html';
    }
});
