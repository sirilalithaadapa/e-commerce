// Assuming cartItems is an array of objects where each object represents an item in the cart
// Example cartItems array
let cartItems = [
    { title: 'Saree 1', price: '$50.00', quantity: 2 },
    { title: 'Saree 2', price: '$60.00', quantity: 1 },
];

function updateCartPage() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');

    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        totalPriceSpan.textContent = '0.00';
        document.getElementById('checkout-btn').style.display = 'none';
    } else {
        let total = 0;
        cartItemsList.innerHTML = cartItems.map(item => {
            const itemTotal = parseFloat(item.price.slice(1)) * item.quantity;
            total += itemTotal;
            return `<li>${item.title} - ${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}</li>`;
        }).join('');

        totalPriceSpan.textContent = total.toFixed(2);
    }
}
