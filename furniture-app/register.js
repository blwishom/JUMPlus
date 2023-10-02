document.getElementById('registerButton').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('usernameInput').value.trim();

    if (username === '') {
        alert('Please enter a valid username.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (users.includes(username)) {
        alert('Username already exists. Please choose another.');
    } else {
        users.push(username);
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        alert('Registration successful! You can now login.');
        window.location.href = 'login.html'; // Redirect to login.html
    }
});
