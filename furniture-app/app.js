// Array of furniture products
const products = [
    { id: 1, name: 'Sofa', price: 500 },
    { id: 2, name: 'Coffee Table', price: 200 },
    { id: 3, name: 'Chair', price: 100 },
    { id: 4, name: 'Twin Bed', price: 300 },
    { id: 5, name: 'Full Bed', price: 400 },
    { id: 6, name: 'Queen Bed', price: 600 },
    { id: 7, name: 'King Bed', price: 800 },
];

let cart = [];

// Check if a user is already logged in
const loggedInUser = localStorage.getItem('loggedInUser');
const loginLink = document.getElementById('loginLink'); // Get the login link element
const registerLink = document.getElementById('registerLink'); // Get the register link element

if (loggedInUser) {
    document.getElementById('username').textContent = `Welcome, ${loggedInUser}!`;
    loginLink.style.display = 'none'; // Hide the login link when the user is logged in
    registerLink.style.display = 'none'; // Hide the register link when the user is logged in
    document.getElementById('logoutLink').style.display = 'block'; // Show the logout link
} else {
    loginLink.style.display = 'block'; // Show the login link when the user is not logged in
    registerLink.style.display = 'block'; // Show the register link when the user is not logged in
    document.getElementById('logoutLink').style.display = 'none'; // Hide the logout link
}

// Function to display products
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item'); // Add a class for styling
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update the cart
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    location.href = 'login.html'; // Redirect to the login page after logout
}

// Add click event listener for logout button
document.getElementById('logoutLink').addEventListener('click', logout);

// Initial setup
if (window.location.pathname === '/cart.html') {
    updateCart();
} else {
    displayProducts();
}
