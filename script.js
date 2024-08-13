let cartItems = [];
let currentProduct = {};

function showPopup(product) {
    const products = {
        product1: {
            img: 'saree1.jpg',
            title: 'Saree 1',
            price: '$50.00'
        },
        product2: {
            img: 'saree2.jpg',
            title: 'Saree 2',
            price: '$60.00'
        },
        product3: {
            img: 'saree3.jpg',
            title: 'Saree 3',
            price: '$55.00'
        },
        product4: {
            img: 'saree4.jpg',
            title: 'Saree 4',
            price: '$75.00'
        },
        product5: {
            img: 'saree5.jpg',
            title: 'Saree 5',
            price: '$58.00'
        },
        product6: {
            img: 'saree6.jpg',
            title: 'Saree 6',
            price: '$88.00'
        },
        product7: {
            img: 'saree7.jpg',
            title: 'Saree 7',
            price: '$70.00'
        }

    };

    currentProduct = products[product];
    document.getElementById('popup-img').src = currentProduct.img;
    document.getElementById('popup-title').textContent = currentProduct.title;
    document.getElementById('popup-price').textContent = currentProduct.price;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function addToCart() {
    const foundItem = cartItems.find(item => item.title === currentProduct.title);
    if (foundItem) {
        foundItem.quantity += 1;
    } else {
        currentProduct.quantity = 1;
        cartItems.push(currentProduct);
    }
    document.getElementById('cart-count').textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    closePopup();
}

function openCartPopup() {
    const cartPopup = window.open("", "Cart", "width=400,height=600");
    cartPopup.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Your Cart</title><link rel="stylesheet" href="style.css"></head><body>');
    cartPopup.document.write('<div class="cart-popup"><h3>Your Cart</h3><ul id="cart-items-popup"></ul><button onclick="window.close()">Close Cart</button></div></body></html>');
    cartPopup.document.close();

    const cartItemsList = cartPopup.document.getElementById('cart-items-popup');
    cartItemsList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const li = cartPopup.document.createElement('li');
        li.innerHTML = `
            <span>${item.title} - ${item.price}</span>
            <div class="quantity-controls">
                <button onclick="window.opener.updateQuantity(${index}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="window.opener.updateQuantity(${index}, 'increase')">+</button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });
}

function updateQuantity(index, action) {
    if (action === 'increase') {
        cartItems[index].quantity += 1;
    } else if (action === 'decrease') {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
        } else {
            cartItems.splice(index, 1);
        }
    }

    document.getElementById('cart-count').textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    openCartPopup();
}
