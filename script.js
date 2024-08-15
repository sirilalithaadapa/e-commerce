let cartItems = [];
let currentProduct = {};

function showPopup(product) {
    const products = {
        product1: {
            img: 'saree1.jpg',
            title: 'Saree 1',
            price: '$50.00',
            type: 'silk'
        },
        product2: {
            img: 'saree2.jpg',
            title: 'Saree 2',
            price: '$60.00',
            type: 'cotton'
        },
        product3: {
            img: 'saree3.jpg',
            title: 'Saree 3',
            price: '$55.00',
            type: 'georgette'
        },
        product4: {
            img: 'saree4.jpg',
            title: 'Saree 4',
            price: '$75.00',
            type: 'silk'
        },
        product5: {
            img: 'saree5.jpg',
            title: 'Saree 5',
            price: '$58.00',
            type: 'cotton'
        },
        product6: {
            img: 'saree6.jpg',
            title: 'Saree 6',
            price: '$88.00',
            type: 'georgette'
        },
        banarasi1: {
            img: 'Images/Banarasi/saree1.jpg',
            title: 'Banarasi Saree 1',
            price: '$100.00',
            type: 'banarasi'
        },
        banarasi2: {
            img: 'Images/Banarasi/saree2.jpg',
            title: 'Banarasi Saree 2',
            price: '$120.00',
            type: 'banarasi'
        },
        banarasi3: {
            img: 'Images/Banarasi/saree3.jpg',
            title: 'Banarasi Saree 3',
            price: '$150.00',
            type: 'banarasi'
        },
        banarasi4: {
            img: 'Images/Banarasi/saree4.jpg',
            title: 'Banarasi Saree 4',
            price: '$140.00',
            type: 'banarasi'
        },
        banarasi5: {
            img: 'Images/Banarasi/saree5.jpg',
            title: 'Banarasi Saree 5',
            price: '$160.00',
            type: 'banarasi'
        },
        kanchivaram1: {
            img: 'Images/Kanjivaram/saree1.jpg',
            title: 'Kanchivaram Saree 1',
            price: '$150.00',
            type: 'kanchivaram'
        },
        kanchivaram2: {
            img: 'Images/Kanjivaram/saree2.jpg',
            title: 'Kanchivaram Saree 2',
            price: '$180.00',
            type: 'kanchivaram'
        },
        kanchivaram3: {
            img: 'Images/Kanjivaram/saree3.jpg',
            title: 'Kanchivaram Saree 3',
            price: '$1800.00',
            type: 'kanchivaram'
        },
        kanchivaram4: {
            img: 'Images/Kanjivaram/saree4.jpg',
            title: 'Kanchivaram Saree 4',
            price: '$1500.00',
            type: 'kanchivaram'
        },
        kanchivaram5: {
            img: 'Images/Kanjivaram/saree5.jpg',
            title: 'Kanchivaram Saree 5',
            price: '$1200.00',
            type: 'kanchivaram'
        },
        kanchivaram6: {
            img: 'Images/Kanjivaram/saree6.jpg',
            title: 'Kanchivaram Saree 6',
            price: '$1100.00',
            type: 'kanchivaram'
        },
        kanchivaram7: {
            img: 'Images/Kanjivaram/saree7.jpg',
            title: 'Kanchivaram Saree 7',
            price: '$1800.00',
            type: 'kanchivaram'
        },
        chanderi1: {
            img: 'Images/chanderi/saree1.jpg',
            title: 'Chanderi Saree 1',
            price: '$1300.00',
            type: 'chanderi'
        },
        chanderi2: {
            img: 'Images/chanderi/saree2.jpg',
            title: 'Chanderi Saree 2',
            price: '$1500.00',
            type: 'chanderi'
        },
        chanderi3: {
            img: 'Images/chanderi/saree3.jpg',
            title: 'Chanderi Saree 3',
            price: '$1400.00',
            type: 'chanderi'
        },
        chanderi4: {
            img: 'Images/chanderi/saree4.jpg',
            title: 'Chanderi Saree 4',
            price: '$1300.00',
            type: 'chanderi'
        },
        chanderi5: {
            img: 'Images/chanderi/saree5.jpg',
            title: 'Chanderi Saree 5',
            price: '$1400.00',
            type: 'chanderi'
        },
        chanderi6: {
            img: 'Images/chanderi/saree6.jpg',
            title: 'Chanderi Saree 6',
            price: '$1800.00',
            type: 'chanderi'
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
document.getElementById('priceRange').addEventListener('input', function () {
    let minPrice = this.min;
    let maxPrice = this.max;
    let value = this.value;
    document.getElementById('min-price').textContent = minPrice;
    document.getElementById('max-price').textContent = value;

    filterProductsByPrice(minPrice, value);
});

function filterProductsByPrice(min, max) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const priceText = product.querySelector('p').textContent.replace('$', '');
        const price = parseFloat(priceText);
        if (price >= min && price <= max) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
