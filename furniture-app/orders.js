document.addEventListener('DOMContentLoaded', function () {
    const ordersList = document.getElementById('ordersList');
    const usernameElement = document.getElementById('username');

    // Function to check if a user is logged in
    function isLoggedIn() {
        return !!localStorage.getItem('loggedInUser');
    }

    // Function to update the navbar
    function updateNavbar() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loginLink = document.getElementById('loginLink');
        const registerLink = document.getElementById('registerLink');
        const logoutLink = document.getElementById('logoutLink');

        if (loggedInUser) {
            usernameElement.textContent = `Logged in as ${loggedInUser}`;
            usernameElement.style.display = 'inline'; // Show username
            loginLink.style.display = 'none';
            registerLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            usernameElement.style.display = 'none'; // Hide username
            loginLink.style.display = 'block';
            registerLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }

    // Retrieve and display orders
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders found.</p>';
    } else {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <h2>Order Date: ${order.date}</h2>
                <ul>
                    ${order.items.map(item => `<li>${item.name} - $${item.price}</li>`).join('')}
                </ul>
                <p>Total: $${order.total.toFixed(2)}</p>
            `;
            ordersList.appendChild(orderItem);
        });
    }

    // Update the navbar
    updateNavbar();

    // Handle logout
    document.getElementById('logoutLink').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        location.href = 'login.html';
    });
});
