let cartItems = [];
let currentProduct = {};


function showPopup(product) {
    const products = {
        product1: {
            img: 'Images/saree1.jpg',
            title: 'Saree 1',
            price: '$150.00',
            type: 'silk'
        },
        product2: {
            img: 'Images/saree2.jpg',
            title: 'Saree 2',
            price: '$160.00',
            type: 'cotton'
        },
        product3: {
            img: 'Images/saree3.jpg',
            title: 'Saree 3',
            price: '$155.00',
            type: 'georgette'
        },
        product4: {
            img: 'Images/saree4.jpg',
            title: 'Saree 4',
            price: '$175.00',
            type: 'silk'
        },
        product5: {
            img: 'Images/saree5.jpg',
            title: 'Saree 5',
            price: '$258.00',
            type: 'cotton'
        },
        product6: {
            img: 'Images/saree6.jpg',
            title: 'Saree 6',
            price: '$188.00',
            type: 'georgette'
        },
        product7: {
            img: 'Images/saree7.jpg',
            title: 'Saree 7',
            price: '$200.00',
            type: 'georgette'
        },
        product8: {
            img: 'Images/saree8.jpg',
            title: 'Saree 8',
            price: '$250.00',
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

function sortProducts() {
    const sortOption = document.getElementById('sortOptions').value;
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(productGrid.children);

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));

        return sortOption === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    productGrid.innerHTML = '';
    products.forEach(product => productGrid.appendChild(product));
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
    updateCartCount();
    closePopup();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}

function redirectToCartPage() {
    window.location.href = 'cart.html';
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
    updateCartCount();
    renderCartPage(); // Ensure cart page is updated after quantity change
}

function filterProductsByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        product.style.display = (price >= minPrice && price <= maxPrice) ? 'block' : 'none';
    });
}

function updateFilters() {
    const filters = {
        fashionLine: Array.from(document.querySelectorAll('input[name="fashion-line"]:checked')).map(input => input.value),
        collection: Array.from(document.querySelectorAll('input[name="collection"]:checked')).map(input => input.value),
        gender: Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value),
        category: document.getElementById('categoryFilter').value,
        occasion: document.getElementById('occasionFilter').value,
        color: document.getElementById('colorFilter').value.toLowerCase(),
        price: { min: 50, max: document.getElementById('priceRange').value }
    };

    filterProducts(filters);
}

function filterProducts(filters) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const type = product.getAttribute('data-type');
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        const productCategory = product.classList.contains('product-category');
        const productOccasion = product.classList.contains('product-occasion');
        const productColor = product.querySelector('img').alt.toLowerCase();

        const isMatch = (
            (!filters.fashionLine.length || filters.fashionLine.includes(type)) &&
            (!filters.collection.length || filters.collection.includes(type)) &&
            (!filters.gender.length || filters.gender.includes(type)) &&
            (!filters.category || productCategory === filters.category) &&
            (!filters.occasion || productOccasion === filters.occasion) &&
            (!filters.color || productColor.includes(filters.color)) &&
            (price >= filters.price.min && price <= filters.price.max)
        );

        product.style.display = isMatch ? 'block' : 'none';
    });
}

function toggleFilters() {
    const filtersMenu = document.getElementById('filtersMenu');
    filtersMenu.style.display = filtersMenu.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize event listeners for filters
    document.querySelectorAll('input[name="fashion-line"]').forEach(input => input.addEventListener('change', updateFilters));
    document.querySelectorAll('input[name="collection"]').forEach(input => input.addEventListener('change', updateFilters));
    document.querySelectorAll('input[name="gender"]').forEach(input => input.addEventListener('change', updateFilters));
    document.getElementById('categoryFilter').addEventListener('change', updateFilters);
    document.getElementById('occasionFilter').addEventListener('change', updateFilters);
    document.getElementById('colorFilter').addEventListener('input', updateFilters);
    document.getElementById('priceRange').addEventListener('input', function () {
        document.getElementById('max-price').textContent = this.value;
        updateFilters();
    });

    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
});