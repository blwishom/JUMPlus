const products = [
    { id: 1, name: 'Sofa', price: 500 },
    { id: 2, name: 'Coffee Table', price: 200 },
    { id: 3, name: 'Twin Bed', price: 300 },
    { id: 4, name: 'Full Bed', price: 400 },
    { id: 5, name: 'Queen Bed', price: 600 },
    { id: 6, name: 'King Bed', price: 800 },
];

let cart = [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function removeItemFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        updateCart();
    }
}

function emptyCart() {
    cart = [];
    updateCart();
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total.toFixed(2);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.addEventListener('click', () => {
            removeItemFromCart(index);
        });

        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    const emptyButton = document.getElementById('emptyCart');
    emptyButton.addEventListener('click', () => {
        emptyCart();
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
}

function updateNavbar() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const logoutLink = document.getElementById('logoutLink');
    const usernameElement = document.getElementById('username');

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

document.addEventListener('DOMContentLoaded', function () {
    const productButtons = document.querySelectorAll('.product-item button');
    productButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(button.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });

    document.getElementById('buyButton').addEventListener('click', function () {
        if (isLoggedIn()) {
            if (cart.length > 0) {
                const receipt = {
                    items: cart,
                    total: calculateTotal(),
                };
                localStorage.setItem('receipt', JSON.stringify(receipt));

                // Create an order with the current date and cart contents
                const order = {
                    date: new Date().toLocaleDateString(),
                    items: cart,
                    total: parseFloat(calculateTotal()),
                };

                // Add the order to the orders list
                orders.push(order);
                localStorage.setItem('orders', JSON.stringify(orders));

                cart = [];
                updateCart();
                location.href = 'receipt.html';
            } else {
                alert('Your cart is empty. Add items before buying.');
            }
        } else {
            alert('Please login to make a purchase.');
            location.href = 'login.html';
        }
    });

    // Function to handle logout
    function logout() {
        // Remove the user's information from localStorage
        localStorage.removeItem('loggedInUser');

        // Redirect the user to the login page or any other desired location
        location.href = 'login.html';
    }

    // Add an event listener to the logout link
    document.getElementById('logoutLink').addEventListener('click', logout);

    updateNavbar();
});
