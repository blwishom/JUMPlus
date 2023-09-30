document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;
    if (username.trim() === '') {
        alert('Please enter a valid username.');
        return;
    }
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'index.html';
});
