const products = [
    { id: 1, name: 'Sofa', price: 500 },
    { id: 2, name: 'Coffee Table', price: 200 },
    { id: 3, name: 'Twin Bed', price: 300 },
    { id: 4, name: 'Full Bed', price: 400 },
    { id: 5, name: 'Queen Bed', price: 600 },
    { id: 6, name: 'King Bed', price: 800 },
];

let cart = [];

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

document.addEventListener('DOMContentLoaded', function () {
    const productButtons = document.querySelectorAll('.product-item button');
    productButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(button.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
});

// Add Buy button event listener
document.getElementById('buyButton').addEventListener('click', function () {
    if (cart.length > 0) {
        // Create a receipt object with cart items and total
        const receipt = {
            items: cart,
            total: calculateTotal(),
        };

        // Store the receipt in local storage
        localStorage.setItem('receipt', JSON.stringify(receipt));

        // Clear the cart
        cart = [];
        updateCart();

        // Redirect to the receipt page
        location.href = 'receipt.html';
    } else {
        alert('Your cart is empty. Add items before buying.');
    }
});

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total.toFixed(2);
}
