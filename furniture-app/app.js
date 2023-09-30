const products = [
    { id: 1, name: 'Sofa', price: 500 },
    { id: 2, name: 'Coffee Table', price: 200 },
    { id: 3, name: 'Chair', price: 100 },
];

let cart = [];

const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    document.getElementById('username').textContent = `Welcome, ${loggedInUser}!`;
    document.getElementById('logoutButton').style.display = 'block';
} else {
    document.getElementById('logoutButton').style.display = 'none';
}

function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

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

function logout() {
    localStorage.removeItem('loggedInUser');
    location.href = 'login.html'; 
}

document.getElementById('logoutButton').addEventListener('click', logout);

if (window.location.pathname === '/cart.html') {
    updateCart();
} else {
    displayProducts();
}
