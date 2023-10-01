function logout() {
    localStorage.removeItem('loggedInUser');
    location.href = 'login.html';
}
