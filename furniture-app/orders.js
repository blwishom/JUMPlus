document.addEventListener('DOMContentLoaded', function () {
    const ordersList = document.getElementById('ordersList');

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

    function isLoggedIn() {
        return !!localStorage.getItem('loggedInUser');
    }

    function updateNavbar() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loginLink = document.getElementById('loginLink');
        const logoutLink = document.getElementById('logoutLink');
        const usernameElement = document.getElementById('username');

        if (loggedInUser) {
            usernameElement.textContent = `Logged in as ${loggedInUser}`;
            usernameElement.style.display = 'inline';
            loginLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            usernameElement.style.display = 'none';
            loginLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }

    updateNavbar();
});
