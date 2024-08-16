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

function redirectToCartPage() {
    const cartPage = document.createElement('a');
    cartPage.href = 'cart.html';
    cartPage.click();
}

function getCartSummary() {
    const cartSummary = cartItems.map(item => `<li>${item.title} - ${item.price} x ${item.quantity}</li>`).join('');
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
    return `
        <ul>${cartSummary}</ul>
        <p>Total: $${total}</p>
        <form id="paymentForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required>
            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" required>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required>
            <button type="submit">Pay Now</button>
        </form>
    `;
}

function renderCartPage() {
    document.body.innerHTML = `
        <h1>Your Cart</h1>
        ${getCartSummary()}
        <button onclick="window.history.back()">Back</button>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
});

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
    const minPrice = this.min;
    const maxPrice = this.value;
    document.getElementById('max-price').textContent = maxPrice;

    filterProductsByPrice(minPrice, maxPrice);
});
document.addEventListener('DOMContentLoaded', function () {
    const filters = {
        fashionLine: [],
        collection: [],
        gender: [],
        category: '',
        occasion: '',
        color: '',
        price: { min: 50, max: 500 }
    };

    // Handle filter changes
    document.querySelectorAll('input[name="fashion-line"]').forEach(input => {
        input.addEventListener('change', updateFilters);
    });
    document.querySelectorAll('input[name="collection"]').forEach(input => {
        input.addEventListener('change', updateFilters);
    });
    document.querySelectorAll('input[name="gender"]').forEach(input => {
        input.addEventListener('change', updateFilters);
    });
    document.getElementById('categoryFilter').addEventListener('change', updateFilters);
    document.getElementById('occasionFilter').addEventListener('change', updateFilters);
    document.getElementById('colorFilter').addEventListener('input', updateFilters);
    document.getElementById('priceRange').addEventListener('input', updateFilters);

    function updateFilters() {
        filters.fashionLine = Array.from(document.querySelectorAll('input[name="fashion-line"]:checked')).map(input => input.value);
        filters.collection = Array.from(document.querySelectorAll('input[name="collection"]:checked')).map(input => input.value);
        filters.gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
        filters.category = document.getElementById('categoryFilter').value;
        filters.occasion = document.getElementById('occasionFilter').value;
        filters.color = document.getElementById('colorFilter').value.toLowerCase();
        filters.price.max = document.getElementById('priceRange').value;

        filterProducts();
    }

    function filterProducts() {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const type = product.getAttribute('data-type');
            const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            const productCategory = product.classList.contains('product-category');
            const productOccasion = product.classList.contains('product-occasion');
            const productColor = product.querySelector('img').alt.toLowerCase();

            const isFashionLineMatch = filters.fashionLine.length === 0 || filters.fashionLine.includes(product.getAttribute('data-type'));
            const isCollectionMatch = filters.collection.length === 0 || filters.collection.includes(product.getAttribute('data-type'));
            const isGenderMatch = filters.gender.length === 0 || filters.gender.includes(product.getAttribute('data-type'));
            const isCategoryMatch = !filters.category || productCategory === filters.category;
            const isOccasionMatch = !filters.occasion || productOccasion === filters.occasion;
            const isColorMatch = !filters.color || productColor.includes(filters.color);
            const isPriceMatch = price >= filters.price.min && price <= filters.price.max;

            if (isFashionLineMatch && isCollectionMatch && isGenderMatch && isCategoryMatch && isOccasionMatch && isColorMatch && isPriceMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
