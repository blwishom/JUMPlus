// Create a new JavaScript file named receipt.js with the following content
document.addEventListener('DOMContentLoaded', function () {
    const receiptData = localStorage.getItem('receipt');

    if (receiptData) {
        const receipt = JSON.parse(receiptData);
        const orderItems = document.getElementById('orderItems');
        const orderTotal = document.getElementById('orderTotal');

        receipt.items.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.textContent = `${item.name} - $${item.price}`;
            orderItems.appendChild(orderItem);
        });

        orderTotal.textContent = `Total: $${receipt.total}`;
    } else {
        alert('No receipt found.');
    }
});
